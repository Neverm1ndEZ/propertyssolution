import { ExternalLink, Star } from "lucide-react";
import {
	GOOGLE_PROFILE_URL,
	GOOGLE_RATING,
	GOOGLE_REVIEW_COUNT,
	TESTIMONIALS,
} from "@/config/reviews";
import { getGoogleReviews } from "@/lib/google-reviews";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME } from "@/lib/site";

/**
 * The Google reviews band, as on the competitor's home page: rating, review
 * cards, and a way into the profile.
 *
 * Reviews come live from the Places API when GOOGLE_PLACES_API_KEY is set
 * (see lib/google-reviews). Without a key it falls back to config/reviews.ts,
 * and with neither it degrades to the heading and the two Google buttons —
 * it never shows a rating or a quote that is not real.
 */
export default async function GoogleReviews() {
	const live = await getGoogleReviews();

	const rating = live?.rating ?? GOOGLE_RATING;
	const count = live?.count ?? GOOGLE_REVIEW_COUNT;
	const profileUrl = live?.mapsUrl ?? GOOGLE_PROFILE_URL;
	const cards = live?.reviews ?? TESTIMONIALS;
	const hasScore = rating != null && count != null;

	return (
		<section
			className="bg-sand-100 py-10 sm:py-12"
			aria-labelledby="google-reviews"
		>
			<div className="container-page text-center">
				<p className="text-xs font-semibold tracking-widest text-brand-600 uppercase">
					Testimonials
				</p>
				<h2
					id="google-reviews"
					className="text-fluid-h2 mt-2 font-extrabold text-balance text-brand-950"
				>
					What our clients say about {SITE_NAME}
				</h2>

				{hasScore && (
					<p className="mt-3 flex flex-wrap items-center justify-center gap-2 text-brand-900/70">
						<Stars value={rating} className="size-4" />
						<span>
							Google rating{" "}
							<strong className="font-bold text-brand-950">
								{rating.toFixed(1)} of 5
							</strong>
							, based on {count} reviews
						</span>
					</p>
				)}

				{cards.length > 0 && (
					<ul className="mt-8 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
						{cards.slice(0, 6).map((review) => (
							<li
								key={`${review.name}-${review.when}`}
								className="card-surface flex flex-col p-5"
							>
								<div className="flex items-start justify-between gap-3">
									<div className="min-w-0">
										<p className="truncate font-bold text-brand-950">
											{review.name}
										</p>
										{review.when && (
											<p className="text-xs text-brand-900/50">{review.when}</p>
										)}
									</div>
									<Stars value={review.rating} className="size-3.5" />
								</div>
								<p className="mt-3 line-clamp-6 text-sm leading-relaxed text-brand-900/70">
									{review.text}
								</p>
							</li>
						))}
					</ul>
				)}

				<div className="mt-8 flex flex-wrap justify-center gap-3">
					<a
						href={profileUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-brand-800"
					>
						Read our reviews on Google
						<ExternalLink aria-hidden className="size-4" />
					</a>
					<a
						href={GOOGLE_PROFILE_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-full border border-sand-300 bg-white px-6 py-3 text-sm font-semibold text-brand-800 transition-colors hover:bg-sand-100"
					>
						<Star aria-hidden className="size-4" />
						Rate us on Google
					</a>
				</div>
			</div>

			{/* Only claimed when it came from Google itself. */}
			{live && (
				<JsonLd
					data={{
						"@context": "https://schema.org",
						"@type": "RealEstateAgent",
						name: SITE_NAME,
						aggregateRating: {
							"@type": "AggregateRating",
							ratingValue: live.rating,
							reviewCount: live.count,
							bestRating: 5,
						},
					}}
				/>
			)}
		</section>
	);
}

/** Filled stars to the nearest half, with the number read out for assistive tech. */
function Stars({ value, className }: { value: number; className: string }) {
	return (
		<span className="inline-flex shrink-0 items-center gap-0.5 text-brand-600">
			<span className="sr-only">{value.toFixed(1)} out of 5</span>
			{Array.from({ length: 5 }, (_, i) => (
				<Star
					key={i}
					aria-hidden
					className={`${className} ${i < Math.round(value) ? "fill-current" : "opacity-30"}`}
				/>
			))}
		</span>
	);
}
