import Image from "next/image";
import Link from "next/link";
import {
	BadgeIndianRupee,
	Building2,
	Factory,
	FileCheck,
	Handshake,
	Home as HomeIcon,
	LandPlot,
	MapPinned,
	Store,
	TrendingUp,
	Users,
	Warehouse,
} from "lucide-react";
import Hero from "@/components/Hero";
import ContactSection from "@/components/ContactSection";
import GoogleReviews from "@/components/GoogleReviews";
import { ALL_MAPS, AREA_LIST } from "@/lib/maps";
import { thumbUrl } from "@/lib/map-utils";
import { OFFICE_MAP_EMBED, SITE_NAME } from "@/lib/site";
import { SITE } from "@/config/sites";

/**
 * Greater Noida home page, modelled on shivaassociates.com: hero with search,
 * "What We Do As", "We Deals In", development authorities, the layout-maps row,
 * then "Why Choose Us". The Yamuna site uses a different shape entirely.
 */

const DEALS_IN = [
	{ icon: HomeIcon, label: "House" },
	{ icon: LandPlot, label: "Land" },
	{ icon: Factory, label: "Industrial" },
	{ icon: Store, label: "Commercial" },
];

// Each authority links straight to the maps it publishes, the way Shiva
// Associates do it (their logos link to /greater-noida, /noida-map and
// /yamuna-expressway-maps).
const AUTHORITIES = [
	{
		name: "GNIDA",
		full: "Greater Noida Industrial Development Authority",
		logo: "/site-assets/authorities/gnida.avif",
		href: "/maps/greater-noida",
	},
	{
		name: "NOIDA",
		full: "New Okhla Industrial Development Authority",
		logo: "/site-assets/authorities/noida.avif",
		href: "/maps/noida-extension",
	},
	{
		name: "YEIDA",
		full: "Yamuna Expressway Industrial Development Authority",
		logo: "/site-assets/authorities/yeida.avif",
		href: "/maps/yamuna-expressway",
	},
];

const WHY = [
	{
		icon: Users,
		title: "2500+ Satisfied Clients Since 2009",
		body: `Buyers, sellers and investors across ${SITE.region}, Noida Extension and the YEIDA sectors have closed plots, builder floors, warehouses and factory land through us — most of them repeat clients or referred by one.`,
	},
	{
		icon: Building2,
		title: `All ${ALL_MAPS.length} Authority Layout Plans`,
		body: `Every sector sheet, industrial pocket and village abadi plan we hold for ${SITE.region} is on this site, free to view and download at full resolution — no sign-up, and nothing covering the plot numbers.`,
	},
	{
		icon: LandPlot,
		title: "Plot-Level Verification",
		body: "Before you pay anything we put the plot against the authority layout plan — plot number, plot size, road width, park and facility reservations, and what the land next to it is reserved for.",
	},
	{
		icon: FileCheck,
		title: "Paperwork Handled End to End",
		body: "Title check, transfer, mutation and the authority formalities walked through for you, so the file does not stall at the counter and there are no surprises at registry.",
	},
	{
		icon: BadgeIndianRupee,
		title: "Priced on What Actually Sold",
		body: "We quote off recent transactions in the same sector, not the asking price. If a plot is overpriced, or the title is going to be a problem, you hear it before you commit.",
	},
	{
		icon: MapPinned,
		title: "Local and On the Ground",
		body: `Our office is in the Alpha 1 Commercial Belt, ${SITE.region} — we can be standing on the plot with you the same day, layout plan in hand.`,
	},
];

/**
 * "Our Expertise As …" — the block Shiva Associates run under Why Choose Us.
 * Theirs is three photo cards; the client has not supplied photography, so
 * these are icon cards in the house style. Copy is ours, services are from the
 * client's own brief.
 */
const EXPERTISE = [
	{
		icon: HomeIcon,
		title: "Residential plots & houses",
		body: `Authority plots, builder floors and ready-to-move houses across ${SITE.region} — matched to your budget and to the sector you actually want to live in.`,
	},
	{
		icon: Factory,
		title: "Industrial land & factory plots",
		body: "Ecotech and UPSIDA industrial plots, running factory units and land parcels, with the permitted use and power load checked up front.",
	},
	{
		icon: Warehouse,
		title: "Warehousing & godowns",
		body: "Warehouse and godown space on the logistics belts — bought, sold or leased on clear written terms, with container access and road width verified.",
	},
	{
		icon: Store,
		title: "Commercial & retail",
		body: "Shops, showrooms and retail frontage on the commercial belts, plus office space, with the transfer and sub-lease paperwork taken care of.",
	},
	{
		icon: TrendingUp,
		title: "Investment advisory",
		body: "A straight read on which pockets are worth buying into and which are priced on a story — based on what has actually transacted nearby, not on a brochure.",
	},
	{
		icon: Handshake,
		title: "Sale, purchase & leasing",
		body: `We work both sides of the deal across ${SITE.region}, Noida and YEIDA: resale, fresh allotment, rental and long lease, from a single plot to a full factory site.`,
	},
];

