"use client";
import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import MapCard from "@/components/MapCard";
import type { MapItem } from "@/lib/map-utils";

/** A map that may carry its own area, for the combined /maps listing. */
type GridItem = MapItem & { area?: { slug: string; name: string } };

/**
 * Client-side filter over a set of maps. The list is a few hundred items, so a
 * plain substring scan is well under a frame; useDeferredValue keeps typing
 * responsive if a slow device ever disagrees.
 *
 * `columns` is 3 only on the combined /maps page; every other grid is 4.
 */
export default function MapGrid({
	maps,
	areaSlug,
	columns = 4,
	searchLabel,
}: {
	maps: GridItem[];
	/** Fallback area for items that do not carry their own. */
	areaSlug?: string;
	columns?: 3 | 4;
	searchLabel?: string;
}) {
	const [query, setQuery] = useState("");
	const deferred = useDeferredValue(query);

	// The hero search navigates here with ?q=. Read it after hydration rather
	// than with useSearchParams: that hook opts the component out of static
	// prerendering, which left every map card missing from the server HTML and
	// invisible to crawlers. Syncing state from the URL — an external system —
	// is what effects are for, so the cascading-render rule does not apply.
	useEffect(() => {
		const q = new URLSearchParams(window.location.search).get("q");
		// eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from the URL, an external system, which is exactly what effects are for.
		if (q) setQuery(q);
	}, []);

	const results = useMemo(() => {
		const q = deferred.trim().toLowerCase();
		if (!q) return maps;
		return maps.filter((m) => m.name.toLowerCase().includes(q));
	}, [maps, deferred]);

	// The list arrives already ordered by category, so a run of equal `group`
	// values is a section — no second sort, and a filtered list just yields
	// shorter runs with the empty categories gone.
	const sections = useMemo(() => {
		const out: { group?: string; items: GridItem[] }[] = [];
		for (const m of results) {
			const last = out.at(-1);
			if (last && last.group === m.group) last.items.push(m);
			else out.push({ group: m.group, items: [m] });
		}
		return out;
	}, [results]);

	return (
		<>
			<div className="sticky top-[var(--header-h,8rem)] z-30 -mx-4 mb-8 bg-sand-50/85 px-4 py-3 backdrop-blur-md sm:-mx-6 sm:px-6">
				<div className="relative mx-auto max-w-xl">
					<Search
						aria-hidden
						className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-brand-900/40"
					/>
					<input
						type="search"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder={searchLabel ?? `Search ${maps.length} layout plans…`}
						aria-label="Search layout plans"
						className="w-full rounded-full border border-sand-200 bg-white py-3 pr-11 pl-11 text-sm shadow-(--shadow-soft) transition-shadow outline-none placeholder:text-brand-900/35 focus:border-brand-300 focus:shadow-(--shadow-lift)"
					/>
					{query && (
						<button
							type="button"
							onClick={() => setQuery("")}
							aria-label="Clear search"
							className="absolute top-1/2 right-3 grid size-7 -translate-y-1/2 place-items-center rounded-full text-brand-900/45 transition-colors hover:bg-sand-100 hover:text-brand-800"
						>
							<X className="size-4" />
						</button>
					)}
				</div>
			</div>

			<p aria-live="polite" className="sr-only">
				{results.length} layout plans match
			</p>

			{results.length === 0 ? (
				<p className="py-24 text-center text-brand-900/60">
					No layout plan matches “{query.trim()}”.
				</p>
			) : (
				sections.map((section, s) => {
					// Index across the whole list, so only the real first screen is eager.
					const offset = sections
						.slice(0, s)
						.reduce((n, x) => n + x.items.length, 0);
					return (
						<section key={section.group ?? s} className={s ? "mt-12" : ""}>
							{section.group && (
								<h2 className="mb-5 flex items-baseline gap-3 text-xl font-extrabold tracking-tight text-brand-950 sm:text-2xl">
									{section.group}
									<span className="text-sm font-medium text-brand-900/45 tabular-nums">
										{section.items.length}
									</span>
								</h2>
							)}
							<div
								className={`grid grid-cols-2 gap-4 sm:gap-5 ${
									columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
								}`}
							>
								{section.items.map((map, i) => (
									// content-visibility lets the browser skip layout/paint for
									// offscreen cards — smooth rather than janky at 177.
									<div
										key={map.id}
										className="h-full [contain-intrinsic-size:auto_320px] [content-visibility:auto]"
									>
										<MapCard
											map={map}
											areaSlug={map.area?.slug ?? areaSlug ?? ""}
											eager={offset + i < 10}
										/>
									</div>
								))}
							</div>
						</section>
					);
				})
			)}
		</>
	);
}
