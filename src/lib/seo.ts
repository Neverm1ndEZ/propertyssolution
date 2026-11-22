import { SITE } from "../config/sites.ts";

/**
 * The `<meta name="keywords">` generator that used to live here is gone: Google
 * has ignored the tag since 2009, ours ran to 350 near-duplicate terms per page,
 * and Shiva Associates — the sites this is modelled on — ship no keywords tag at
 * all. The ranking work is the body copy, the headings and the internal links.
 *
 * What is left is the on-page part, which is real: the phrases the client wants
 * rendered on every map page — "plots for sale in <sector>", "best property
 * dealer in <sector>", the "we also deal in" line — generated from the map name
 * so all 177 pages carry the same shape.
 */
export function keyPointsFor(subject: string, region = SITE.region): string[] {
	const s = subject.replace(/\s+/g, " ").trim();
	return [
		`Plots for sale in ${s}`,
		`Property dealer in ${s}`,
		`Best property dealer in ${s}, ${region}`,
		`Top property dealers in ${s}`,
		`${s} HD map and layout plan download`,
		`We also deal in ${s} properties and plots`,
	];
}