export default function HomeGreaterNoida() {
	return (
		<>
			<Hero />

			{/* What We Do As ... */}
			<section className="container-page grid items-center gap-10 py-10 lg:grid-cols-2 lg:py-10">
				<div>
					<p className="text-sm font-bold tracking-widest text-brand-600 uppercase">
						What We Do As
					</p>
					<h2 className="text-fluid-h2 mt-3 font-extrabold text-balance text-brand-950">
						{SITE.title.split("|")[0].trim()}.
					</h2>
					<p className="mt-5 leading-relaxed text-brand-900/75">
						{SITE.aboutLead}
					</p>
					<p className="mt-4 leading-relaxed text-brand-900/75">
						{SITE.heroSubline}
					</p>
					<Link
						href={`/maps/${AREA_LIST[0].slug}`}
						className="mt-7 inline-block rounded-full bg-brand-700 px-7 py-3 text-sm font-semibold text-white transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-brand-800"
					>
						Explore More
					</Link>
				</div>
				<div className="relative aspect-4/3 overflow-hidden rounded-xl shadow-(--shadow-lift)">
					<Image
						src="/site-assets/hero-1920.webp"
						alt=""
						fill
						sizes="(max-width: 1024px) 100vw, 50vw"
						className="object-cover"
					/>
				</div>
			</section>

			{/* We Deals In */}
			<section className="bg-brand-950 py-10 text-white sm:py-12">
				<div className="container-page grid items-center gap-8 sm:grid-cols-[auto_1fr]">
					<h2 className="text-fluid-h2 font-extrabold">
						We Deal
						<br className="hidden sm:block" /> In
					</h2>
					<ul className="grid grid-cols-2 gap-6 sm:grid-cols-4">
						{DEALS_IN.map(({ icon: Icon, label }) => (
							<li key={label} className="text-center">
								<span className="mx-auto grid size-16 place-items-center rounded-xl border-2 border-brand-400/40 text-brand-300">
									<Icon aria-hidden className="size-8" strokeWidth={1.5} />
								</span>
								<span className="mt-3 block text-sm font-semibold">{label}</span>
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* Development authorities */}
			<section className="container-page py-10 sm:py-12">
				<h2 className="text-fluid-h2 font-extrabold text-balance text-brand-950">
					Working with the Top Development Authorities.
				</h2>
				<ul className="mt-8 grid gap-5 sm:grid-cols-3">
					{AUTHORITIES.map((a) => (
						<li key={a.name}>
							<Link
								href={a.href}
								className="block h-full rounded-xl bg-white p-6 text-center shadow-(--shadow-soft) ring-1 ring-sand-200 transition hover:ring-brand-300 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-brand-600"
							>
								{/* Fixed-height box: the three crests have different aspect
								    ratios, and it also reserves the space so nothing shifts. */}
								<span className="flex h-20 items-center justify-center">
									{/* eslint-disable-next-line @next/next/no-img-element -- already-optimised avif, 9-26KB. */}
									<img
										src={a.logo}
										alt={`${a.full} logo`}
										loading="lazy"
										decoding="async"
										className="max-h-full w-auto max-w-44 object-contain"
									/>
								</span>
								<p className="mt-4 text-2xl font-extrabold tracking-tight text-brand-700">
									{a.name}
								</p>
								<p className="mt-2 text-sm text-brand-900/65">{a.full}</p>
							</Link>
						</li>
					))}
				</ul>
			</section>

			{/* Our Layout Maps */}
			<section className="bg-sand-100 py-10 sm:py-12">
				<div className="container-page">
					<h2 className="text-fluid-h2 text-center font-extrabold text-brand-950">
						Our Layout Maps:
					</h2>
					<ul className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{AREA_LIST.map((area) => (
							<li key={area.slug} className="reveal">
								<Link href={`/maps/${area.slug}`} className="group block">
									<span className="block overflow-hidden rounded-lg bg-white p-2 shadow-(--shadow-soft) ring-1 ring-sand-200">
										{/* eslint-disable-next-line @next/next/no-img-element -- prebuilt webp thumbnail. */}
										<img
											src={thumbUrl(area.cover)}
											alt={`${area.name} layout map`}
											width={480}
											height={360}
											loading="lazy"
											decoding="async"
											className="aspect-4/3 w-full rounded-sm object-contain transition-transform duration-500 group-hover:scale-105"
										/>
									</span>
									<span className="mt-3 block rounded-full bg-brand-700 px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors group-hover:bg-brand-800">
										{area.name} Map
									</span>
								</Link>
							</li>
						))}
					</ul>
					<p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-relaxed text-brand-900/70">
						Navigate {SITE.region} with our complete layout map series — identify
						residential sectors, commercial belts and industrial pockets, check
						plot numbers and road widths, and download any plan at full
						resolution, free.
					</p>
					<div className="mt-7 text-center">
						<Link
							href="/maps"
							className="inline-block rounded-full bg-brand-700 px-8 py-3 text-sm font-semibold text-white transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-brand-800"
						>
							Explore More
						</Link>
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className="bg-brand-950 py-10 text-white sm:py-12">
				<div className="container-page">
					<h2 className="text-fluid-h2 font-extrabold text-balance">
						Why Choose Us As {SITE.title.split("|")[0].trim()}?
					</h2>
					<p className="mt-3 max-w-5xl text-pretty text-white/70">
						{SITE_NAME} has dealt in {SITE.region} property since 2009 —
						residential plots, builder floors, commercial frontage, warehousing
						and industrial land, on both sides of the transaction. We hold every
						authority layout plan for the region, so the plot you are asked to
						buy can be checked on paper before a rupee moves.
					</p>
					<ul className="mt-9 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
						{WHY.map(({ icon: Icon, title, body }) => (
							<li key={title} className="flex gap-4">
								<span className="grid size-12 shrink-0 place-items-center rounded-xl border-2 border-brand-400/40 text-brand-300">
									<Icon aria-hidden className="size-6" strokeWidth={1.5} />
								</span>
								<div>
									<h3 className="font-bold">{title}</h3>
									<p className="mt-1.5 text-sm leading-relaxed text-white/65">
										{body}
									</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* Our Expertise As … */}
			<section className="container-page py-10 sm:py-12">
				<p className="text-xs font-semibold tracking-widest text-brand-600 uppercase">
					Our expertise as
				</p>
				<h2 className="mt-2 text-fluid-h2 font-extrabold text-balance text-brand-950">
					Real Estate Agent in {SITE.region}
				</h2>
				<p className="mt-3 max-w-5xl text-pretty text-brand-900/70">
					Expert guidance you can trust. We have worked these sectors since
					2009 — every Greek-letter sector, the Ecotech industrial pockets, the
					village abadi belts and the Noida Extension and YEIDA sectors beside
					them. So we can tell you what a plot should cost, which authority
					paperwork it needs, how long the transfer will realistically take and
					what the land beside it is reserved for — before you commit, not
					after. One call, and you get a straight answer on availability, rate
					and title.
				</p>
				<ul className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{EXPERTISE.map(({ icon: Icon, title, body }) => (
						<li key={title} className="reveal card-surface p-6">
							<span className="grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-700">
								<Icon aria-hidden className="size-6" strokeWidth={1.5} />
							</span>
							<h3 className="mt-4 font-bold text-brand-950">{title}</h3>
							<p className="mt-1.5 text-sm leading-relaxed text-brand-900/65">
								{body}
							</p>
						</li>
					))}
				</ul>
			</section>
			{/* Visit Us */}
			<section className="bg-sand-100 py-10 sm:py-12">
				<div className="container-page">
					<h2 className="text-fluid-h2 font-extrabold text-balance text-brand-950">
						Visit us — we are right here in {SITE.region}
					</h2>
					{/* Map only. Address, phone and hours are in Get In Touch above and
					    in the footer; a third copy here just read as two contact blocks.
					    The map's own card carries the address anyway. */}
					<div className="card-surface mt-7 overflow-hidden">
						<iframe
							src={OFFICE_MAP_EMBED}
							title={`Map showing ${SITE_NAME} in ${SITE.region}`}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="block h-80 w-full border-0 sm:h-[26rem]"
						/>
					</div>
				</div>
			</section>
			<GoogleReviews />

			<ContactSection />
		</>
	);
}
