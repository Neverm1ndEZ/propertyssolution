import Image from "next/image";
import Link from "next/link";
import {
	Building2,
	Factory,
	Home as HomeIcon,
	LandPlot,
	Store,
	Users,
} from "lucide-react";
import Hero from "@/components/Hero";
import MapCard from "@/components/MapCard";
import ContactSection from "@/components/ContactSection";
import { ALL_MAPS, AREA_LIST } from "@/lib/maps";
import { thumbUrl } from "@/lib/map-utils";
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
		title: "2500+ Satisfied Clients",
		body: `Since 2009 we have helped buyers and sellers across ${SITE.region} close on plots, factories and warehouses.`,
	},
	{
		icon: Building2,
		title: "Every Authority Layout Plan",
		body: `All ${ALL_MAPS.length} sector and village layout plans for ${SITE.region}, free to view and download at full resolution.`,
	},
	{
		icon: LandPlot,
		title: "Clear Documentation",
		body: "Straight answers on title, transfer and what a plot is actually worth — no surprises at registry.",
	},
];

const FEATURED = [...ALL_MAPS].sort(() => Math.random() - 0.5).slice(0, 8);

export default function HomeGreaterNoida() {
	return (
		<>
			<Hero />

			{/* What We Do As ... */}
			<section className="container-page grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
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
			<section className="bg-brand-950 py-12 text-white sm:py-16">
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
			<section className="container-page py-14 sm:py-16">
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
			<section className="bg-sand-100 py-14 sm:py-16">
				<div className="container-page">
					<h2 className="text-fluid-h2 text-center font-extrabold text-brand-950">
						Our Layout Maps:
					</h2>
					<ul className="mt-9 grid gap-6 sm:grid-cols-3">
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
					<p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-brand-900/70">
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

			{/* Featured maps + enquiry sidebar */}
			<section className="container-page py-14 lg:py-16">
				<div>
					<h2 className="text-fluid-h2 font-extrabold text-brand-950">
						Featured Layout Maps
					</h2>
					<div className="mt-7 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
						{FEATURED.map((map) => (
							<MapCard key={map.id} map={map} areaSlug={map.area.slug} />
						))}
					</div>
				</div>
			</section>

			<ContactSection />

			{/* Why Choose Us */}
			<section className="bg-brand-950 py-14 text-white sm:py-16">
				<div className="container-page">
					<h2 className="text-fluid-h2 font-extrabold text-balance">
						Why Choose Us As {SITE.title.split("|")[0].trim()}?
					</h2>
					<ul className="mt-9 grid gap-7 sm:grid-cols-3">
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
		</>
	);
}
