import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { AREAS, getMaps } from "@/lib/maps";
import { LANDING_PAGES } from "@/config/landing";
import { keywordsFor, pageKeywords } from "@/lib/seo";
import MapCard from "@/components/MapCard";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import ContactSection from "@/components/ContactSection";

/**
 * Keyword landing pages, flat at root (/land-in-greater-noida) to mirror the
 * competitor's URL shape. Static params come from the active site's list, so
 * each deployment only publishes its own pages.
 */

export const dynamicParams = false;

const pages = LANDING_PAGES;
const bySlug = new Map(pages.map((p) => [p.slug, p]));

export function generateStaticParams() {
	return pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const page = bySlug.get((await params).slug);
	if (!page) return {};
	return {
		// The root layout template already appends the site name.
		title: page.title,
		description: page.description,
		keywords: pageKeywords(keywordsFor(page.h1)),
		alternates: { canonical: `/${page.slug}` },
	};
}

export default async function LandingPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const page = bySlug.get((await params).slug);
	if (!page) notFound();

	const area = AREAS[page.area];
	// A sample of the matching plans, so the page links into the real asset.
	const maps = getMaps(area.slug).slice(0, 8);

	return (
		<>
			<div className="container-page py-8 sm:py-10">
				<nav aria-label="Breadcrumb" className="mb-6">
					<ol className="flex items-center gap-1.5 text-sm text-brand-900/55">
						<li>
							<Link href="/" className="hover:text-brand-700">
								Home
							</Link>
						</li>
						<ChevronRight aria-hidden className="size-3.5" />
						<li aria-current="page" className="font-medium text-brand-900">
							{page.title}
						</li>
					</ol>
				</nav>

				<h1 className="text-fluid-h2 font-extrabold text-balance text-brand-950">
					{page.h1}
				</h1>
				<h2 className="mt-3 max-w-3xl text-lg font-semibold text-balance text-brand-700 sm:text-xl">
					{page.h2}
				</h2>

				<div className="mt-7 max-w-3xl space-y-4 leading-relaxed text-brand-900/75">
					{page.body.map((para) => (
						<p key={para.slice(0, 40)}>{para}</p>
					))}
				</div>

				<ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{page.highlights.map((h) => (
						<li
							key={h.title}
							className="rounded-lg border border-sand-200 bg-white p-5 shadow-(--shadow-soft)"
						>
							<h3 className="flex items-start gap-2 text-sm font-bold text-brand-950">
								<Check
									aria-hidden
									className="mt-0.5 size-4 shrink-0 text-brand-600"
								/>
								{h.title}
							</h3>
							<p className="mt-2 text-sm text-brand-900/65">{h.body}</p>
						</li>
					))}
				</ul>

				<section className="mt-12" aria-labelledby="related-plans">
					<div className="flex flex-wrap items-end justify-between gap-3">
						<h2
							id="related-plans"
							className="text-fluid-h2 font-extrabold text-brand-950"
						>
							{area.name} Layout Plans
						</h2>
						<Link
							href={`/maps/${area.slug}`}
							className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900"
						>
							View all {getMaps(area.slug).length}
							<ArrowRight
								aria-hidden
								className="size-4 transition-transform group-hover:translate-x-1"
							/>
						</Link>
					</div>
					<div className="mt-6 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
						{maps.map((map) => (
							<MapCard key={map.id} map={map} areaSlug={area.slug} />
						))}
					</div>
				</section>

				<JsonLd
					data={breadcrumbs([
						{ name: "Home", path: "/" },
						{ name: page.title, path: `/${page.slug}` },
					])}
				/>
			</div>

			<ContactSection />
		</>
	);
}
