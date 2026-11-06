/**
 * Google Business Profile, as the client sent it (Nov 2026). Both share links
 * he gave resolve to the same listing: "PROPERTY SOLUTIONS | GREATER NOIDA
 * PROPERTY DEALER", knowledge graph id /g/11l6zg9bqr, maps CID
 * 0x390cebe8b61e483f:0x83cdeee5138317b8.
 */
export const GOOGLE_PROFILE_URL = "https://share.google/7vf5GE7EOO1pi5zjb";

/**
 * The listing's Place ID, confirmed against the Places API on 2026-11-06:
 * "PROPERTY SOLUTIONS | GREATER NOIDA PROPERTY DEALER", 4.8 from 113 ratings.
 * Not a secret — only the API key is. Pinning it skips a Text Search call.
 */
export const GOOGLE_PLACE_ID = "ChIJP0getujrDDkRuBeDE-XuzYM";

/**
 * Fallback lookup if the place id is ever cleared. Checked against Google Maps: this
 * exact string resolves to the client's own listing and not to the tower.
 */
export const GOOGLE_PLACE_QUERY =
	"PROPERTY SOLUTIONS | GREATER NOIDA PROPERTY DEALER, Tradex Tower-II, Alpha 1 Commercial Belt, Greater Noida";

/**
 * Map embed for the office. Querying the business name rather than the address
 * makes the pin Google's card for the profile — name, rating and a link into
 * the listing — which is the point of putting it on the page.
 */
export const GOOGLE_MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
	GOOGLE_PLACE_QUERY,
)}&output=embed`;

/**
 * Fallback rating and reviews, used only when the Places API is not configured
 * or the call fails. Fill these from the profile by hand if you want something
 * on the page without a key; leave them as they are and the band shows the
 * heading and the Google buttons, never an invented score or quote.
 */
export const GOOGLE_RATING: number | null = null;
export const GOOGLE_REVIEW_COUNT: number | null = null;
export const TESTIMONIALS: {
	name: string;
	when: string;
	rating: number;
	text: string;
}[] = [];
