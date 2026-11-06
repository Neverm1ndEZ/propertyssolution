import ContactSection from "@/components/ContactSection";
import GoogleReviews from "@/components/GoogleReviews";
import { ADDRESS, OFFICE_MAP_EMBED, SITE_NAME } from "@/lib/site";
import { SITE } from "@/config/sites";

/**
 * The same closing run on every page, in the order the client asked for:
 * office map, testimonials, contact form, then the footer (which on the Yamuna
 * site carries the layout-plan tag index above the copyright).
 *
 * `contactForm` is off on /contact, where the page already is the contact
 * form and a second copy right above the footer would be noise.
 */
export default function PageTail({
	contactForm = true,
}: {
	contactForm?: boolean;
}) {
	return (
		<>
			<section className="bg-sand-100 py-10 sm:py-12" aria-labelledby="visit-us">
				<div className="container-page">
					<h2
						id="visit-us"
						className="text-fluid-h2 font-extrabold text-balance text-brand-950"
					>
						Visit us — we are right here in {SITE.region}
					</h2>
					<p className="mt-2 text-sm text-brand-900/65">{ADDRESS}</p>
					{/* The pin is the client's Business Profile, so the card Google
					    renders carries the listing, its rating and a link into it. */}
					<div className="card-surface mt-7 overflow-hidden">
						<iframe
							src={OFFICE_MAP_EMBED}
							title={`Google map showing ${SITE_NAME} in Greater Noida`}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="block h-[22rem] w-full border-0 sm:h-[26rem]"
						/>
					</div>
				</div>
			</section>

			<GoogleReviews />

			{contactForm && <ContactSection />}
		</>
	);
}
