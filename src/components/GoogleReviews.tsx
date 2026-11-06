import { ExternalLink, Star } from "lucide-react";
import {
	GOOGLE_PROFILE_URL,
	GOOGLE_RATING,
	GOOGLE_REVIEW_COUNT,
	TESTIMONIALS,
} from "@/config/reviews";
import { SITE_NAME } from "@/lib/site";

/**
 * The Google reviews band the client asked for, pointing at his own Business
 * Profile. Deliberately not a live feed: pulling reviews needs the Places API
 * and a billing account, so the rating, the count and the quotes all come from
 * config/reviews.ts and the section degrades to just the two buttons when they
 * are empty. Nothing here claims a score the profile does not show.
 */
export default function GoogleReviews() {
	const hasScore = GOOGLE_RATING != null && GOOGLE_REVIEW_COUNT != null;

	return (
		<section
			className="bg-sand-100 py-10 sm:py-12"
			aria-labelledby="google-reviews"
		>
			<div className="container-page text-center">
				<p className="text-xs font-semibold tracking-widest text-brand-600 uppercase">
					Testimonials
				</p>
				<h2
					id="google-reviews"
					className="text-fluid-h2 mt-2 font-extrabold text-balance text-brand-950"
				>
					What our clients say about {SITE_NAME}
				</h2>

				{hasScore && (
					<p className="mt-3 flex flex-wrap items-center justify-center gap-2 text-brand-900/70">
						<span
							aria-hidden
							className="inline-flex items-center gap-0.5 text-brand-600"
						>
							{Array.from({ length: 5 }, (_, i) => (
								<Star key={i} className="size-4 fill-current" />
							))}
						</span>
						<span>
							Google rating{" "}
							<strong className="font-bold text-brand-950">
								{GOOGLE_RATING} of 5
							</strong>
							, based on {GOOGLE_REVIEW_COUNT} reviews
						</span>
					</p>
				)}

				{TESTIMONIALS.length > 0 && (
					<ul className="mt-8 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
						{TESTIMONIALS.map((t) => (
							<li key={`${t.name}-${t.when}`} className="card-surface p-5">
								<div className="flex items-start justify-between gap-3">
									<div>
										<p className="font-bold text-brand-950">{t.name}</p>
										<p className="text-xs text-brand-900/50">{t.when}</p>
									</div>
									<span
										aria-hidden
										className="inline-flex gap-0.5 text-brand-600"
									>
										{Array.from({ length: 5 }, (_, i) => (
											<Star key={i} className="size-3.5 fill-current" />
										))}
									</span>
								</div>
								<p className="mt-3 text-sm leading-relaxed text-brand-900/70">
									{t.text}
								</p>
							</li>
						))}
					</ul>
				)}

				<div className="mt-8 flex flex-wrap justify-center gap-3">
					<a
						href={GOOGLE_PROFILE_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-brand-800"
					>
						Read our reviews on Google
						<ExternalLink aria-hidden className="size-4" />
					</a>
					<a
						href={GOOGLE_PROFILE_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-full border border-sand-300 bg-white px-6 py-3 text-sm font-semibold text-brand-800 transition-colors hover:bg-sand-100"
					>
						<Star aria-hidden className="size-4" />
						Rate us on Google
					</a>
				</div>
			</div>
		</section>
	);
}
