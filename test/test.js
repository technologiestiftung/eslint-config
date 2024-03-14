import test from "ava";
import { loadESLint } from "eslint";

test("all rules snapshot", async (t) => {
	const FlatESLint = await loadESLint({ useFlatConfig: true });
	const eslint = new FlatESLint();
	const results = await eslint.lintFiles(["./test/files/*.js"]);
	const cleanedResults = results.map((result) => {
		// we need to alter the result to match
		// the paths on ci since local tests
		// create paths on the local fs
		// which is different from the ci fs because
		return {
			...result,
			filePath: result.filePath.split("eslint-config/test")[1],
		};
	});

	t.snapshot(cleanedResults);
});
