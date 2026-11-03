/**
 * Keyword landing pages, mirroring the ones Shiva Associates run at root level
 * (/land-in-greater-noida, /industrial-land-in-greater-noida, …). Those pages
 * are a real part of why they rank: a flat, keyword-matched URL with the term
 * in the title, h1 and h2.
 *
 * Copy here is original. The services listed come from the client's own brief
 * (residential plots, shops, commercial plots, 6% Kisan Kota, industrial land
 * and warehousing) rather than from a competitor's inventory claims.
 */

export type LandingPage = {
	slug: string;
	/** Which map area to surface at the bottom of the page. */
	area: "greaterNoida" | "yamunaExpressway" | "noidaExtension";
	title: string;
	description: string;
	h1: string;
	h2: string;
	body: string[];
	/** Short bullet list rendered as a highlights block. */
	highlights: { title: string; body: string }[];
};

export const LANDING_PAGES: LandingPage[] = [
	{
		slug: "land-in-greater-noida",
		area: "greaterNoida",
		title: "Land in Greater Noida",
		description:
			"Buy land in Greater Noida with Property Solutions, property dealers in Greater Noida since 2009. Residential, commercial and industrial plots, with every authority layout plan free to view.",
		h1: "Land in Greater Noida",
		h2: "Land in Greater Noida — check the layout plan before you buy.",
		body: [
			"Buying land in Greater Noida starts with the authority layout plan. It tells you the plot number, the plot size, the width of the road in front of it, and what the land beside it is reserved for. Get that wrong and you find out at registry, which is the expensive moment to find out.",
			"Property Solutions has dealt in Greater Noida land since 2009 — residential plots in the Alpha, Beta, Gamma, Delta, Omicron, Sigma and Zeta sectors, commercial plots along the belts, and industrial land in the Ecotech and Surajpur pockets. We handle both sale and purchase, and we will tell you plainly when a plot is not worth what is being asked.",
			"Every authority layout plan we hold is on this site, free to view and download at full resolution. Find your sector below, check the plot, then call us about what is actually available and what it should cost.",
		],
		highlights: [
			{
				title: "Residential plots",
				body: "Authority plots across the Greek-letter sectors and the villages around them.",
			},
			{
				title: "Commercial plots & shops",
				body: "Retail frontage on the commercial belts, with clear title and transfer support.",
			},
			{
				title: "6% Kisan Kota plots",
				body: "Farmer-quota plots, with full documentation assistance through the process.",
			},
			{
				title: "Clear documentation",
				body: "Title checks, transfer paperwork and a straight answer on what a plot is worth.",
			},
		],
	},
	{
		slug: "residential-plots-in-greater-noida",
		area: "greaterNoida",
		title: "Residential Plots in Greater Noida",
		description:
			"Residential plots for sale and purchase in Greater Noida. Check the authority layout plan for any sector free, then call Property Solutions for current availability.",
		h1: "Residential Plots in Greater Noida",
		h2: "Residential plots in Greater Noida — sector by sector.",
		body: [
			"Greater Noida's residential sectors are laid out by the authority in numbered and lettered pockets — Alpha, Beta, Gamma, Delta, Omicron, Sigma, Zeta, Chi-Phi, Eta and Mu, plus the P-series and the abadi extensions in the surrounding villages. Each has its own layout plan showing every plot.",
			"We deal in resale and fresh allotment plots across these sectors. Plot sizes run from small residential units through to larger corner and park-facing plots, and what is available changes week to week, which is why the honest answer to 'what do you have' is a phone call rather than a list that goes stale.",
			"Use the layout plans below to find the sector and plot you are interested in. Bring us the plot number and we will tell you what we know about it.",
		],
		highlights: [
			{
				title: "Every sector plan",
				body: "Authority layout plans for the full set of Greater Noida residential sectors.",
			},
			{
				title: "Resale and allotment",
				body: "Both fresh authority allotments and resale plots from existing owners.",
			},
			{
				title: "Plot-level detail",
				body: "Plot numbers, sizes, road widths and park frontage, straight off the plan.",
			},
			{
				title: "Since 2009",
				body: "Fifteen years dealing in the same sectors, so we know how they have moved.",
			},
		],
	},
	{
		slug: "industrial-land-in-greater-noida",
		area: "greaterNoida",
		title: "Industrial Land in Greater Noida",
		description:
			"Industrial land and factory plots in Greater Noida — Ecotech, Surajpur, Udyog Kendra and Sikandrabad. View the authority layout plan free and call Property Solutions.",
		h1: "Industrial Land in Greater Noida",
		h2: "Industrial land in Greater Noida — Ecotech, Surajpur and Udyog Kendra.",
		body: [
			"Greater Noida's industrial land sits mainly in the Ecotech sectors, the Surajpur sites, Udyog Vihar and Udyog Kendra, the EPIP export zone and the Sikandrabad industrial area. Each has an authority layout plan showing plot sizes, road widths and which zones are allotted to what.",
			"Industrial buying is a different exercise from residential. Plot size, road access for trucks, power availability and what sits on the adjoining plot all matter, and the layout plan answers most of those questions before you visit the site.",
			"We deal in factory plots, warehouse land and built industrial units across these pockets. The plans are below, free to download — call us once you know which plot you are asking about.",
		],
		highlights: [
			{
				title: "Ecotech sectors",
				body: "Layout plans for the full Ecotech series, including extensions.",
			},
			{
				title: "Surajpur sites",
				body: "Industrial and residential sites across the Surajpur belt.",
			},
			{
				title: "EPIP & Sikandrabad",
				body: "Export zone and Sikandrabad industrial area plans.",
			},
			{
				title: "Factory & warehouse",
				body: "Land for new build, plus existing sheds and units.",
			},
		],
	},
	{
		slug: "warehouse-in-greater-noida",
		area: "greaterNoida",
		title: "Warehouse in Greater Noida",
		description:
			"Warehouse land and godown space in Greater Noida — Ecotech, Surajpur and the Sikandrabad belt. Authority layout plans free to view, then call Property Solutions.",
		h1: "Warehouse in Greater Noida",
		h2: "Warehousing land in Greater Noida — logistics-ready plots.",
		body: [
			"Greater Noida's position between the Eastern Peripheral Expressway, the Noida–Greater Noida Expressway and the Yamuna Expressway makes it a practical warehousing base for Delhi NCR distribution. The industrial sectors carry plots suited to godowns and storage, with the road widths to match.",
			"What matters for warehousing is approach road width, turning space for container traffic, and the land use permitted on the plot. All three are on the authority layout plan, which is why we put every plan on this site rather than making you ask for one.",
			"We deal in warehouse land and existing godown space across the Ecotech, Surajpur and Sikandrabad belts. Check the plan, then call.",
		],
		highlights: [
			{
				title: "Expressway access",
				body: "Plots near the EPE, Noida–Greater Noida and Yamuna Expressway corridors.",
			},
			{
				title: "Road widths on plan",
				body: "Check approach width for container access before you visit.",
			},
			{
				title: "Land and built units",
				body: "Bare plots for new sheds, plus existing godown space.",
			},
			{
				title: "Industrial zoning",
				body: "Permitted use shown on the authority layout plan.",
			},
		],
	},
	{
		slug: "commercial-property-in-greater-noida",
		area: "greaterNoida",
		title: "Commercial Property in Greater Noida",
		description:
			"Commercial plots and shops in Greater Noida — commercial belts, markets and retail frontage. View authority layout plans free and call Property Solutions.",
		h1: "Commercial Property in Greater Noida",
		h2: "Commercial plots and shops in Greater Noida.",
		body: [
			"Greater Noida's commercial land sits on the designated commercial belts running through the residential sectors, plus the market pockets and the institutional and office areas. The authority layout plan marks commercial plots distinctly from residential, which is the first thing to check.",
			"Retail works on footfall and frontage. A shop on a 60-metre belt is a different asset from one inside a sector market, and the plan shows you which is which before you commit.",
			"We deal in commercial plots, shops and office space across Greater Noida. The plans are below — call us for what is on the market.",
		],
		highlights: [
			{
				title: "Commercial belts",
				body: "Frontage on the main commercial corridors through each sector.",
			},
			{
				title: "Shops & markets",
				body: "Retail units in sector markets and established commercial pockets.",
			},
			{
				title: "Zoning on plan",
				body: "Commercial plots marked distinctly on the authority layout.",
			},
			{
				title: "Sale & purchase",
				body: "Both sides of the transaction, with documentation support.",
			},
		],
	},
	{
		slug: "about-greater-noida",
		area: "greaterNoida",
		title: "About Greater Noida",
		description:
			"Greater Noida — a planned city in Gautam Buddh Nagar, Uttar Pradesh, developed by GNIDA. Sectors, connectivity and where the authority layout plans fit in.",
		h1: "About Greater Noida",
		h2: "Greater Noida — a planned city, sector by sector.",
		body: [
			"Greater Noida is a planned city in Gautam Buddh Nagar district, Uttar Pradesh, developed by the Greater Noida Industrial Development Authority (GNIDA). Unlike cities that grew outward over time, it was laid out on a grid in advance, which is why every sector has a published layout plan showing each individual plot.",
			"Residential sectors carry Greek-letter names — Alpha, Beta, Gamma, Delta, Omicron, Sigma, Zeta, Chi, Phi, Eta and Mu — alongside numbered sectors and the P-series pockets. Industrial land sits in the Ecotech series, Surajpur and the Udyog areas. Institutional land is grouped in the Knowledge Park sectors.",
			"Connectivity runs through the Noida–Greater Noida Expressway, the Yamuna Expressway, the Eastern Peripheral Expressway and the Aqua Line metro via Pari Chowk, Alpha 1 and Delta 1. Gautam Buddha University, Sharda, Amity and Galgotias sit inside the city.",
			"Because the city is planned, the layout plan is the document that matters when buying. Every plan we hold is on this site, free.",
		],
		highlights: [
			{
				title: "GNIDA planned",
				body: "Laid out on a grid, with a published layout plan for every sector.",
			},
			{
				title: "Metro & expressways",
				body: "Aqua Line via Pari Chowk, plus three expressway corridors.",
			},
			{
				title: "Education hub",
				body: "Gautam Buddha, Sharda, Amity and Galgotias universities.",
			},
			{
				title: "Industry & institutions",
				body: "Ecotech industrial sectors and the Knowledge Park belt.",
			},
		],
	},
];
