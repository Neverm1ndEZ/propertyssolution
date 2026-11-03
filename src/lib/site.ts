import { SITE } from "@/config/sites";

export const SITE_NAME = "Property Solutions";
export const PHONE = "+91 98180 55166";
export const PHONE_HREF = "tel:+919818055166";
export const WHATSAPP_HREF = "https://wa.me/919818055166";
export const EMAIL = "Propertysolutionsales.in@gmail.com";
export const ADDRESS =
	"Tradex Tower 2, Alpha 1 Commercial Belt, Greater Noida, Uttar Pradesh 201308";
export const HOURS = "Mon – Sun, 9:30 AM – 8:30 PM";

/** Google Maps embed for the office. `output=embed` needs no API key. */
export const OFFICE_MAP_EMBED =
	"https://www.google.com/maps?q=Tradex+Tower+2,+Alpha+1+Commercial+Belt,+Greater+Noida&output=embed";

/**
 * Canonical origin, no trailing slash. Each deployment has its own domain, so
 * this resolves from the active site config first. Vercel's own production URL
 * is the fallback for preview builds.
 */
export const SITE_URL = (
	process.env.NEXT_PUBLIC_SITE_URL ||
	(SITE.domain ? `https://${SITE.domain}` : "") ||
	(process.env.VERCEL_PROJECT_PRODUCTION_URL
		? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
		: "http://localhost:3000")
).replace(/\/$/, "");

/** The sibling site, cross-linked from the header and footer. */
export const SIBLING = {
	...SITE.sibling,
	url: `https://${SITE.sibling.domain}`,
};
