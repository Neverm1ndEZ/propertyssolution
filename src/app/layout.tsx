import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingActions from "@/components/FloatingActions";
import JsonLd from "@/components/JsonLd";
import { ADDRESS, EMAIL, PHONE, SITE_NAME, SITE_URL } from "@/lib/site";
import { AREA_LIST } from "@/lib/maps";
import { SITE } from "@/config/sites";
import { GOOGLE_PROFILE_URL } from "@/config/reviews";

const jakarta = Plus_Jakarta_Sans({
	variable: "--font-plus-jakarta",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	// The home page had no canonical at all; every other route sets its own.
	alternates: { canonical: "/" },
	title: {
		// No ` | ${SITE_NAME}` here: SITE.title is already a full ~60-char
		// title tag, and the suffix pushed it past what Google shows.
		default: SITE.title,
		template: `%s | ${SITE_NAME}`,
	},
	description: SITE.description,
	openGraph: {
		type: "website",
		siteName: SITE_NAME,
		title: `${SITE.title} | ${SITE_NAME}`,
		description: SITE.description,
		images: [
			{
				url: "/site-assets/og.jpg",
				width: 1200,
				height: 630,
				alt: "Property Solutions — plots across Greater Noida and the Yamuna Expressway",
			},
		],
	},
	robots: { index: true, follow: true },
};

export const viewport: Viewport = {
	themeColor: "#0b2a20",
	colorScheme: "light",
};

const businessJsonLd = {
	"@context": "https://schema.org",
	"@type": "RealEstateAgent",
	name: SITE_NAME,
	telephone: PHONE,
	email: EMAIL,
	address: {
		"@type": "PostalAddress",
		streetAddress: "Tradex Tower 2, Alpha 1 Commercial Belt",
		addressLocality: "Greater Noida",
		addressRegion: "Uttar Pradesh",
		postalCode: "201306",
		addressCountry: "IN",
	},
	description: ADDRESS,
	// The pin on the client's own Google Business profile (Places API), not a
	// geocode of the street line.
	geo: {
		"@type": "GeoCoordinates",
		latitude: 28.4726122,
		longitude: 77.5146872,
	},
	openingHours: "Mo-Su 09:30-20:30",
	url: SITE_URL,
	sameAs: [GOOGLE_PROFILE_URL],
	areaServed: [SITE.region, "Greater Noida", "Yamuna Expressway", "Sikandrabad"],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const areas = AREA_LIST.map(({ slug, name, count }) => ({
		slug,
		name,
		count,
	}));

	return (
		<html lang="en" className={jakarta.variable}>
			<body className="flex min-h-dvh flex-col antialiased">
				<a
					href="#main"
					className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-99 focus:rounded-full focus:bg-brand-800 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
				>
					Skip to content
				</a>
				<SiteHeader areas={areas} />
				<main id="main" className="flex-1">
					{children}
				</main>
				<SiteFooter />
				<FloatingActions />
				<JsonLd data={businessJsonLd} />
				{/* Vercel Web Analytics: page views only, no cookies, no consent banner. */}
				<Analytics />
			</body>
		</html>
	);
}
