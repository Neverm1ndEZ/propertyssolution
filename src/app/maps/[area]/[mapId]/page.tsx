import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Download, Maximize2 } from "lucide-react";
import { AREA_LIST, getArea, getMaps, mapData } from "@/lib/maps";
import { thumbUrl } from "@/lib/map-utils";
import { localityFor, mapEmbedUrl } from "@/lib/locality";
import { SITE_NAME } from "@/lib/site";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import MapArticle from "@/components/MapArticle";
import { keywordsFor, pageKeywords } from "@/lib/seo";
import ContactSection from "@/components/ContactSection";

export const dynamicParams = false;

export function generateStaticParams() {
	return AREA_LIST.flatMap((area) =>
		mapData[area.key].map((map) => ({ area: area.slug, mapId: map.id })),
	);
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ area: string; mapId: string }>;
}): Promise<Metadata> {
	const { area: slug, mapId } = await params;
	const area = getArea(slug);
	const map = getMaps(slug).find((m) => m.id === mapId);
	if (!area || !map) return {};
	return {
		title: `${map.name}, ${area.name} HD Map`,
		description: `Explore ${map.name}, ${area.name} Map. Presented by ${SITE_NAME}. View plot numbers, road widths and sector layout, and download the plan free.`,
		keywords: pageKeywords(keywordsFor(map.name, area.name)),
		alternates: { canonical: `/maps/${slug}/${mapId}` },
		openGraph: {
			type: "article",
			title: `${map.name}, ${area.name}`,
			// The original is 2400px; crawlers and WhatsApp reject large images.
			images: [thumbUrl(map.imageUrl)],
		},
	};
}

export default async function MapDetailPage({
	params,
}: {
	params: Promise<{ area: string; mapId: string }>;
}) {
	const { area: slug, mapId } = await params;
	const area = getArea(slug);
	if (!area) notFound();

	const maps = getMaps(slug);
	const index = maps.findIndex((m) => m.id === mapId);
	if (index === -1) notFound();

	const map = maps[index];
	const locality = localityFor(area.key);

	return (
		<>
			<div className="container-page py-7 sm:py-9">
				<nav aria-label="Breadcrumb" className="mb-6">
					<ol className="flex flex-wrap items-center gap-1.5 text-sm text-brand-900/55">
						<li>
							<Link href="/" className="hover:text-brand-700">
								Home
							</Link>
						</li>
						<ChevronRight aria-hidden className="size-3.5" />
						<li>
							<Link href="/maps" className="hover:text-brand-700">
								Our Maps
							</Link>
						</li>
						<ChevronRight aria-hidden className="size-3.5" />
						<li>
							<Link href={`/maps/${slug}`} className="hover:text-brand-700">
								{area.name}
							</Link>
						</li>
						<ChevronRight aria-hidden className="size-3.5" />
						<li aria-current="page" className="font-medium text-brand-900">
							{map.name}
						</li>
					</ol>
				</nav>

				<h1 className="text-fluid-h2 font-extrabold text-balance text-brand-950">
					{map.name}, {area.name}
				</h1>

				{/* Caption bar above the plan, as on their sector pages. */}
				<h2 className="mt-6 bg-brand-800 px-4 py-3 text-center text-sm font-semibold text-white sm:text-base">
					Layout Plan For {map.name}, {area.name}. Presented By — {SITE_NAME}
				</h2>

				<figure className="border-4 border-t-0 border-brand-800 bg-white">
					<div className="relative aspect-4/3 w-full bg-sand-100 sm:aspect-3/2">
						<Image
							src={map.imageUrl}
							alt={`${map.name} layout plan, ${area.name}`}
							fill
							priority
							sizes="(max-width: 1024px) 100vw, 1100px"
							quality={80}
							className="object-contain"
						/>
					</div>
					<figcaption className="flex flex-wrap items-center gap-3 border-t border-sand-200 p-4">
						<a
							href={map.imageUrl}
							download={map.name}
							className="inline-flex items-center gap-2 rounded bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-brand-800"
						>
							<Download aria-hidden className="size-4" />
							Download map
						</a>
						<a
							href={map.imageUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded border border-sand-300 px-5 py-2.5 text-sm font-semibold text-brand-800 transition-colors hover:bg-sand-100"
						>
							<Maximize2 aria-hidden className="size-4" />
							Full resolution
						</a>
					</figcaption>
				</figure>

				<h2 className="text-fluid-h2 mt-12 font-extrabold text-brand-950">
					Explore {map.name}, {area.name}
				</h2>

				{/* Nearby Locality Overview — their four-column block. */}
				<section className="mt-7" aria-labelledby="locality">
					<h3
						id="locality"
						className="bg-brand-800 px-4 py-2.5 text-center text-sm font-bold tracking-wide text-white uppercase"
					>
						Nearby Locality Overview
					</h3>
					<div className="grid gap-px bg-sand-200 sm:grid-cols-2 lg:grid-cols-4">
						{locality.map((group) => (
							<div key={group.title} className="bg-white p-5">
								<h4 className="text-xs font-bold tracking-widest text-brand-600 uppercase">
									{group.title}
								</h4>
								<ul className="mt-3 space-y-1.5 text-sm text-brand-900/75">
									{group.items.map((item) => (
										<li key={item} className="flex gap-2">
											<span aria-hidden className="text-brand-500">
												•
											</span>
											{item}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
					<p className="mt-2 text-xs text-brand-900/45">
						Key landmarks across {area.name}. Distances vary by pocket — call us
						for specifics on any plot.
					</p>
				</section>

				{/* About */}
				<section className="mt-10" aria-labelledby="about-map">
					<h3
						id="about-map"
						className="text-lg font-bold text-brand-950 sm:text-xl"
					>
						About {map.name}, {area.name}
					</h3>
					<p className="mt-3 leading-relaxed text-brand-900/75">
						{map.description}
					</p>
					<p className="mt-3 leading-relaxed text-brand-900/75">
						The plan above is the authority layout for {map.name}. Use it to
						check plot numbers, plot sizes, road widths, park and facility
						reservations before you commit to a purchase. {SITE_NAME} has been
						dealing in {area.name} property since 2009 — call us for current
						availability and rates in this sector.
					</p>
				</section>

				{/* Sector Location */}
				<section className="mt-10" aria-labelledby="sector-location">
					<h3
						id="sector-location"
						className="bg-brand-800 px-4 py-2.5 text-center text-sm font-bold tracking-wide text-white uppercase"
					>
						Sector Location
					</h3>
					<iframe
						src={mapEmbedUrl(map.name, area.name)}
						title={`Google map showing ${map.name}, ${area.name}`}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						className="block h-[22rem] w-full border-4 border-t-0 border-brand-800 sm:h-[28rem]"
					/>
				</section>

				<MapArticle mapName={map.name} areaName={area.name} />

				<JsonLd
					data={breadcrumbs([
						{ name: "Home", path: "/" },
						{ name: "Our Maps", path: "/maps" },
						{ name: area.name, path: `/maps/${slug}` },
						{ name: map.name, path: `/maps/${slug}/${mapId}` },
					])}
				/>
			</div>

			<ContactSection />
		</>
	);
}
