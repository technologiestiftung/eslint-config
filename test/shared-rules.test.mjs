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

test.skip("default-case rule (not working)", async (t) => {
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

test("func-style rule", async (t) => {
	const code = `
			const _expr1 = function () { };
	`;
	const result = await eslint.lintText(code);
	t.is(result.length, 1);
	t.is(result[0].errorCount, 1);
	t.is(result[0].messages[0].ruleId, "func-style");
});

test("max-depth rule", async (t) => {
	const code = `
			function _maxDepth() {
					for (; ;) { // Nested 1 deep
							while (true) { // Nested 2 deep
													// eslint-disable-next-line no-constant-condition
									if (true) { // Nested 3 deep
															// eslint-disable-next-line no-constant-condition
											if (true) { // Nested 4 deep
																	// eslint-disable-next-line no-constant-condition
													if (true) { // Nested 5 deep
													}
											}
									}
							}
					}
			}
	`;
	const result = await eslint.lintText(code);
	t.is(result.length, 1);
	t.is(result[0].errorCount, 1);
	t.is(result[0].messages[0].ruleId, "max-depth");
});

test("max-params rule", async (t) => {
	const code = `
			function doSomething(){return true}
			function _maxParams(_bar, _baz, _qux, _qxx) {
					doSomething();
			}
	`;
	const result = await eslint.lintText(code);
	t.is(result.length, 1);
	t.is(result[0].errorCount, 1);
	t.is(result[0].messages[0].ruleId, "max-params");
});

test.skip("complexity rule (no working)", async (t) => {
	const code = `
			/* eslint-disable no-else-return, no-constant-condition, @typescript-eslint/no-unused-vars */
	function a(x) {
    if (true) {
        return x; // 1st path
    } else if (false) {
        return x+1; // 2nd path
    } else {
        return 4; // 3rd path
    }
}

	`;
	const result = await eslint.lintText(code);
	t.is(result.length, 1);

	t.is(result[0].errorCount, 1);
	t.is(result[0].messages[0].ruleId, "complexity");
});

test("new-cap rule", async (t) => {
	const code = `
			/* eslint-disable no-undef, no-console */
			// new-cap
			class person {
					constructor() {
							this.name = "John";
					}
					greet() {
							console.log(\`Hello, my name is \${this.name}\`);
					}
			}
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const friend = new person();
	`;
	const result = await eslint.lintText(code);
	t.is(result.length, 1);
	t.is(result[0].errorCount, 1);
	t.is(result[0].messages[0].ruleId, "new-cap");
});

test("no-else-return rule", async (t) => {
	const code = `
			// no-else-return
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			function noElseReturn(x) {
					if (x) {
							return 1;
					} else {
							return 2;
					}
			}
	`;
	const result = await eslint.lintText(code);
	t.is(result.length, 1);
	t.is(result[0].errorCount, 1);
	t.is(result[0].messages[0].ruleId, "no-else-return");
});

test("no-eval rule", async (t) => {
	const code = `
			// no-eval
			eval("foo");
	`;
	const result = await eslint.lintText(code);
	t.is(result.length, 1);
	t.is(result[0].errorCount, 1);
	t.is(result[0].messages[0].ruleId, "no-eval");
});

test("no-lonely-if rule", async (t) => {
	const code = `
			// no-lonely-if
			// eslint-disable-next-line no-constant-condition
			if (1 > 2) {
					// ...
			} else {
					// eslint-disable-next-line no-constant-condition
					if (2 > 3) {
							// ...
					}
			}
	`;
	const result = await eslint.lintText(code);
	t.is(result.length, 1);
	t.is(result[0].errorCount, 1);
	t.is(result[0].messages[0].ruleId, "no-lonely-if");
});

test("no-loop-func rule", async (t) => {
	const code = `
			// no-loop-func
			let i = 0;
			while (i < 5) {
					// eslint-disable-next-line func-style
					const a = function() { return i; };
					a();
					i++;
			}
	`;
	const result = await eslint.lintText(code);
	t.is(result.length, 1);
	t.is(result[0].errorCount, 1);
	t.is(result[0].messages[0].ruleId, "no-loop-func");
});

test("no-multi-assign rule", async (t) => {
	const code = `
		/* eslint-disable no-undef, @typescript-eslint/no-unused-vars */
			// no-multi-assign: "error"
			const a = b = 5;
	`;
	const result = await eslint.lintText(code);
	t.is(result.length, 1);
	t.is(result[0].errorCount, 1);
	t.is(result[0].messages[0].ruleId, "no-multi-assign");
});

test("no-multi-str rule", async (t) => {
	const code = `
		/* eslint-disable @typescript-eslint/no-unused-vars */
			// no-multi-str: "error"
			const x = "Line 1 \\
							 Line 2";
	`;
	const result = await eslint.lintText(code);

	t.is(result.length, 1);
	t.is(result[0].errorCount, 1);
	t.is(result[0].messages[0].ruleId, "no-multi-str");
});

test("no-nested-ternary rule", async (t) => {
	const code = `
			/* eslint-disable @typescript-eslint/no-unused-vars, no-undef */
			// no-nested-ternary: "error"
			const thing = foo ? bar : baz === qux ? quxx : foobar;
	`;
	const result = await eslint.lintText(code);
	t.is(result.length, 1);
	t.is(result[0].errorCount, 1);
	t.is(result[0].messages[0].ruleId, "no-nested-ternary");
});

test("no-new rule", async (t) => {
	const code = `
			// no-new: "error"
			class Thing {
					constructor() {
							this.x = 1;
					}
					do(){ return 1}
			}
			new Thing();
	`;
	const result = await eslint.lintText(code);
	t.is(result.length, 1);
	t.is(result[0].errorCount, 1);
	t.is(result[0].messages[0].ruleId, "no-new");
});

test("no-param-reassign rule", async (t) => {
	const code = `
				/* eslint-disable @typescript-eslint/no-unused-vars */
			// no-param-reassign: "error"
			function _noReassign(bar) {
					bar = 13;
			}
	`;
	const result = await eslint.lintText(code);
	t.is(result.length, 1);

	t.is(result[0].errorCount, 1);
	t.is(result[0].messages[0].ruleId, "no-param-reassign");
});

test("no-return-assign rule", async (t) => {
	const code = `
				/* eslint-disable @typescript-eslint/no-unused-vars, no-undef */

	// no-return-assign: "error"
			function doSomething() {
					return foo = bar + 2;
			}
	`;
	const result = await eslint.lintText(code);
	t.is(result.length, 1);
	t.is(result[0].errorCount, 1);
	t.is(result[0].messages[0].ruleId, "no-return-assign");
});

test("no-shadow rule", async (t) => {
	const code = `
			// no-shadow: "error"
			const _a1 = 3;

			function _b() {
					const _a1 = 10;
			}
	`;
	const result = await eslint.lintText(code);
	t.is(result.length, 1);
	t.is(result[0].errorCount, 1);
	t.is(result[0].messages[0].ruleId, "no-shadow");
});

test("no-unneeded-ternary rule", async (t) => {
	const code = `
				/* eslint-disable no-undef */

			// no-unneeded-ternary: "error"
			const _unnnededTernary = x === 2 ? true : false;
	`;
	const result = await eslint.lintText(code);
	t.is(result.length, 1);
	t.is(result[0].errorCount, 1);
	t.is(result[0].messages[0].ruleId, "no-unneeded-ternary");
});
