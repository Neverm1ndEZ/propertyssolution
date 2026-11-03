import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { ADDRESS, EMAIL, HOURS, PHONE, PHONE_HREF, SITE_NAME } from "@/lib/site";
import { SITE } from "@/config/sites";

/**
 * Full-width "Get In Touch" band, as at the foot of Shiva Associates' sector
 * pages. Replaces the sticky sidebar — the sidebar competed for width with the
 * map grid, which is the thing visitors actually came for.
 */
export default function ContactSection() {
	return (
		<section className="bg-brand-950 text-white" aria-labelledby="get-in-touch">
			<div className="container-page py-10 sm:py-12">
				<p className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
					{SITE_NAME}
				</p>
				<p className="mt-1 text-center text-base text-brand-300 underline underline-offset-4">
					{SITE.title.split("|")[0].trim()}
				</p>

				<h2
					id="get-in-touch"
					className="text-fluid-h2 mt-8 text-center font-extrabold"
				>
					Get In Touch With Us
				</h2>

				<div className="mt-10 grid gap-10 lg:grid-cols-2">
					<ul className="space-y-5 text-sm">
						<li className="flex gap-4">
							<MapPin aria-hidden className="mt-0.5 size-5 shrink-0 text-brand-400" />
							<span className="text-white/80">{ADDRESS}</span>
						</li>
						<li className="flex gap-4">
							<Phone aria-hidden className="mt-0.5 size-5 shrink-0 text-brand-400" />
							<a
								href={PHONE_HREF}
								className="text-lg font-bold tracking-tight hover:text-brand-300"
							>
								{PHONE}
							</a>
						</li>
						<li className="flex gap-4">
							<Mail aria-hidden className="mt-0.5 size-5 shrink-0 text-brand-400" />
							<a
								href={`mailto:${EMAIL}`}
								className="break-all text-white/80 hover:text-white"
							>
								{EMAIL}
							</a>
						</li>
						<li className="flex gap-4">
							<Clock aria-hidden className="mt-0.5 size-5 shrink-0 text-brand-400" />
							<span className="text-white/80">{HOURS}</span>
						</li>
					</ul>

					<div className="rounded-xl bg-white p-5 sm:p-6">
						<h3 className="text-base font-bold text-brand-950">
							Send an enquiry
						</h3>
						<div className="mt-4">
							<ContactForm />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
