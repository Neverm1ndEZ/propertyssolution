import type { Metadata } from "next";
import Link from "next/link";
import {
	BadgeCheck,
	Building2,
	Clock,
	Compass,
	Factory,
	FileCheck,
	Handshake,
	Landmark,
	LandPlot,
	Mail,
	MapPinned,
	Phone,
	ScrollText,
	ShieldCheck,
	Target,
	TrendingUp,
	Warehouse,
} from "lucide-react";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { ALL_MAPS, AREA_LIST } from "@/lib/maps";
import { CLIENT_KEYWORDS, keywordsFor, pageKeywords } from "@/lib/seo";
import {
	ADDRESS,
	EMAIL,
	HOURS,
	PHONE,
	PHONE_HREF,
	SITE_NAME,
} from "@/lib/site";
import { SITE } from "@/config/sites";
import PageTail from "@/components/PageTail";

export const metadata: Metadata = {
	title: `About us — ${SITE.region} Property Dealer Since 2009`,
	description: `${SITE_NAME}, a property dealer since 2009: residential and industrial plots, warehousing and 6% & 7% Kisan Abadi land across Greater Noida, Jewar and YEIDA.`,
	keywords: pageKeywords([
		...CLIENT_KEYWORDS,
		...keywordsFor(`about ${SITE_NAME}`),
		...keywordsFor(`property dealer in ${SITE.region}`),
	]),
	alternates: { canonical: "/about" },
};

/** Office suite, as the client's own trade listings carry it. */
const OFFICE = "Office 309–310, 3rd Floor, Tradex Tower-II, Block E";

const STATS = [
	{ value: "2009", label: "Dealing in this belt since" },
	{ value: `${ALL_MAPS.length}`, label: "Authority layout plans published" },
	{ value: "2500+", label: "Buyers and sellers served" },
	{ value: "3", label: "Authorities we transact under" },
];

/**
 * What we deal in — the client's own list (residential, industrial,
 * warehousing, freehold, 6% & 7% Kisan Abadi), with the search phrases he
 * asked to see on the site carried in the body copy rather than bolted on.
 */
const OFFERINGS = [
	{
		icon: Building2,
		title: "Residential plots",
		body: "Residential plots in Greater Noida and plots for sale in Greater Noida across every sector — authority allotment and resale, corner, park-facing and the larger sizes on the wider roads.",
	},
	{
		icon: Factory,
		title: "Industrial plots & land",
		body: "Industrial plot in Greater Noida and industrial land for sale along the Yamuna Expressway — allotted parcels and running units, with permitted use and power load checked.",
	},
	{
		icon: Warehouse,
		title: "Warehousing land",
		body: "Warehouse land in Greater Noida and warehousing land for sale on the logistics belts, with container access, road width and clear frontage verified on the authority plan.",
	},
	{
		icon: LandPlot,
		title: "Freehold land",
		body: "Freehold parcels with clean ownership records, for buyers who want the land in their own name without an authority lease sitting over it.",
	},
	{
		icon: ShieldCheck,
		title: "6% & 7% Kisan Abadi plots",
		body: "Kisan Abadi plot in Greater Noida — 6% and 7% Abadi plots in the villages, with the allotment file, lineage and conversion papers checked before any money moves.",
	},
	{
		icon: Handshake,
		title: "Commercial plots & shops",
		body: "Retail frontage on the commercial belts, shops, showrooms and office space, with clear title and the sub-lease paperwork handled.",
	},
	{
		icon: Compass,
		title: "Jewar & Yamuna Expressway belt",
		body: "Plot for sale in Yamuna Expressway, Yamuna Expressway plots and land around Jewar airport — as a property dealer in Jewar we track what is actually moving in that belt.",
	},
	{
		icon: TrendingUp,
		title: "Investment guidance",
		body: "Reliable investment guidance for buyers, sellers, investors and businesses — which pockets are worth holding and which are priced on a story.",
	},
];

