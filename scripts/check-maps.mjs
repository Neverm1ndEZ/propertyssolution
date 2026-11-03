// Sanity check for map data + related-maps logic.
// Run: node --experimental-strip-types scripts/check-maps.mjs
// SITE config is resolved at module load, so each site gets its own process.
import assert from "node:assert/strict";
import fs from "node:fs";
import { AREA_LIST, getMaps, mapData, relatedMaps } from "../src/lib/maps.ts";
import { thumbUrl } from "../src/lib/map-utils.ts";
import { SITE } from "../src/config/sites.ts";

let pages = 0;
for (const area of AREA_LIST) {
	for (const map of mapData[area.key]) {
		pages++;
		// Every referenced image and thumbnail must exist on disk.
		assert.ok(
			fs.existsSync("public" + map.imageUrl),
			`${map.id}: missing image ${map.imageUrl}`,
		);
		assert.ok(
			fs.existsSync("public" + thumbUrl(map.imageUrl)),
			`${map.id}: missing thumb for ${map.imageUrl}`,
		);

		const rel = relatedMaps(area.slug, map.id);
		const want = Math.min(6, area.count - 1);
		assert.equal(rel.length, want, `${map.id}: got ${rel.length}, want ${want}`);
		assert.ok(!rel.some((r) => r.id === map.id), `${map.id} relates to itself`);
		assert.equal(
			new Set(rel.map((r) => r.id)).size,
			rel.length,
			`${map.id} duplicate related maps`,
		);
	}
	// Sequence must match the competitor's: numbered sectors first in numeric
	// order, then residential, industrial, institutional, villages, master plans.
	const names = getMaps(area.slug).map((m) => m.name);
	const SECTOR_RE = /^(PART\s+)?SECTOR[\s-]*\d/i;
	// Sectors only lead when they dominate the listing (Yamuna). On Greater
	// Noida there are a handful and they sort alphabetically under "S".
	const sectorsLead =
		names.filter((n) => SECTOR_RE.test(n)).length / names.length > 0.4;
	const rank = (n) =>
		// Abadi/village sheets first: they are village sheets even when the name
		// opens with a sector ("PART SECTOR-17 ABADI VILLAGE DHANAURI").
		/ABADI|VILLAGE|VILL\.|^\d+\s*PERCENT|GROUP HOUSING/i.test(n) ? 4
		: SECTOR_RE.test(n) ? (sectorsLead ? 0 : 1)
		// A sheet that says RESIDENTIAL is housing, whatever else is in the name.
		: /RESIDENTIAL/i.test(n) ? 1
		: /ECOTECH|UDYOG|TECH ZONE|TOY CITY|EPIP|INDUSTRIAL|SIKANDRABAD|SURAJPUR|SITE-V/i.test(n) ? 2
		: /KNOWLEDGE PARK|INSTITUTIONAL/i.test(n) ? 3
		: /ABADI|VILLAGE|VILL\.|^\d+\s*PERCENT|GROUP HOUSING/i.test(n) ? 4
		: /^MASTER PLAN/i.test(n) ? 5
		: 1;
	const ranks = names.map(rank);
	assert.deepEqual(
		ranks,
		[...ranks].sort((a, b) => a - b),
		`${area.slug}: categories are out of order`,
	);
	// Numbered sectors ascend by sector number. Only the sector bucket counts:
	// a village sheet can open with a sector too ("PART SECTOR-17 ABADI …") and
	// it sorts with the villages, well after the sector run.
	const secNums = names
		.filter((n, i) => ranks[i] === 0)
		.map((n) => Number(n.match(/SECTOR[\s-]*(\d+)/i)[1]));
	assert.deepEqual(
		secNums,
		[...secNums].sort((a, b) => a - b),
		`${area.slug}: sector numbers are out of order`,
	);
}

// Ids must be unique within an area, or routes collide.
for (const area of AREA_LIST) {
	const ids = mapData[area.key].map((m) => m.id);
	assert.equal(new Set(ids).size, ids.length, `${area.slug} has duplicate ids`);
}

assert.deepEqual(relatedMaps("no-such-area", "x"), []);
assert.equal(thumbUrl("/maps/x/A B.jpg"), "/thumbs/x/A B.webp");

console.log(
	`ok — site "${SITE.key}": ${pages} map pages across ${AREA_LIST.map((a) => `${a.slug}(${a.count})`).join(", ")}`,
);
