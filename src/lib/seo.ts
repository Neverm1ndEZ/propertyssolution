import { SITE } from "../config/sites.ts";

/**
 * Keyword sets for `<meta name="keywords">`.
 *
 * Worth knowing before reading on: Google has ignored this meta tag since 2009
 * and says so publicly, and Shiva Associates — the sites we are modelled on —
 * ship no keywords tag at all on any page. What actually earns the rankings on
 * their pages is the body copy, the headings and the internal links, which is
 * where the real work is (see MapArticle). This tag is cheap, harmless and a
 * few of the smaller engines still read it, so it is generated here to the
 * brief: 300 site-wide terms plus at least 50 of the page's own.
 *
 * Everything is generated from lists rather than typed out, so the phrasing
 * stays consistent and the counts cannot silently drift.
 */

const ROLES = [
	"property dealer",
	"property dealers",
	"real estate agent",
	"real estate agents",
	"property consultant",
	"property broker",
	"plot dealer",
	"land dealer",
	"best property dealer",
	"top property dealer",
];

const ASSETS = [
	"residential plots",
	"commercial plots",
	"industrial land",
	"industrial plots",
	"warehouse",
	"godown",
	"shops",
	"builder floor",
	"group housing",
	"kisan kota plots",
	"6 percent plots",
	"7 percent abadi plots",
	"factory land",
	"plots for sale",
	"land for sale",
];

const PLACES = [
	"Greater Noida",
	"Greater Noida West",
	"Noida Extension",
	"Yamuna Expressway",
	"YEIDA",
	"Jewar Airport",
	"Gautam Buddh Nagar",
	"Sikandrabad",
	"Surajpur",
	"Kasna",
];

const MAP_TERMS = [
	"layout plan",
	"master plan",
	"sector map",
	"HD map",
	"authority map",
	"plot map",
	"sector layout plan",
	"map download",
];

const INTENTS = [
	"price",
	"rate list",
	"for sale",
	"investment",
	"buy",
	"resale",
	"near me",
];

/** Deterministic, de-duplicated, trimmed to `limit`. */
function build(limit: number, ...groups: string[][]): string[] {
	const out: string[] = [];
	const seen = new Set<string>();
	for (const group of groups) {
		for (const phrase of group) {
			const k = phrase.toLowerCase().replace(/\s+/g, " ").trim();
			if (k && !seen.has(k)) {
				seen.add(k);
				out.push(phrase);
			}
			if (out.length === limit) return out;
		}
	}
	return out;
}

const cross = (a: string[], b: string[], join = " in ") =>
	a.flatMap((x) => b.map((y) => `${x}${join}${y}`));

/** The site-wide set every page carries. */
export const BASE_KEYWORDS = build(
	600,
	cross(ROLES, PLACES),
	cross(ASSETS, PLACES),
	cross(MAP_TERMS, PLACES),
	PLACES.flatMap((p) => INTENTS.map((i) => `${p} property ${i}`)),
	PLACES.flatMap((p) => MAP_TERMS.map((m) => `${p} ${m}`)),
	ROLES.map((r) => `${r} near me`),
	PLACES.map((p) => `property in ${p}`),
	PLACES.map((p) => `plots in ${p}`),
	cross(ASSETS, INTENTS, " "),
	cross(ROLES, INTENTS, " "),
	cross(MAP_TERMS, INTENTS, " "),
	PLACES.flatMap((p) => ASSETS.map((a) => `${a} ${p}`)),
	PLACES.flatMap((p) => ROLES.map((r) => `${p} ${r}`)),
	PLACES.flatMap((p) => INTENTS.map((i) => `plots in ${p} ${i}`)),
	PLACES.map((p) => `buy property in ${p}`),
	PLACES.map((p) => `sell property in ${p}`),
	PLACES.map((p) => `${p} real estate`),
	PLACES.map((p) => `${p} property market`),
);

/**
 * At least 50 terms for one page's own subject — a sector, a region or a
 * service page. `subject` is the thing itself ("SIGMA-IV", "Yamuna
 * Expressway"), `region` the area it sits in.
 */
export function keywordsFor(subject: string, region = SITE.region): string[] {
	const s = subject.replace(/\s+/g, " ").trim();
	const pair = `${s} ${region}`;
	return build(
		Number.MAX_SAFE_INTEGER,
		[s, pair, `${s} map`, `${s} layout plan`, `${s} master plan`],
		MAP_TERMS.map((m) => `${s} ${m}`),
		MAP_TERMS.map((m) => `${pair} ${m}`),
		ROLES.map((r) => `${r} in ${s}`),
		ROLES.slice(0, 6).map((r) => `${r} in ${pair}`),
		ASSETS.map((a) => `${a} in ${s}`),
		ASSETS.slice(0, 8).map((a) => `${a} in ${pair}`),
		INTENTS.map((i) => `${s} plot ${i}`),
		INTENTS.map((i) => `${s} property ${i}`),
		INTENTS.map((i) => `${pair} ${i}`),
		ASSETS.map((a) => `${a} ${s}`),
		ROLES.map((r) => `${s} ${r}`),
		MAP_TERMS.map((m) => `${m} for ${s}`),
		MAP_TERMS.map((m) => `${m} of ${s}`),
		[
			`${s} plot size`,
			`${s} plot number`,
			`${s} road width`,
			`${s} sector map download`,
			`buy plot in ${s}`,
			`sell plot in ${s}`,
			`${s} property rates`,
			`${s} real estate`,
		],
	);
}

/**
 * The page's own terms first, then the site-wide 300. Deduplicated, so a page
 * always ends up with at least 350 distinct terms.
 */
export const pageKeywords = (custom: string[]): string[] =>
	build(Number.MAX_SAFE_INTEGER, custom, BASE_KEYWORDS);

/**
 * The handful of phrases the client wants rendered on every map page itself,
 * not just in the keywords tag: "plots for sale in <sector>", "best property
 * dealer in <sector>", and the "we also deal in" line. Same shape for all 177
 * maps, generated from the map name.
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
