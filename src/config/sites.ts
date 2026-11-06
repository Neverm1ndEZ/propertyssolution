import type { AreaKey } from "../lib/maps.ts";

/**
 * Config for propertyssolution.com (ss in the middle) — the Greater Noida site.
 * The sibling site lives in its own repo.
 *
 * Both sites list every map, per the client. They differ by design, keyword
 * focus and which region leads the ordering. That means the two domains publish
 * the same map pages, so Google will pick one and discount the other's copies —
 * flagged to the client, who chose this.
 */

/**
 * Competitor keyword set (Shiva Associates' own meta keywords), rebranded.
 * Used on both sites per the client's instruction. Titles and H1s still differ
 * per region so the two domains do not compete head-on for the same query.
 */
const SHARED_KEYWORDS = [
	"Greater Noida Property Dealers",
	"Best Property Dealer in Greater Noida",
	"Yamuna Expressway Property Dealer",
	"Property Dealers In Noida",
	"Real Estate Agents In Noida",
	"Property Dealers in Greater Noida West",
	"Real Estate Agents in Greater Noida",
	"Property Dealer in YEIDA",
	"Greater Noida layout plan",
	"Yamuna Expressway layout plan",
	"Noida sector map",
];

export const SITE = {
	key: "greater-noida",
	domain: "propertyssolution.com",
	// Greater Noida first; this domain targets Greater Noida queries.
	areas: ["greaterNoida", "noidaExtension", "yamunaExpressway"] as AreaKey[],
	region: "Greater Noida",
	title: "Property Dealers in Greater Noida | Greater Noida Property Dealer",
	description:
		"Property Solutions is one of the leading property dealers in Greater Noida, specialising in residential, commercial and industrial properties across Greater Noida and Noida Extension. Browse and download every authority layout plan, free.",
	keywords: SHARED_KEYWORDS,
	/** The line under the name in the contact band; client's own wording. */
	tagline: "Property Dealers in Greater Noida | Greater Noida Property Dealer",
	heroHeadline: "Property Solutions",
	// The regions, as the client writes them.
	heroRegions: "Greater Noida • Noida • YEIDA (Yamuna Expressway)",
	heroTagline:
		"From homes to industries, we help you find your perfect space solution.",
	heroSubline:
		"Residential, commercial and industrial plots across Greater Noida and Noida Extension — with every authority layout plan in one place.",
	/**
	 * The region-specific block on /about. Each domain argues its own belt here
	 * so the two About pages are not the same page twice.
	 */
	aboutFocus: {
		heading: "Property Dealers in Greater Noida",
		paragraphs: [
			"Greater Noida is where this firm started, and it is still the belt we know best. As a Greater Noida property dealer we work the Greek-letter sectors — Alpha, Beta, Gamma, Delta, Sigma, Omicron, Chi, Mu, Xu, Pi and the rest — along with the Ecotech industrial pockets, the institutional land around Knowledge Park and the village abadi belts that ring them.",
			"Each of those behaves differently. An Alpha or Beta plot is a developed-sector resale with a straightforward GNIDA transfer. An Ecotech plot carries permitted use, power load and a construction timeline. A Kisan Abadi plot in Greater Noida is a village file that has to be read line by line. We price and paper all three, and we tell you which one actually fits what you are trying to do.",
			"The authority publishes a layout plan for every one of these sectors, and those plans are what a purchase should start from. We hold them all, and they are on this site free — so whether you are looking for residential plots in Greater Noida, an industrial plot in Greater Noida or warehouse land in Greater Noida, you can check the plot number before you ever call us.",
		],
	},
	aboutLead:
		"Property Solutions has handled the sale and purchase of plots across Greater Noida since 2009 — residential, commercial and industrial, from a single plot to a full factory site.",
	sibling: {
		domain: "propertysolutionss.com",
		region: "Yamuna Expressway",
		label: "Yamuna Expressway maps",
	},
};
