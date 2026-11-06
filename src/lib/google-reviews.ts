import { GOOGLE_PLACE_QUERY } from "@/config/reviews";

/**
 * Live Google reviews, read from the Places API (New) on the server.
 *
 * One Text Search call returns the rating, the review count and up to five
 * reviews for the client's Business Profile, so there is no separate place-id
 * lookup to keep in sync. `GOOGLE_PLACE_ID` short-circuits the search if the
 * profile is ever ambiguous.
 *
 * Set `GOOGLE_PLACES_API_KEY` in the Vercel project (server-side only — it
 * must NOT be NEXT_PUBLIC_*, or the key ships to the browser for anyone to
 * use). Without it this returns null and the band falls back to whatever is
 * in config/reviews.ts, which is the state the site ships in.
 *
 * Revalidated daily: reviews do not change by the minute, and the free Places
 * tier is per-call.
 */

export type LiveReview = {
	name: string;
	when: string;
	rating: number;
	text: string;
	url?: string;
};

export type LiveReviews = {
	rating: number;
	count: number;
	mapsUrl?: string;
	reviews: LiveReview[];
};

type PlacesReview = {
	rating?: number;
	relativePublishTimeDescription?: string;
	text?: { text?: string };
	originalText?: { text?: string };
	authorAttribution?: { displayName?: string; uri?: string };
};

type PlacesPlace = {
	rating?: number;
	userRatingCount?: number;
	googleMapsUri?: string;
	reviews?: PlacesReview[];
};

const FIELDS =
	"places.rating,places.userRatingCount,places.googleMapsUri,places.reviews";

/** One day. Reviews trickle in; a daily refresh is plenty and keeps calls low. */
const REVALIDATE = 86_400;

export async function getGoogleReviews(): Promise<LiveReviews | null> {
	const key = process.env.GOOGLE_PLACES_API_KEY;
	if (!key) return null;

	try {
		const placeId = process.env.GOOGLE_PLACE_ID;
		let place: PlacesPlace | undefined;

		if (placeId) {
			const res = await fetch(
				`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
				{
					headers: {
						"X-Goog-Api-Key": key,
						"X-Goog-FieldMask": FIELDS.replaceAll("places.", ""),
					},
					next: { revalidate: REVALIDATE },
				},
			);
			if (!res.ok) throw new Error(`places/${placeId} -> ${res.status}`);
			place = (await res.json()) as PlacesPlace;
		} else {
			const res = await fetch(
				"https://places.googleapis.com/v1/places:searchText",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"X-Goog-Api-Key": key,
						"X-Goog-FieldMask": FIELDS,
					},
					body: JSON.stringify({
						textQuery: GOOGLE_PLACE_QUERY,
						maxResultCount: 1,
					}),
					next: { revalidate: REVALIDATE },
				},
			);
			if (!res.ok) throw new Error(`searchText -> ${res.status}`);
			const data = (await res.json()) as { places?: PlacesPlace[] };
			place = data.places?.[0];
		}

		if (!place?.rating || !place.userRatingCount) return null;

		return {
			rating: place.rating,
			count: place.userRatingCount,
			mapsUrl: place.googleMapsUri,
			reviews: (place.reviews ?? [])
				.map((r) => ({
					name: r.authorAttribution?.displayName ?? "Google user",
					when: r.relativePublishTimeDescription ?? "",
					rating: r.rating ?? 5,
					text: (r.text?.text ?? r.originalText?.text ?? "").trim(),
					url: r.authorAttribution?.uri,
				}))
				// A rating with no words is a blank card; the count still includes it.
				.filter((r) => r.text.length > 0),
		};
	} catch (err) {
		// A dead key or a quota block must not take the home page down with it.
		console.error("[google-reviews]", err);
		return null;
	}
}
