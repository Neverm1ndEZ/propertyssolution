import type { Metadata } from "next";
import { keywordsFor, pageKeywords } from "@/lib/seo";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import {
	ADDRESS,
	EMAIL,
	HOURS,
	OFFICE_MAP_EMBED,
	PHONE,
	PHONE_HREF,
	SITE_NAME,
} from "@/lib/site";

export const metadata: Metadata = {
	title: "Contact us",
	description: `Call ${PHONE} or email ${EMAIL}. Property Solutions, Tradex Tower 2, Alpha 1 Commercial Belt, Greater Noida.`,
	keywords: pageKeywords(keywordsFor("contact " + SITE_NAME)),
	alternates: { canonical: "/contact" },
};

export default function ContactPage() {
	return (
		<div className="container-page py-10 lg:py-14">
			<header className="max-w-2xl">
				<p className="text-xs font-semibold tracking-widest text-brand-600 uppercase">
					Contact
				</p>
				<h1 className="text-fluid-h2 mt-2 font-extrabold text-balance text-brand-950">
					Tell us what you are looking for
				</h1>
				<p className="mt-3 text-pretty text-brand-900/65">
					Sector, plot size, budget — send the details and we will come back
					with what is available. Or just call; it is usually faster.
				</p>
			</header>

			<div className="mt-10 grid gap-6 lg:grid-cols-[22rem_1fr] lg:gap-8">
				<div className="flex flex-col gap-6">
					<section className="card-surface overflow-hidden">
						<h2 className="bg-brand-950 px-5 py-4 text-base font-bold text-white">
							{SITE_NAME}
						</h2>
						<ul className="space-y-4 p-5 text-sm">
							<li className="flex gap-3 text-brand-900/70">
								<MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-600" />
								<span>{ADDRESS}</span>
							</li>
							<li className="flex gap-3">
								<Phone aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-600" />
								<a
									href={PHONE_HREF}
									className="font-medium text-brand-700 hover:underline"
								>
									{PHONE}
								</a>
							</li>
							<li className="flex gap-3">
								<Mail aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-600" />
								<a
									href={`mailto:${EMAIL}`}
									className="break-all font-medium text-brand-700 hover:underline"
								>
									{EMAIL}
								</a>
							</li>
							<li className="flex gap-3 text-brand-900/70">
								<Clock aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-600" />
								<span>{HOURS}</span>
							</li>
						</ul>
					</section>

					<a
						href={PHONE_HREF}
						className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-700 px-6 py-4 font-semibold text-white shadow-(--shadow-soft) transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-brand-800"
					>
						<Phone aria-hidden className="size-5" />
						Call {PHONE}
					</a>
				</div>

				<section className="card-surface p-5 sm:p-7">
					<h2 className="text-base font-bold text-brand-950">
						Send us a message
					</h2>
					<div className="mt-5">
						<ContactForm rows={8} />
					</div>
				</section>
			</div>

			<section className="card-surface mt-8 overflow-hidden">
				<h2 className="sr-only">Our location</h2>
				<iframe
					src={OFFICE_MAP_EMBED}
					title={`Map showing ${SITE_NAME} in Greater Noida`}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					className="block h-[22rem] w-full border-0 sm:h-[26rem]"
				/>
			</section>
		</div>
	);
}