/** The three authorities the client deals under, in his own words. */
const AUTHORITIES = [
	{
		name: "GNIDA",
		full: "Greater Noida Industrial Development Authority",
		body: "Greek-letter sectors, Ecotech industrial pockets and the village abadi belts. As a Greater Noida property dealer this is the belt we have worked longest.",
	},
	{
		name: "NOIDA",
		full: "New Okhla Industrial Development Authority",
		body: "Noida sectors and the Noida Extension / Greater Noida West grid, residential through industrial.",
	},
	{
		name: "YEIDA",
		full: "Yamuna Expressway Industrial Development Authority",
		body: "Sectors along the Jewar airport belt, pocket by pocket. We work as a property dealer of YEIDA Authority land — residential, industrial and warehousing.",
	},
];

/** The client's transaction-support list, step by step. */
const PROCESS = [
	{
		title: "Property selection",
		body: "We start from what the plot is for — a house, a factory, a warehouse or money parked for five years — and shortlist only what fits the budget, the sector and the timeline.",
	},
	{
		title: "Title & ownership verification",
		body: "Ownership records, chain of title and the allotment file are checked before anything is agreed. We focus on clear-title properties with proper documentation.",
	},
	{
		title: "Due diligence on the plan",
		body: `We put the plot against the authority layout plan in front of you — plot number, size, road width, park and facility reservations, and what the land next to it is reserved for. All ${ALL_MAPS.length} plans are on this site, free.`,
	},
	{
		title: "Legal documentation coordination",
		body: "Agreement, transfer memorandum, mutation and dues clearance coordinated with the authority and the legal side, so the file does not stall at the counter.",
	},
	{
		title: "Transaction support to registry",
		body: "We stay on the deal through payment, possession and registry, and remain reachable afterwards for the formalities that follow.",
	},
];

const VALUES = [
	{
		icon: Handshake,
		title: "Trust & transparency",
		body: "Honest communication, transparent dealings and relationships built on trust rather than on a one-off commission.",
	},
	{
		icon: ScrollText,
		title: "Legal clarity",
		body: "We prioritise clear-title properties and proper documentation so clients can make informed decisions.",
	},
	{
		icon: BadgeCheck,
		title: "Customer satisfaction",
		body: "Our clients' requirements and interests sit at the centre of every transaction, start to finish.",
	},
	{
		icon: Landmark,
		title: "Professional expertise",
		body: "Working these markets since 2009 means local knowledge and practical real estate expertise on every deal.",
	},
	{
		icon: ShieldCheck,
		title: "Integrity & commitment",
		body: "Professional standards and ethical practice held to throughout the property transaction process.",
	},
	{
		icon: Clock,
		title: "Long-term relationships",
		body: "Dependable service and ongoing support, because most of our business comes back to us or is referred.",
	},
];

/** "Why clients trust us" — the client's eight points. */
const TRUST = [
	{
		title: "Established experience since 2009",
		body: "Over a decade in the Greater Noida, Noida and Yamuna Expressway real estate markets, through several cycles of this belt.",
	},
	{
		title: "Extensive property options",
		body: "Residential plots, industrial plots, warehousing, freehold land and 6% & 7% Kisan Abadi plots, all under one roof.",
	},
	{
		title: "Expertise across major authorities",
		body: "We deal in property under Greater Noida Authority, Noida Authority and YEIDA, and each one has its own transfer route.",
	},
	{
		title: "Documentation assistance",
		body: "Property documentation, ownership records, title verification coordination and the transaction formalities, handled with you.",
	},
	{
		title: "Clear-title property focus",
		body: "We prioritise properties with clear ownership and proper paperwork, and say so plainly when a file is not clean.",
	},
	{
		title: "Local market knowledge",
		body: "Greater Noida, Noida, Jewar and the Yamuna Expressway — we know which pockets are developing and which are still on paper.",
	},
	{
		title: "Complete transaction support",
		body: "From property selection through documentation to deal coordination, you have the same people throughout.",
	},
	{
		title: "Reliable investment guidance",
		body: "Buyers, sellers, investors and businesses helped to identify what actually suits their requirement and horizon.",
	},
];

