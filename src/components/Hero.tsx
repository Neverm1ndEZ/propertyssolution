import Image from "next/image";
import { ALL_MAPS, AREA_LIST } from "@/lib/maps";
import { SITE } from "@/config/sites";
import HeroSearch from "@/components/HeroSearch";

/**
 * Mirrors Shiva Associates' hero: full-bleed photo, oversized headline, the
 * "Let's Turn Your Real Estate Dream Into Reality" line, and a search bar sitting
 * in the hero. Theirs is black/gold; this is white/green per the client.
 */
export default function Hero() {
	return (
		<section className="relative isolate flex min-h-[68svh] items-center overflow-hidden">
			{/*
			 * Was a 5.6MB PNG set as a CSS background — invisible to the preloader
			 * and unoptimisable. next/image with priority makes it the LCP element.
			 */}
			<Image
				src="/site-assets/hero-1920.webp"
				alt=""
				fill
				priority
				fetchPriority="high"
				sizes="100vw"
				className="-z-10 object-cover"
			/>
			<div className="absolute inset-0 -z-10 bg-linear-to-b from-brand-950/75 via-brand-950/55 to-brand-950/85" />

			<div className="container-page py-14 text-center text-white sm:py-20">
				<h1 className="text-fluid-hero font-extrabold text-balance">
					{SITE.heroHeadline}
				</h1>
				<p className="mt-3 text-lg font-semibold text-balance text-brand-200 sm:text-2xl">
					{SITE.heroRegions}
				</p>
				<p className="mt-4 text-base text-balance text-white/80 sm:text-xl">
					{SITE.heroTagline}
				</p>

				<HeroSearch areaSlug={AREA_LIST[0].slug} />

				<p className="mt-5 text-sm text-white/70">
					{ALL_MAPS.length} authority layout plans — free to view and download
				</p>
			</div>
		</section>
	);
}
