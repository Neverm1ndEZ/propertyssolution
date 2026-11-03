import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { AREA_LIST } from "@/lib/maps";
import { LANDING_PAGES } from "@/config/landing";
import {
	ADDRESS,
	EMAIL,
	HOURS,
	PHONE,
	PHONE_HREF,
	SITE_NAME,
} from "@/lib/site";

export default function SiteFooter() {
	return (
		<footer className="bg-brand-950 text-white">
			<div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-5">
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

				<address className="text-sm not-italic">
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
							<a href={`mailto:${EMAIL}`} className="break-all hover:text-white">
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
