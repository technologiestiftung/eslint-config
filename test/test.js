import test from "ava";
import { loadESLint } from "eslint";
test("all rules snapshot", async (t) => {
	const FlatESLint = await loadESLint({ useFlatConfig: true });
	const eslint = new FlatESLint();
	const results = await eslint.lintFiles(["./test/files/*.js"]);
	t.snapshot(results);
});
