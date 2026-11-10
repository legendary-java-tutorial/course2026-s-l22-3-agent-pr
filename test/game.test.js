import assert from "node:assert";
import g from "../docs/game.json" with { type: "json" };
assert.ok(g.min < g.max);
const best = (a, b) => Math.min(a, b);
assert.equal(best(5, 3), 3);
