import test from "ava";
import { loadESLint } from "eslint";
test("all rules snapshot", async (t) => {
	const FlatESLint = await loadESLint({ useFlatConfig: true });
	const eslint = new FlatESLint();
	const results = await eslint.lintFiles(["./test/files/*.js"]);
	const cleanedResults = results.map((result) => {
		return { ...result, filePath: result.filePath.split("eslint-config")[1] };
	})

	t.snapshot(cleanedResults);
});
