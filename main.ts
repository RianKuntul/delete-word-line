// The Word You'd Delete From the Dictionary.
// Entry (v2): "irregardless" — a double negative that bluffed its way into
// the dictionary, even though "regardless" already does the whole job.
// Delete it and nothing is lost, which is exactly the joke: the dictionary
// would not even notice. One word, no explanation, per the judge's brief.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "irregardless";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
