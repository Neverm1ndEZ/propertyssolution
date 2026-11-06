import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { AREA_LIST } from "@/lib/maps";
import { PHONE, PHONE_HREF } from "@/lib/site";
import PageTail from "@/components/PageTail";

/**
 * Without its own block this page inherited the root metadata: canonical
 * pointing at the home page and the home description — i.e. a 404 telling
 * Google it is the home page. Next already emits noindex here, so this only
 * has to drop the canonical and give the page its own description.
 */
export const metadata: Metadata = {
	title: "Page not found",
	description:
		"That page could not be found. Browse the authority layout plans or call us for help finding a plot.",
	alternates: { canonical: null },
};

export default function NotFound() {
	return (
		<>
			<div className="container-page flex flex-col items-center py-16 text-center lg:py-20">
				<p className="text-xs font-semibold tracking-widest text-brand-600 uppercase">
					Error 404
				</p>
				<h1 className="text-fluid-h2 mt-3 font-extrabold text-balance text-brand-950">
					We could not find that page
				</h1>
				<p className="mt-3 max-w-prose text-pretty text-brand-900/65">
					The layout plan you are after may have moved or been renamed. Pick a
					region below and search it, or call us and we will send it across.
				</p>

				<ul className="mt-9 grid w-full max-w-3xl gap-3 sm:grid-cols-3">
					{AREA_LIST.map((area) => (
						<li key={area.slug}>
							<Link
								href={`/maps/${area.slug}`}
								className="group card-surface flex h-full flex-col items-start gap-1 p-5 text-left transition-[transform,box-shadow] duration-300 ease-(--ease-out-soft) hover:-translate-y-1 hover:shadow-(--shadow-lift)"
							>
								<span className="text-xs font-semibold tracking-widest text-brand-600 uppercase">
									{area.count} plans
								</span>
								<span className="flex items-center gap-1.5 font-bold text-brand-950">
									{area.name}
									<ArrowRight
										aria-hidden
										className="size-4 transition-transform group-hover:translate-x-1"
									/>
								</span>
							</Link>
						</li>
					))}
				</ul>

				<div className="mt-9 flex flex-col gap-3 sm:flex-row">
					<Link
						href="/"
						className="rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-brand-800"
					>
						Back to home
					</Link>
					<a
						href={PHONE_HREF}
						className="inline-flex items-center justify-center gap-2 rounded-full border border-sand-200 bg-white px-6 py-3 text-sm font-semibold text-brand-800 transition-colors hover:bg-sand-100"
					>
						<Phone aria-hidden className="size-4" />
						{PHONE}
					</a>
				</div>
			</div>

			<PageTail />
		</>
	);
}
