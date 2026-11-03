import type { Metadata } from "next";
import { keywordsFor, pageKeywords } from "@/lib/seo";
import { BadgeCheck, Building2, Handshake, ShieldCheck } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import { HOURS, SITE_NAME } from "@/lib/site";
import { SITE } from "@/config/sites";

export const metadata: Metadata = {
	title: "About us",
	description:
		"Property Solutions has been handling the sale and purchase of residential, commercial and industrial plots across Greater Noida and the Yamuna Expressway since 2009.",
	keywords: pageKeywords(keywordsFor("about " + SITE_NAME)),
	alternates: { canonical: "/about" },
};

const OFFERINGS = [
	{
		icon: Building2,
		title: "Residential plots",
		body: "Authority and private plots across every Greater Noida sector.",
	},
	{
		icon: Handshake,
		title: "Commercial plots & shops",
		body: "Retail frontage and commercial belts with clear titles.",
	},
	{
		icon: ShieldCheck,
		title: "6% Kisan Kota plots",
		body: "Farmer-quota plots with full documentation support.",
	},
	{
		icon: BadgeCheck,
		title: "Industrial land",
		body: "Factory and warehouse plots along the Yamuna Expressway.",
	},
];

export default function AboutPage() {
	return (
		<>
			<div className="container-page py-10 lg:py-14">
			<div className="max-w-3xl">
				<p className="text-xs font-semibold tracking-widest text-brand-600 uppercase">
					Since 2009
				</p>
				<h1 className="text-fluid-h2 mt-2 font-extrabold text-balance text-brand-950">
					Turning real estate plans into property you own
				</h1>

				<div className="mt-6 space-y-5 text-[0.95rem] leading-relaxed text-brand-900/75">
					<p>{SITE.aboutLead}</p>
					<p>
						Buying land here usually starts with the authority layout plan, and
						those plans are hard to find. So we put every one we have on this
						site, free to view and download at full resolution. Find your sector,
						check the plot, then call us about what is actually available.
					</p>
					<p>
						We work on clear documentation, honest pricing and a straight answer
						about what a plot is worth. Payment by cash, cheque, card or money
						order. We are open {HOURS}.
					</p>
				</div>

				<h2 className="text-fluid-h2 mt-12 font-extrabold text-brand-950">
					What we deal in
				</h2>
				<ul className="mt-6 grid gap-4 sm:grid-cols-2">
					{OFFERINGS.map(({ icon: Icon, title, body }) => (
						<li
							key={title}
							className="card-surface flex gap-4 p-5 transition-[transform,box-shadow] duration-300 ease-(--ease-out-soft) hover:-translate-y-1 hover:shadow-(--shadow-lift)"
						>
							<span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
								<Icon aria-hidden className="size-5" />
							</span>
							<div className="min-w-0">
								<h3 className="text-sm font-bold text-brand-950">{title}</h3>
								<p className="mt-1 text-sm text-brand-900/65">{body}</p>
							</div>
						</li>
					))}
				</ul>
			</div>

			</div>

			<ContactSection />
		</>
	);
}
