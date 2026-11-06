/**
 * Google Business Profile, as the client sent it (Nov 2026). The share link
 * resolves to "PROPERTY SOLUTIONS | GREATER NOIDA PROPERTY DEALER"
 * (Google knowledge graph id /g/11l6zg9bqr).
 */
export const GOOGLE_PROFILE_URL = "https://share.google/ExLDlbBJbND3calUF";

/**
 * Rating and review count are NOT fetched — reading them live needs the Google
 * Places API, a billing account and a key, which this build does not have. Set
 * them by hand from the profile and the band shows them; leave them null and
 * the band simply does not claim a score. Never guess these: a wrong rating on
 * the page is worse than no rating.
 */
export const GOOGLE_RATING: number | null = null;
export const GOOGLE_REVIEW_COUNT: number | null = null;

/**
 * Review quotes to show as cards. Copy them off the Google profile verbatim,
 * with the reviewer's name as it appears there. Empty is fine — the section
 * then shows the heading and the two Google buttons and nothing else, rather
 * than inventing testimonials.
 */
export const TESTIMONIALS: { name: string; when: string; text: string }[] = [];
