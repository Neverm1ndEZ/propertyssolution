import { PHONE, PHONE_HREF, SITE_NAME } from "@/lib/site";

/**
 * The write-up every shivaassociates.co sector page carries under the plan —
 * see /beta-i/ and /alpha-2/. Theirs runs to about 390 words in a fixed shape:
 *
 *   "<Sector> HD Map <Region>"            the plan itself
 *   "Residential Plots For Sale in …"     one line under it
 *   "Top Property Dealer in <Sector>, …"  the page's real heading
 *   "Why <us> is the #1 Choice"           five numbered points
 *   "Our Real Estate Services"            three services
 *   "Why <Sector> is Ideal for You"       location bullets
 *   "Top Property Agent in <Sector>…"     closing call to action
 *
 * Same shape here, same per-sector substitution, copy written for this client
 * rather than lifted. It is the part of the page that does the ranking work:
 * the sector name lands in an h1, five h2s and the body, which is what their
 * pages actually win on.
 */

const WHY_US = [
	{
		title: "Local market expertise",
		body: "We have dealt in this belt since 2009, so we can tell you what a plot in the sector has actually transacted at rather than what it is being asked.",
	},
	{
		title: "Verified plots only",
		body: "Every plot we put in front of you is checked against the authority layout plan — plot number, size, road width and what the land beside it is reserved for.",
	},
	{
		title: "Straight answers",
		body: "If a plot is not worth the asking price, or the paperwork is going to be a problem at registry, we say so before you commit, not after.",
	},
	{
		title: "Paperwork handled",
		body: "Title checks, transfer, mutation and the authority formalities — we walk the file through so the process does not stall on you.",
	},
	{
		title: "Investment view",
		body: "Which pockets are worth holding, which are priced on a story, and what the upcoming infrastructure actually changes for resale value.",
	},
];

const SERVICES = [
	{
		title: "Buy or sell a plot",
		body: "Residential, commercial and industrial plots, from a single plot to a full factory site, on both sides of the transaction.",
	},
	{
		title: "Rental and leasing",
		body: "Shops, warehousing and office space let on clear written terms, with the landlord and tenant both briefed properly.",
	},
	{
		title: "Investment consultation",
		body: "Where the money is sensibly placed in this belt right now, on what horizon, and what the realistic exit looks like.",
	},
];

export default function MapArticle({
	mapName,
	areaName,
}: {
	mapName: string;
	areaName: string;
}) {
	const where = `${mapName}, ${areaName}`;

	return (
		<article className="mt-10 border-t border-sand-200 pt-8">
			<h2 className="text-fluid-h2 font-extrabold text-balance text-brand-950">
				Property Dealer in {where} — {SITE_NAME}
			</h2>
			<p className="mt-3 max-w-3xl text-pretty text-brand-900/75">
				Looking for a plot in {mapName}? The layout plan above is the authority
				plan for {where} — plot numbers, plot sizes, road widths, parks and the
				facility and commercial reservations. Check the plot on it first, then
				talk to us about what is genuinely available in {mapName} and what it
				should cost. {SITE_NAME} has handled sale and purchase across{" "}
				{areaName} since 2009.
			</p>

			<section className="mt-9">
				<h3 className="text-lg font-bold text-brand-950">
					Residential plots for sale in {where}
				</h3>
				<p className="mt-2 max-w-3xl text-pretty text-brand-900/70">
					Authority plots in {mapName} come up regularly — corner plots, park
					facing, and the larger sizes on the wider roads. We also deal in 6%
					and 7% abadi plots in the villages around {areaName}, commercial
					frontage on the belts, and industrial land where the sector allows it.
					Tell us the size and budget and we will tell you what is on the market
					in {mapName} this week.
				</p>
			</section>

			<section className="mt-9">
				<h3 className="text-lg font-bold text-brand-950">
					Why {SITE_NAME} for a plot in {mapName}
				</h3>
				<ol className="mt-4 grid gap-5 sm:grid-cols-2">
					{WHY_US.map((item, i) => (
						<li key={item.title} className="flex gap-3">
							<span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-50 text-xs font-bold text-brand-700">
								{i + 1}
							</span>
							<div>
								<h4 className="font-semibold text-brand-950">{item.title}</h4>
								<p className="mt-1 text-sm leading-relaxed text-brand-900/65">
									{item.body}
								</p>
							</div>
						</li>
					))}
				</ol>
			</section>

			<section className="mt-9">
				<h3 className="text-lg font-bold text-brand-950">
					Our real estate services in {areaName}
				</h3>
				<ul className="mt-4 grid gap-5 sm:grid-cols-3">
					{SERVICES.map((s) => (
						<li key={s.title} className="card-surface p-5">
							<h4 className="font-semibold text-brand-950">{s.title}</h4>
							<p className="mt-1.5 text-sm leading-relaxed text-brand-900/65">
								{s.body}
							</p>
						</li>
					))}
				</ul>
			</section>

			<section className="mt-9">
				<h3 className="text-lg font-bold text-brand-950">
					Why {where} is worth buying into
				</h3>
				<ul className="mt-3 max-w-3xl list-disc space-y-2 pl-5 text-brand-900/70 marker:text-brand-500">
					<li>
						A planned sector with a published authority layout plan, so the plot
						number, the size and the road in front of it are all a matter of
						record before you pay anything.
					</li>
					<li>
						Connectivity through the expressway network and the metro corridor,
						with the airport belt pulling demand across {areaName}.
					</li>
					<li>
						Infrastructure still being built out around {mapName}, which is
						where the room for appreciation sits.
					</li>
					<li>
						Residential, commercial and industrial land in the same belt, so you
						can place money where the yield is rather than where the plot is.
					</li>
				</ul>
			</section>

			<section className="mt-9">
				<h3 className="text-lg font-bold text-brand-950">
					Talk to a property agent in {where}
				</h3>
				<p className="mt-2 max-w-3xl text-brand-900/70">
					Download the {mapName} layout plan above, find the plot you are
					interested in, and call us on{" "}
					<a
						href={PHONE_HREF}
						className="font-semibold text-brand-800 hover:text-brand-950"
					>
						{PHONE}
					</a>{" "}
					with the plot number. We will tell you whether it is available, what it
					is worth and what the paperwork looks like — plainly, and before you
					commit to anything.
				</p>
			</section>
		</article>
	);
}
