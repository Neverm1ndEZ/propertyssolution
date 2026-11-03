import Link from "next/link";
import { thumbUrl, type MapItem } from "@/lib/map-utils";

/**
 * Card layout mirrors Shiva Associates' map grid: framed thumbnail with a solid
 * label bar underneath carrying the sector name, and nothing else. Their bar is
 * black on red; the client asked for white and green, so the bar is brand green.
 *
 * The whole card is the link. Download lives on the map's own page, where the
 * full-resolution plan is on screen to download — a second row of View/Download
 * links under every card only crowded the grid.
 *
 * The thumbnail is a prebuilt ~25KB webp (`pnpm img`), so the grid never touches
 * the 2400px originals and never hits the image optimizer.
 */
export default function MapCard({
	map,
	areaSlug,
	eager = false,
}: {
	map: MapItem;
	areaSlug: string;
	eager?: boolean;
}) {
	const href = `/maps/${areaSlug}/${map.id}`;

	// Hover stays still: these are dense scans, so lifting the card or zooming
	// the plan makes the grid jump and crops the frame off the artwork. The cue
	// is the ring and shadow deepening instead.
	return (
		<article className="group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-(--shadow-soft) ring-1 ring-sand-200 transition-[box-shadow,--tw-ring-color] duration-200 ease-(--ease-out-soft) hover:shadow-(--shadow-lift) hover:ring-brand-400 focus-within:shadow-(--shadow-lift) focus-within:ring-brand-500">
			<Link href={href} className="block overflow-hidden bg-white p-1.5">
				<span className="block aspect-4/3 overflow-hidden rounded-sm ring-1 ring-sand-200">
					{/* eslint-disable-next-line @next/next/no-img-element -- prebuilt 480px webp thumbnail. */}
					<img
						src={thumbUrl(map.imageUrl)}
						alt={`${map.name} layout plan`}
						width={480}
						height={360}
						loading={eager ? "eager" : "lazy"}
						fetchPriority={eager ? "high" : "auto"}
						decoding="async"
						className="h-full w-full bg-white object-contain"
					/>
				</span>
			</Link>

			{/* Solid name bar — the defining element of their card. */}
			<Link
				href={href}
				className="mt-auto block bg-brand-800 px-3 py-2.5 text-center transition-colors group-hover:bg-brand-700"
			>
				<span className="line-clamp-2 text-[0.7rem] leading-tight font-semibold tracking-wide text-white uppercase sm:text-xs">
					{map.name}
				</span>
			</Link>

		</article>
	);
}
