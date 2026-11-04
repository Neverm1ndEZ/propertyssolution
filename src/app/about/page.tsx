import type { Metadata } from "next";
import Link from "next/link";
import {
	BadgeCheck,
	Building2,
	Clock,
	Factory,
	FileCheck,
	Handshake,
	Landmark,
	LandPlot,
	Mail,
	MapPinned,
	Phone,
	ShieldCheck,
	Store,
	TrendingUp,
	Warehouse,
} from "lucide-react";
import ContactSection from "@/components/ContactSection";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { ALL_MAPS, AREA_LIST } from "@/lib/maps";
import { keywordsFor, pageKeywords } from "@/lib/seo";
import {
	ADDRESS,
	EMAIL,
	HOURS,
	OFFICE_MAP_EMBED,
	PHONE,
	PHONE_HREF,
	SITE_NAME,
} from "@/lib/site";
import { SITE } from "@/config/sites";

export const metadata: Metadata = {
	title: `About us — Property Dealer in ${SITE.region} Since 2009`,
	description: `${SITE_NAME} has handled the sale, purchase and leasing of residential, commercial and industrial plots across ${SITE.region}, Noida and the Yamuna Expressway since 2009. Office in the Alpha 1 Commercial Belt, Greater Noida.`,
	keywords: pageKeywords([
		...keywordsFor(`about ${SITE_NAME}`),
		...keywordsFor(`property dealer in ${SITE.region}`),
	]),
	alternates: { canonical: "/about" },
};

/**
 * Office suite as the client's own trade listings carry it (Tradx/Tradex
 * Tower-II, shop 309–310). The street line itself stays in lib/site so the
 * footer, schema and this page cannot drift apart.
 */
const OFFICE = "Office 309–310, 3rd Floor, Tradex Tower-II, Block E";

const STATS = [
	{ value: "2009", label: "Dealing in this belt since" },
	{ value: `${ALL_MAPS.length}`, label: "Authority layout plans published" },
	{ value: "2500+", label: "Buyers and sellers served" },
	{ value: "4", label: "Authorities we transact under" },
];

const OFFERINGS = [
	{
		icon: Building2,
		title: "Residential plots",
		body: "Authority allotment and resale plots in every sector — corner, park-facing and the larger sizes on the wider roads.",
	},
	{
		icon: Handshake,
		title: "Commercial plots & shops",
		body: "Retail frontage on the commercial belts, showrooms and office space, with clear title and the sub-lease paperwork handled.",
	},
	{
		icon: ShieldCheck,
		title: "6% & 7% Kisan Kota plots",
		body: "Farmer-quota abadi plots in the villages, with the allotment file, lineage and conversion documents checked before you pay.",
	},
	{
		icon: Factory,
		title: "Industrial land & factory units",
		body: "Ecotech and UPSIDA plots and running units, with permitted use, power load and completion status verified.",
	},
	{
		icon: Warehouse,
		title: "Warehousing & godowns",
		body: "Logistics-belt warehousing bought, sold or leased — container access, road width and height checked on the plan first.",
	},
	{
		icon: Store,
		title: "Builder floors & ready houses",
		body: "Ready-to-move floors and houses in the developed sectors, matched to budget and to the sector you actually want to live in.",
	},
	{
		icon: LandPlot,
		title: "Group housing & institutional land",
		body: "Larger parcels for developers and institutions, with FAR, set-back and land use pulled off the authority master plan.",
	},
	{
		icon: TrendingUp,
		title: "Investment advisory",
		body: "Which pockets are worth holding and which are priced on a story — read off what has actually transacted nearby.",
	},
];

/** The authority a plot is allotted under decides its entire paperwork route. */
const AUTHORITIES = [
	{
		name: "GNIDA",
		full: "Greater Noida Industrial Development Authority",
		body: "Greek-letter sectors, Ecotech industrial pockets and the village abadi belts.",
	},
	{
		name: "YEIDA",
		full: "Yamuna Expressway Industrial Development Authority",
		body: "Sectors 16 to 33 along the Jewar Airport belt, pocket by pocket.",
	},
	{
		name: "NOIDA",
		full: "New Okhla Industrial Development Authority",
		body: "Noida sectors and the Noida Extension / Greater Noida West grid.",
	},
	{
		name: "UPSIDA",
		full: "UP State Industrial Development Authority",
		body: "Industrial estates across the belt, including Sikandrabad.",
	},
];

const PROCESS = [
	{
		title: "Tell us the brief",
		body: "Size, budget, sector, and what the plot is for — a house to live in, a factory, a shop, or money parked for five years. All four need different advice.",
	},
	{
		title: "Check it on the layout plan",
		body: `We put the plot against the authority plan in front of you — plot number, plot size, road width, park and facility reservations, and what the land next to it is reserved for. All ${ALL_MAPS.length} plans are on this site, free.`,
	},
	{
		title: "Walk the plot",
		body: "Nothing replaces standing on the land. We go with you, plan in hand, and point out what the plan does not show: the drain, the HT line, the encroachment, the road that has not been cut yet.",
	},
	{
		title: "Price it on evidence",
		body: "We quote off recent transactions in the same pocket, not the asking price. If a plot is overpriced, or the title is going to be a problem, you hear it before you commit.",
	},
	{
		title: "Paperwork to registry",
		body: "Title search, allotment and transfer file, mutation, dues clearance and the authority formalities — walked through to registry so the file does not stall at the counter.",
	},
];

