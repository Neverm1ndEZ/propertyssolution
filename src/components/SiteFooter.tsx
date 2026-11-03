import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ALL_MAPS, AREA_LIST } from "@/lib/maps";
import { tagLabel } from "@/lib/map-utils";
import { LANDING_PAGES } from "@/config/landing";
import {
	ADDRESS,
	EMAIL,
	HOURS,
	PHONE,
	PHONE_HREF,
	SITE_NAME,
} from "@/lib/site";

/** Chips per region in the footer index. The rest live on the area page. */
const TAGS_PER_REGION = 25;

/**
 * One chip per group of plans rather than per plan — the fifteen "SECTOR 18
 * PART-…" sheets become a single "Sector 18". The chip opens the first plan in
 * its group, which is the sheet someone searching that sector wants anyway.
 */
function tagsFor(slug: string) {
	const groups = new Map<string, string>();
	for (const map of ALL_MAPS) {
		if (map.area.slug !== slug) continue;
		const label = tagLabel(map.name);
		if (!groups.has(label)) groups.set(label, `/maps/${slug}/${map.id}`);
	}
	return [...groups].map(([label, href]) => ({ label, href }));
}

export default function SiteFooter() {
	return (
		<footer className="bg-brand-950 text-white">
			{/*
			 * The map index shivaassociates.co carry at the foot of their pages: a panel
			 * per region with a solid heading bar and the plans as chips, each
			 * carrying the sector name as its anchor text.
			 *
			 * On both sites per the client, although .com — this site's model — has
			 * no such strip of its own.
			 *
			 * Capped per region — the headline sectors, not all 177. A footer
			 * carrying every plan on every page was 9.6KB gzipped a page and a wall
			 * of names; the full list is one click away on the area page.
			 */}
			<section aria-labelledby="map-index" className="bg-sand-100 text-brand-950">
				<div className="container-page py-10 sm:py-12">
					<h2
						id="map-index"
						className="text-center text-xs font-semibold tracking-widest text-brand-600 uppercase"
					>
						Layout plans by region
					</h2>
					<div className="mt-7 grid gap-5 lg:grid-cols-3">
						{AREA_LIST.map((area) => {
							const tags = tagsFor(area.slug).slice(0, TAGS_PER_REGION);
							return (
								<nav
									key={area.slug}
									aria-labelledby={`tags-${area.slug}`}
									className="flex flex-col overflow-hidden rounded-xl bg-white ring-1 ring-sand-200"
								>
									<h3
										id={`tags-${area.slug}`}
										className="bg-brand-900 px-4 py-2.5 text-center text-sm font-bold tracking-wide text-white"
									>
										{area.name} Maps
										<span className="ml-2 font-medium text-white/50 tabular-nums">
											{area.count}
										</span>
									</h3>
									<ul className="flex flex-1 flex-wrap content-start gap-1.5 p-5">
										{tags.map((tag) => (
											<li key={tag.label}>
												<Link
													href={tag.href}
													className="block rounded bg-brand-800 px-2.5 py-1 text-[0.7rem] leading-tight font-semibold text-white transition-colors hover:bg-brand-600"
												>
													{tag.label}
												</Link>
											</li>
										))}
									</ul>
									{tagsFor(area.slug).length > tags.length && (
										<Link
											href={`/maps/${area.slug}`}
											className="border-t border-sand-200 px-5 py-3 text-center text-xs font-semibold text-brand-700 transition-colors hover:bg-sand-50 hover:text-brand-900"
										>
											View all {area.count} {area.name} plans →
										</Link>
									)}
								</nav>
							);
						})}
					</div>
				</div>
			</section>

			<div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-6">
				<div className="sm:col-span-2 lg:col-span-1">
					<h2 className="text-lg font-bold tracking-tight">{SITE_NAME}</h2>
					<p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
						Industrial, residential and commercial plots across Greater Noida,
						the Yamuna Expressway and Sikandrabad since 2009.
					</p>
				</div>

				<nav aria-labelledby="footer-maps">
					<h3
						id="footer-maps"
						className="text-xs font-semibold tracking-widest text-brand-400 uppercase"
					>
						Layout maps
					</h3>
					<ul className="mt-4 space-y-2.5 text-sm">
						{AREA_LIST.map((area) => (
							<li key={area.slug}>
								<Link
									href={`/maps/${area.slug}`}
									className="text-white/70 transition-colors hover:text-white"
								>
									{area.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<nav aria-labelledby="footer-buy">
					<h3
						id="footer-buy"
						className="text-xs font-semibold tracking-widest text-brand-400 uppercase"
					>
						What we deal in
					</h3>
					<ul className="mt-4 space-y-2.5 text-sm">
						{LANDING_PAGES.map((p) => (
							<li key={p.slug}>
								<Link
									href={`/${p.slug}`}
									className="text-white/70 transition-colors hover:text-white"
								>
									{p.title}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<nav aria-labelledby="footer-company">
					<h3
						id="footer-company"
						className="text-xs font-semibold tracking-widest text-brand-400 uppercase"
					>
						Company
					</h3>
					<ul className="mt-4 space-y-2.5 text-sm">
						{[
							{ href: "/", label: "Home" },
							{ href: "/about", label: "About us" },
							{ href: "/contact", label: "Contact" },
						].map((l) => (
							<li key={l.href}>
								<Link
									href={l.href}
									className="text-white/70 transition-colors hover:text-white"
								>
									{l.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				{/* Two columns wide: at one, the email address and the opening hours
				    both wrapped onto a second line. */}
				<address className="text-sm not-italic lg:col-span-2">
					<h3 className="text-xs font-semibold tracking-widest text-brand-400 uppercase">
						Reach us
					</h3>
					<ul className="mt-4 space-y-3 text-white/70">
						<li className="flex gap-3">
							<MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-400" />
							<span>{ADDRESS}</span>
						</li>
						<li className="flex gap-3">
							<Phone aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-400" />
							<a href={PHONE_HREF} className="hover:text-white">
								{PHONE}
							</a>
						</li>
						<li className="flex gap-3">
							<Mail aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-400" />
							<a href={`mailto:${EMAIL}`} className="hover:text-white">
								{EMAIL}
							</a>
						</li>
						<li className="flex gap-3">
							<Clock aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-400" />
							<span>{HOURS}</span>
						</li>
					</ul>
				</address>
			</div>

			<div className="border-t border-white/10">
				<p className="container-page py-5 text-center text-xs text-white/45">
					© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
