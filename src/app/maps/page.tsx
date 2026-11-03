import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ALL_MAPS, AREA_LIST } from "@/lib/maps";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { keywordsFor, pageKeywords } from "@/lib/seo";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
	title: "Our Maps — All Layout Plans",
	description: `All ${ALL_MAPS.length} authority layout plans for Greater Noida, Noida Extension and the Yamuna Expressway, free to view and download at full resolution.`,
	keywords: pageKeywords(
		AREA_LIST.flatMap((a) => keywordsFor(`${a.name} layout plans`, a.name)),
	),
	alternates: { canonical: "/maps" },
};

/**
 * The maps hub, shaped like shivaassociates.com/maps: the three region
 * shortcuts up top, then one full-width block per region — heading, standfirst,
 * master plan, "Explore More" — each flipping up on scroll the way theirs do.
 *
 * Like theirs, it stops there: the per-area pages carry the searchable grid of
 * every plan, so this page is a chooser, not a listing.
 */

const AREA_COPY: Record<string, { standfirst: string; blurb: string }> = {
	"greater-noida": {
		standfirst: "Every Sector, Pocket and Industrial Belt",
		blurb:
			"The GNIDA master plan, plus the individual layout plan for each Greek-letter sector, the Ecotech industrial pockets and the village abadi belts.",
	},
	"yamuna-expressway": {
		standfirst: "Sector Layouts Along the Jewar Airport Belt",
		blurb:
			"The YEIDA master plan, with every Sector 16 to 33 layout — pocket by pocket through Sector 18 and Sector 20 — and the villages between them.",
	},
	"noida-extension": {
		standfirst: "Greater Noida West at a Glance",
		blurb:
			"The master plan for Noida Extension, showing the sector grid, the green belts and where the residential pockets sit against the commercial land.",
	},
};

export default function AllMapsPage() {
	return (
		<>
			<div className="container-page py-7 sm:py-9">
				<nav aria-label="Breadcrumb" className="mb-6">
					<ol className="flex items-center gap-1.5 text-sm text-brand-900/55">
						<li>
							<Link href="/" className="hover:text-brand-700">
								Home
							</Link>
						</li>
						<ChevronRight aria-hidden className="size-3.5" />
						<li aria-current="page" className="font-medium text-brand-900">
							Our Maps
						</li>
					</ol>
				</nav>

				<h1 className="text-fluid-h2 text-center font-extrabold text-balance text-brand-950">
					Navigate with Ease — Explore Our Maps
				</h1>
				<p className="mx-auto mt-3 max-w-4xl text-center text-brand-900/65">
					All {ALL_MAPS.length} authority layout plans across{" "}
					{AREA_LIST.map((a) => a.name).join(", ")} — free to view and download
					at full resolution.
				</p>

				<ul className="mt-6 flex flex-wrap justify-center gap-3">
					{AREA_LIST.map((area) => (
						<li key={area.slug}>
							<Link
								href={`/maps/${area.slug}`}
								className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-2.5 text-sm font-semibold text-white transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-brand-800"
							>
								{area.name} Maps
								<span className="text-xs text-white/60 tabular-nums">
									{area.count}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</div>

			{/* One block per region, alternating background so they read as slabs. */}
			{AREA_LIST.map((area, i) => {
				const copy = AREA_COPY[area.slug];
				return (
					<section
						key={area.slug}
						id={area.slug}
						className={`scroll-mt-24 py-10 sm:py-12 ${i % 2 ? "bg-sand-100" : ""}`}
					>
						<div className="container-page reveal-flip">
							<h2 className="text-fluid-h2 text-center font-extrabold text-balance text-brand-950">
								<Link href={`/maps/${area.slug}`} className="hover:underline">
									{area.name} Map
								</Link>
							</h2>
							{copy && (
								<p className="mt-2 text-center text-lg text-brand-900/70">
									{copy.standfirst}
								</p>
							)}

							<Link
								href={`/maps/${area.slug}`}
								className="group mt-7 block"
								aria-label={`Browse all ${area.count} ${area.name} layout plans`}
							>
								<div className="relative aspect-3/2 w-full overflow-hidden rounded-xl bg-white shadow-(--shadow-soft) ring-1 ring-sand-200">
									<Image
										src={area.cover}
										alt={`${area.name} master plan`}
										fill
										sizes="(max-width: 1024px) 100vw, 1100px"
										quality={80}
										className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
									/>
								</div>
							</Link>

							{copy && (
								<p className="mx-auto mt-5 max-w-4xl text-center text-sm leading-relaxed text-brand-900/70">
									{copy.blurb}
								</p>
							)}

							<div className="mt-6 text-center">
								<Link
									href={`/maps/${area.slug}`}
									className="inline-block rounded-full bg-brand-700 px-8 py-3 text-sm font-semibold text-white transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-brand-800"
								>
									Explore More
								</Link>
							</div>
						</div>
					</section>
				);
			})}

			<JsonLd
				data={breadcrumbs([
					{ name: "Home", path: "/" },
					{ name: "Our Maps", path: "/maps" },
				])}
			/>

			<ContactSection />
		</>
	);
}