const FAQ = [
	{
		q: `How long have you been dealing in ${SITE.region}?`,
		a: `Since 2009. ${SITE_NAME} works out of the Alpha 1 Commercial Belt in Greater Noida, dealing in residential, commercial and industrial property across ${SITE.region}, Noida and the Yamuna Expressway.`,
	},
	{
		q: "Do the layout plans on this site cost anything?",
		a: `No. All ${ALL_MAPS.length} authority layout plans are free to view and download at full resolution, with no sign-up and nothing covering the plot numbers.`,
	},
	{
		q: "Can you check a plot someone else has shown me?",
		a: "Yes, and it is the cheapest hour you will spend. Send the plot number and sector and we will pull the authority plan, tell you what the plot actually is, and what it is realistically worth.",
	},
	{
		q: "What is a 6% or 7% Kisan Kota plot, and is it safe to buy?",
		a: "It is abadi land returned to farmers against land the authority acquired. It can be a sound buy at the right price, but the file — allotment, lineage, conversion, dues — decides that. We check all of it before any money moves.",
	},
	{
		q: "Do you handle rentals and leasing as well as sale and purchase?",
		a: "Yes — shops, office space, warehousing and industrial units, let on clear written terms with both sides briefed properly.",
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
			{/* Intro */}
			<div className="container-page py-8 lg:py-12">
				<div className="max-w-5xl">
					<p className="text-xs font-semibold tracking-widest text-brand-600 uppercase">
						Since 2009 · Alpha 1 Commercial Belt, Greater Noida
					</p>
					<h1 className="text-fluid-h2 mt-2 font-extrabold text-balance text-brand-950">
						Property Dealer in {SITE.region} — Turning Real Estate Plans Into
						Property You Own
					</h1>

					<div className="mt-6 space-y-5 text-[0.95rem] leading-relaxed text-brand-900/75">
						<p>{SITE.aboutLead}</p>
						<p>
							We are a family-run dealership, not a call centre. The people who
							answer the phone are the ones who walk the plot with you, pull the
							authority file and sit through the registry. In this belt that
							matters more than a brochure: two plots in the same sector can
							have different sizes, different road frontage and completely
							different paperwork, and none of that is visible from the road.
						</p>
						<p>
							Buying land here starts with the authority layout plan, and those
							plans have always been hard to get hold of. So we put every one we
							have on this site — {ALL_MAPS.length} sector, industrial and
							village abadi plans across{" "}
							{AREA_LIST.map((a) => a.name).join(", ")} — free to view and
							download at full resolution. Find your sector, check the plot
							number, then call us about what is genuinely available and what it
							should cost.
						</p>
						<p>
							The way we work has not changed since 2009: clear documentation,
							pricing based on what has actually transacted, and a straight
							answer about what a plot is worth — including when that answer is
							that you should walk away. Payment by cash, cheque, card or money
							order. We are open {HOURS}.
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
				aria-label="Property Solutions at a glance"
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
				{/* What we deal in */}
				<section aria-labelledby="deal-in">
					<h2
						id="deal-in"
						className="text-fluid-h2 font-extrabold text-brand-950"
					>
						What we deal in
					</h2>
					<p className="mt-3 max-w-5xl text-pretty text-brand-900/70">
						Everything the authorities allot in this belt, on both sides of the
						transaction — sale, purchase and leasing.
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

				{/* How we work */}
				<section className="mt-12" aria-labelledby="how-we-work">
					<h2
						id="how-we-work"
						className="text-fluid-h2 font-extrabold text-brand-950"
					>
						How a deal actually runs with us
					</h2>
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

				{/* Authorities */}
				<section className="mt-12" aria-labelledby="authorities">
					<h2
						id="authorities"
						className="text-fluid-h2 font-extrabold text-brand-950"
					>
						Authorities we transact under
					</h2>
					<p className="mt-3 max-w-5xl text-pretty text-brand-900/70">
						The authority a plot is allotted under decides the transfer route,
						the dues and how long registry takes. We deal across all four.
					</p>
					<ul className="mt-6 grid gap-4 sm:grid-cols-2">
						{AUTHORITIES.map(({ name, full, body }) => (
							<li key={name} className="card-surface flex gap-4 p-5">
								<span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
									<Landmark aria-hidden className="size-5" />
								</span>
								<div className="min-w-0">
									<h3 className="text-sm font-bold text-brand-950">
										{name}{" "}
										<span className="font-normal text-brand-900/55">
											— {full}
										</span>
									</h3>
									<p className="mt-1 text-sm text-brand-900/65">{body}</p>
								</div>
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
									{area.count} authority layout plans published, free to view and
									download.
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
					<div className="mt-6 grid gap-7 lg:grid-cols-2">
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
									Walk in with a plot number and we will pull the layout plan for
									it while you wait.
								</span>
							</li>
						</ul>
						<div className="card-surface overflow-hidden">
							<iframe
								src={OFFICE_MAP_EMBED}
								title={`Map showing ${SITE_NAME} in Greater Noida`}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								className="block h-[20rem] w-full border-0"
							/>
						</div>
					</div>
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

			<ContactSection />
		</>
	);
}
