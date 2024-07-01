import test from "ava";

// eslint-disable-next-line @typescript-eslint/no-var-requires
import { ESLint } from "eslint";
import technologiestiftung from "../index.js";

const eslint = new ESLint({
	overrideConfigFile: true,
	baseConfig: technologiestiftung,
});
test("prefer const rule", async (t) => {
	// const FlatESLint = await loadESLint({ useFlatConfig: true });

	const code = `
		let foo = 1;
		const _b = foo;
	`;
	const result = await eslint.lintText(code);
	t.is(result.length, 1);
	t.is(result[0].errorCount, 1);
	t.is(result[0].messages[0].ruleId, "prefer-const");
});

test("curly rule", async (t) => {
	const code = `
		const foo = () => "bar";
		if (foo) foo();
	`;
	const result = await eslint.lintText(code);
	t.is(result.length, 1);
	t.is(result[0].errorCount, 1);
	t.is(result[0].messages[0].ruleId, "curly");
});

test("no-undef rule", async (t) => {
	const code = `
	a = 10;
	`;
	const result = await eslint.lintText(code);
	t.is(result.length, 1);
	t.is(result[0].errorCount, 1);
	t.is(result[0].messages[0].ruleId, "no-undef");
});

test("no-var rule", async (t) => {
	const code = `
	var _b = 10;
	`;
	const result = await eslint.lintText(code);
	t.is(result.length, 1);
	t.is(result[0].errorCount, 1);
	t.is(result[0].messages[0].ruleId, "no-var");
});

test.skip("default-case rule", async (t) => {
	//FIXME: This is not working
	const code = `
	const foo = () => "bar";
	switch ("foo") {
		case 1:
			foo();
			break;

			case 2:
				foo();
				break;

				// no default
				}
				`;
	const result = await eslint.lintText(code);

	t.is(result.length, 1);
	t.is(result[0].errorCount, 1);
	t.is(result[0].messages[0].ruleId, "default-case");
});

test("@typescript-eslint/no-unused-vars rule", async (t) => {
	const code = `
			function bar(val1, val2) {
					return val1;
			}
			bar();
	`;
	const result = await eslint.lintText(code);
	t.is(result.length, 1);
	t.is(result[0].errorCount, 1);
	t.is(result[0].messages[0].ruleId, "@typescript-eslint/no-unused-vars");
});

test("arrow-parens rule", async (t) => {
	const code = `
			const arrowParens = a => a;
			arrowParens("foo");
	`;
	const result = await eslint.lintText(code);
	t.is(result.length, 1);
	t.is(result[0].errorCount, 1);
	t.is(result[0].messages[0].ruleId, "arrow-parens");
});

test("consistent-return rule", async (t) => {
	const code = `
			function _doSomething(condition) {
					if (condition) {
							return true;
					}
					return;
			}
	`;
	const result = await eslint.lintText(code);
	console.log(result[0].messages);
	t.is(result.length, 1);
	t.is(result[0].errorCount, 1);
	t.is(result[0].messages[0].ruleId, "consistent-return");
});

test("consistent-return rule for doSomethingElse function", async (t) => {
	const code = `
			function _doSomethingElse(condition) {
					if (condition) {
							return true;
					}
			}
	`;
	const result = await eslint.lintText(code);
	t.is(result.length, 1);
	t.is(result[0].errorCount, 1);
	t.is(result[0].messages[0].ruleId, "consistent-return");
});

test("default-param-last rule", async (t) => {
	const code = `
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
			function f(a = 0, b) {}
	`;
	const result = await eslint.lintText(code);
	t.is(result.length, 1);
	t.is(result[0].errorCount, 1);
	t.is(result[0].messages[0].ruleId, "default-param-last");
});

test("default-param-last rule 2", async (t) => {
	const code = `
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
			function g(a, b = 0, c) { }
	`;
	const result = await eslint.lintText(code);
	t.is(result.length, 1);
	t.is(result[0].errorCount, 1);
	t.is(result[0].messages[0].ruleId, "default-param-last");
});

test("eqeqeq rule", async (t) => {
	const code = `
			const x = 23;
			const text = "Hello";
			const obj = { getStuff: () => { } };
			// eslint-disable-next-line no-empty
			if (x == 42) { }
			// eslint-disable-next-line no-empty
			if ("" == text) { }
			// eslint-disable-next-line no-empty
			if (obj.getStuff() != undefined) { }
	`;
	const result = await eslint.lintText(code);
	t.is(result.length, 1);
	t.is(result[0].errorCount, 3); // Assuming there are 3 eqeqeq errors
	const eqeqeqErrors = result[0].messages.filter(
		(message) => message.ruleId === "eqeqeq",
	);
	t.is(eqeqeqErrors.length, 3);
});
