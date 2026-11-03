import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		// Card thumbnails are prebuilt webp served straight from the CDN, so the
		// optimiser only ever sees the one full-res scan on a detail page.
		formats: ["image/webp"],
		minimumCacheTTL: 60 * 60 * 24 * 365,
		qualities: [80],
	},
	// Hashed /maps and /thumbs assets never change under the same name.
	async headers() {
		return [
			{
				source: "/:dir(maps|thumbs|site-assets)/:path*",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
		];
	},
	experimental: {
		// Pull only the icons actually imported instead of the whole barrel file.
		optimizePackageImports: ["lucide-react"],
	},
};

export default nextConfig;