const FAQ = [
	{
		q: `How long have you been a property dealer in ${SITE.region}?`,
		a: `${SITE_NAME} was established in 2009 and works out of the Alpha 1 Commercial Belt, Greater Noida. We deal in residential, industrial and commercial property across Greater Noida, Noida, Jewar and the Yamuna Expressway (YEIDA) region.`,
	},
	{
		q: "Which authorities do you deal under?",
		a: "Greater Noida Industrial Development Authority (GNIDA), New Okhla Industrial Development Authority (NOIDA) and Yamuna Expressway Industrial Development Authority (YEIDA). The authority a plot sits under decides its transfer route, dues and registry timeline.",
	},
	{
		q: "What is a 6% or 7% Kisan Abadi plot, and is it safe to buy?",
		a: "It is abadi land returned to farmers against land the authority acquired. A Kisan Abadi plot in Greater Noida can be a sound buy at the right price, but the file — allotment, lineage, conversion, dues — decides that, and we check all of it before any money moves.",
	},
	{
		q: "Do the layout plans on this site cost anything?",
		a: `No. All ${ALL_MAPS.length} authority layout plans are free to view and download at full resolution, with no sign-up and nothing covering the plot numbers.`,
	},
	{
		q: "Can you check a plot someone else has shown me?",
		a: "Yes, and it is the cheapest hour you will spend. Send the plot number and sector and we will pull the authority plan, verify the ownership position and tell you what the plot is realistically worth.",
	},
	{
		q: "Do you handle industrial land and warehousing as well as plots?",
		a: "Yes — industrial land for sale, factory units and warehousing land for sale across the Greater Noida and Yamuna Expressway belts, for purchase and for lease.",
	},
	{
		q: "How do I reach you?",
		a: `Call ${PHONE}, email ${EMAIL}, or come to the office — ${OFFICE}, ${ADDRESS}. We are open ${HOURS}.`,
	},
];

const faqJsonLd = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: FAQ.map(({ q, a }) => ({
		"@type": "Question",
		name: q,
		acceptedAnswer: { "@type": "Answer", text: a },
	})),
};

