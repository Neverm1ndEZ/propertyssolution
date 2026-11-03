import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import MapGrid from "@/components/MapGrid";
import ContactSection from "@/components/ContactSection";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { AREA_LIST, getArea, getMaps } from "@/lib/maps";
import { keywordsFor, pageKeywords } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
	return AREA_LIST.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ area: string }>;
}): Promise<Metadata> {
	const area = getArea((await params).area);
	if (!area) return {};
	return {
		title: `${area.name} layout plans`,
		description: `Browse and download all ${area.count} authority layout plans for ${area.name}.`,
		keywords: pageKeywords(keywordsFor(area.name, area.name)),
		alternates: { canonical: `/maps/${area.slug}` },
	};
}

export default async function MapGridPage({
	params,
}: {
	params: Promise<{ area: string }>;
}) {
	const { area: slug } = await params;
	const area = getArea(slug);
	if (!area) notFound();

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
						{area.name}
					</li>
				</ol>
			</nav>

			<header className="mb-8">
				<h1 className="text-fluid-h2 font-extrabold text-balance text-brand-950">
					{area.name} layout plans
				</h1>
				<p className="mt-2 max-w-prose text-sm text-pretty text-brand-900/60">
					{area.count} authority plans, free to view and download at full
					resolution.
				</p>
			</header>

							<MapGrid maps={getMaps(slug)} areaSlug={slug} />

			<JsonLd
				data={breadcrumbs([
					{ name: "Home", path: "/" },
					{ name: "Our Maps", path: "/maps" },
					{ name: area.name, path: `/maps/${area.slug}` },
				])}
			/>
			</div>

			<ContactSection />
		</>
	);
}
