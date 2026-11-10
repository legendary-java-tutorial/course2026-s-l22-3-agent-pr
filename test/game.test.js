import assert from "node:assert";
import g from "../docs/game.json" with { type: "json" };
assert.ok(g.min < g.max);