export default function AboutPage() {
	return (
		<>
			{/* Intro — the client's own About copy. */}
			<div className="container-page py-8 lg:py-12">
				<div className="max-w-5xl">
					<p className="text-xs font-semibold tracking-widest text-brand-600 uppercase">
						About {SITE_NAME} · Since 2009
					</p>
					<h1 className="text-fluid-h2 mt-2 font-extrabold text-balance text-brand-950">
						Your Trusted Real Estate Partner Since 2009 — {SITE.region} Property
						Dealer
					</h1>

					<div className="mt-6 space-y-5 text-[0.95rem] leading-relaxed text-brand-900/75">
						<p>
							{SITE_NAME} is a trusted real estate consultancy firm established
							in 2009, specialising in residential, industrial and commercial
							land transactions across Greater Noida, Noida and the Yamuna
							Expressway (YEIDA) region, including Jewar. As a Greater Noida
							property dealer and a property dealer of YEIDA Authority land, we
							work both sides of the transaction.
						</p>
						<p>
							With over a decade of experience in the real estate industry, we
							are committed to helping individuals, investors, businesses and
							developers find the right property opportunities at the right
							value.
						</p>
						<p>
							We deal in a wide range of properties, including residential plots
							in Greater Noida, industrial plots, warehousing land, freehold
							land and 6% &amp; 7% Kisan Abadi plots across Greater Noida and
							the Yamuna Expressway region — from a plot for sale in Greater
							Noida to industrial land for sale and Yamuna Expressway plots near
							Jewar.
						</p>
						<p>
							At {SITE_NAME}, we believe that a successful property transaction
							begins with trust, transparency and proper guidance. We assist our
							clients throughout the entire property-buying and selling process,
							including property selection, title and ownership document
							verification, due diligence, legal documentation coordination and
							transaction support. We focus on offering clear-title properties
							with proper documentation, helping our clients make informed and
							confident real estate decisions.
						</p>
						<p>
							Whether you are looking to purchase a residential plot, invest in
							industrial land, acquire warehousing space or explore investment
							opportunities around Jewar and the Yamuna Expressway,{" "}
							{SITE_NAME} is here to guide you at every step. Buying land here
							starts with the authority layout plan, so we have put every one we
							hold on this site — {ALL_MAPS.length} plans across{" "}
							{AREA_LIST.map((a) => a.name).join(", ")} — free to view and
							download at full resolution.
						</p>
						<p className="text-base font-semibold text-brand-900">
							{SITE_NAME} — Your Property, Our Responsibility.
						</p>
					</div>

					<div className="mt-8 flex flex-wrap gap-3">
						<a
							href={PHONE_HREF}
							className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-brand-800"
						>
							<Phone aria-hidden className="size-4" />
							Call {PHONE}
						</a>
						<Link
							href="/maps"
							className="inline-flex items-center gap-2 rounded-full border border-sand-300 px-6 py-3 text-sm font-semibold text-brand-800 transition-colors hover:bg-sand-100"
						>
							Browse all {ALL_MAPS.length} layout plans
						</Link>
					</div>
				</div>
			</div>

			{/* Stats */}
			<section
				className="bg-brand-950 py-9 text-white"
				aria-label={`${SITE_NAME} at a glance`}
			>
				<ul className="container-page grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
					{STATS.map(({ value, label }) => (
						<li key={label}>
							<p className="text-3xl font-extrabold text-brand-300 sm:text-4xl">
								{value}
							</p>
							<p className="mt-1 text-sm text-white/65">{label}</p>
						</li>
					))}
				</ul>
			</section>

			<div className="container-page py-10 sm:py-12">
				{/* The belt this domain argues for — different copy on each site. */}
				<section aria-labelledby="focus">
					<h2
						id="focus"
						className="text-fluid-h2 font-extrabold text-brand-950"
					>
						{SITE.aboutFocus.heading}
					</h2>
					<div className="mt-4 max-w-5xl space-y-4 text-[0.95rem] leading-relaxed text-brand-900/75">
						{SITE.aboutFocus.paragraphs.map((para) => (
							<p key={para.slice(0, 40)}>{para}</p>
						))}
					</div>
				</section>

				{/* Mission & vision */}
				<section
					aria-labelledby="mission"
					className="mt-12 grid gap-5 sm:grid-cols-2"
				>
					<div className="card-surface p-6">
						<span className="grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-700">
							<Target aria-hidden className="size-5" />
						</span>
						<h2
							id="mission"
							className="mt-4 text-lg font-bold text-brand-950 sm:text-xl"
						>
							Our mission
						</h2>
						<p className="mt-2 text-sm leading-relaxed text-brand-900/70">
							To provide reliable, transparent and professional real estate
							consultancy services, while helping our clients find the right
							property opportunities and make secure investment decisions.
						</p>
					</div>
					<div className="card-surface p-6">
						<span className="grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-700">
							<Compass aria-hidden className="size-5" />
						</span>
						<h2 className="mt-4 text-lg font-bold text-brand-950 sm:text-xl">
							Our vision
						</h2>
						<p className="mt-2 text-sm leading-relaxed text-brand-900/70">
							To become one of the most trusted and recognised real estate
							consultancy firms in Greater Noida, Noida and the Yamuna
							Expressway region, through integrity, expertise and long-term
							client relationships.
						</p>
					</div>
				</section>

				{/* What we deal in */}
				<section className="mt-12" aria-labelledby="deal-in">
					<h2
						id="deal-in"
						className="text-fluid-h2 font-extrabold text-brand-950"
					>
						What we deal in
					</h2>
					<p className="mt-3 max-w-5xl text-pretty text-brand-900/70">
						Residential plots, industrial plots, warehousing land, freehold land
						and 6% &amp; 7% Kisan Abadi plots across Greater Noida, Noida, Jewar
						and the Yamuna Expressway — on both sides of the transaction.
					</p>
					<ul className="mt-6 grid gap-4 sm:grid-cols-2">
						{OFFERINGS.map(({ icon: Icon, title, body }) => (
							<li
								key={title}
								className="card-surface flex gap-4 p-5 transition-[transform,box-shadow] duration-300 ease-(--ease-out-soft) hover:-translate-y-1 hover:shadow-(--shadow-lift)"
							>
								<span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
									<Icon aria-hidden className="size-5" />
								</span>
								<div className="min-w-0">
									<h3 className="text-sm font-bold text-brand-950">{title}</h3>
									<p className="mt-1 text-sm text-brand-900/65">{body}</p>
								</div>
							</li>
						))}
					</ul>
				</section>

				{/* Authorities */}
				<section className="mt-12" aria-labelledby="authorities">
					<h2
						id="authorities"
						className="text-fluid-h2 font-extrabold text-brand-950"
					>
						Authorities we deal under
					</h2>
					<p className="mt-3 max-w-5xl text-pretty text-brand-900/70">
						Our expertise covers properties under the three major development
						authorities of this belt. Which one a plot sits under decides the
						transfer route, the dues and how long registry takes.
					</p>
					<ul className="mt-6 grid gap-4 lg:grid-cols-3">
						{AUTHORITIES.map(({ name, full, body }) => (
							<li key={name} className="card-surface p-5">
								<span className="grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-700">
									<Landmark aria-hidden className="size-5" />
								</span>
								<h3 className="mt-3 text-sm font-bold text-brand-950">
									{name}
								</h3>
								<p className="text-xs text-brand-900/55">{full}</p>
								<p className="mt-2 text-sm text-brand-900/65">{body}</p>
							</li>
						))}
					</ul>
				</section>

				{/* How we help */}
				<section className="mt-12" aria-labelledby="how-we-help">
					<h2
						id="how-we-help"
						className="text-fluid-h2 font-extrabold text-brand-950"
					>
						How we support a transaction
					</h2>
					<p className="mt-3 max-w-5xl text-pretty text-brand-900/70">
						We assist clients through the entire property buying and selling
						process — selection, verification, due diligence, documentation and
						deal coordination.
					</p>
					<ol className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{PROCESS.map(({ title, body }, i) => (
							<li key={title} className="card-surface p-5">
								<span className="grid size-8 place-items-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">
									{i + 1}
								</span>
								<h3 className="mt-3 font-bold text-brand-950">{title}</h3>
								<p className="mt-1.5 text-sm leading-relaxed text-brand-900/65">
									{body}
								</p>
							</li>
						))}
					</ol>
				</section>

				{/* Why clients trust us */}
				<section className="mt-12" aria-labelledby="trust">
					<h2
						id="trust"
						className="text-fluid-h2 font-extrabold text-brand-950"
					>
						Why clients trust us
					</h2>
					<p className="mt-3 max-w-5xl text-pretty text-brand-900/70">
						Choosing the right property dealer is one of the most important
						steps in making a successful real estate investment. We combine
						local market expertise, professional guidance and transparent
						dealings to make that easier.
					</p>
					<ol className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
						{TRUST.map(({ title, body }, i) => (
							<li key={title} className="flex gap-3">
								<span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-50 text-xs font-bold text-brand-700">
									{i + 1}
								</span>
								<div>
									<h3 className="text-sm font-bold text-brand-950">{title}</h3>
									<p className="mt-1 text-sm leading-relaxed text-brand-900/65">
										{body}
									</p>
								</div>
							</li>
						))}
					</ol>
				</section>

				{/* Core values */}
				<section className="mt-12" aria-labelledby="values">
					<h2
						id="values"
						className="text-fluid-h2 font-extrabold text-brand-950"
					>
						Our core values
					</h2>
					<ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{VALUES.map(({ icon: Icon, title, body }) => (
							<li key={title} className="card-surface p-5">
								<span className="grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-700">
									<Icon aria-hidden className="size-5" />
								</span>
								<h3 className="mt-3 font-bold text-brand-950">{title}</h3>
								<p className="mt-1.5 text-sm leading-relaxed text-brand-900/65">
									{body}
								</p>
							</li>
						))}
					</ul>
				</section>

				{/* Where we work */}
				<section className="mt-12" aria-labelledby="where">
					<h2
						id="where"
						className="text-fluid-h2 font-extrabold text-brand-950"
					>
						Where we work
					</h2>
					<ul className="mt-6 grid gap-4 sm:grid-cols-3">
						{AREA_LIST.map((area) => (
							<li key={area.slug} className="card-surface p-5">
								<h3 className="font-bold text-brand-950">{area.name}</h3>
								<p className="mt-1.5 text-sm leading-relaxed text-brand-900/65">
									{area.count} authority layout plans published, free to view
									and download.
								</p>
								<Link
									href={`/maps/${area.slug}`}
									className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-950"
								>
									{area.name} maps
									<BadgeCheck aria-hidden className="size-4" />
								</Link>
							</li>
						))}
					</ul>
				</section>

				{/* Visit us */}
				<section className="mt-12" aria-labelledby="visit">
					<h2
						id="visit"
						className="text-fluid-h2 font-extrabold text-brand-950"
					>
						Visit the office
					</h2>
					<div className="mt-6">
						<ul className="space-y-5 text-sm">
							<li className="flex gap-4">
								<MapPinned
									aria-hidden
									className="mt-0.5 size-5 shrink-0 text-brand-600"
								/>
								<span className="text-brand-900/75">
									{OFFICE}
									<br />
									{ADDRESS}
								</span>
							</li>
							<li className="flex gap-4">
								<Phone
									aria-hidden
									className="mt-0.5 size-5 shrink-0 text-brand-600"
								/>
								<a
									href={PHONE_HREF}
									className="font-semibold text-brand-900 hover:text-brand-700"
								>
									{PHONE}
								</a>
							</li>
							<li className="flex gap-4">
								<Mail
									aria-hidden
									className="mt-0.5 size-5 shrink-0 text-brand-600"
								/>
								<span className="break-all text-brand-900/75">{EMAIL}</span>
							</li>
							<li className="flex gap-4">
								<Clock
									aria-hidden
									className="mt-0.5 size-5 shrink-0 text-brand-600"
								/>
								<span className="text-brand-900/75">{HOURS}</span>
							</li>
							<li className="flex gap-4">
								<FileCheck
									aria-hidden
									className="mt-0.5 size-5 shrink-0 text-brand-600"
								/>
								<span className="text-brand-900/75">
									Walk in with a plot number and we will pull the layout plan
									for it while you wait.
								</span>
							</li>
						</ul>
					</div>
				</section>

				{/* Closing */}
				<section className="mt-12" aria-labelledby="closing">
					<h2
						id="closing"
						className="text-fluid-h2 font-extrabold text-brand-950"
					>
						Your trusted property dealer in {SITE.region}
					</h2>
					<p className="mt-3 max-w-5xl text-pretty leading-relaxed text-brand-900/70">
						Whether you are searching for a plot for sale in Greater Noida,
						industrial land near the Yamuna Expressway, warehouse land in
						Greater Noida or investment opportunities around Jewar,{" "}
						{SITE_NAME} is committed to providing professional real estate
						guidance. Call us on{" "}
						<a
							href={PHONE_HREF}
							className="font-semibold text-brand-800 hover:text-brand-950"
						>
							{PHONE}
						</a>{" "}
						with a sector and a budget, and you will get a straight answer on
						what is available and what it should cost.
					</p>
				</section>

				{/* FAQ */}
				<section className="mt-12" aria-labelledby="faq">
					<h2 id="faq" className="text-fluid-h2 font-extrabold text-brand-950">
						Frequently asked questions
					</h2>
					<dl className="mt-6 divide-y divide-sand-200 border-y border-sand-200">
						{FAQ.map(({ q, a }) => (
							<div key={q} className="py-5">
								<dt className="font-bold text-brand-950">{q}</dt>
								<dd className="mt-1.5 text-sm leading-relaxed text-brand-900/70">
									{a}
								</dd>
							</div>
						))}
					</dl>
				</section>
			</div>

			<JsonLd
				data={breadcrumbs([
					{ name: "Home", path: "/" },
					{ name: "About us", path: "/about" },
				])}
			/>
			<JsonLd data={faqJsonLd} />

			<PageTail />
		</>
	);
}
