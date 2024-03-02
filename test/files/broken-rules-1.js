// prettier-ignore
// prefer-const
let foo = () => "bar";
foo();
// curly
if (foo) foo();
// no-console
console.log("error");

// no-undef
a = 10;
//no-var
var b = 10;

// default-case
switch ("foo") {
	case 1:
		foo();
		break;

	case 2:
		foo();
		break;

	// no default
}

// @typescript-eslint/no-unused-vars
function bar(val1, val2) {
	return val1;
}
bar();

// arrow-parens
const arrowParens = a => a;
arrowParens("foo");

// consistent-return
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function doSomething(condition) {
	if (condition) {
			return true;
	} else {
			return;
	}
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function doSomethingElse(condition) {
	if (condition) {
			return true;
	}
}

// default-param-last
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function f(a = 0, b) {}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function g(a, b = 0, c) { }

// eqeqeq
const x = 23;
const text = "Hello"
const obj = { getStuff: () => { } };
// eslint-disable-next-line no-empty
if (x == 42) { }
// eslint-disable-next-line no-empty
if ("" == text) { }
// eslint-disable-next-line no-empty
if (obj.getStuff() != undefined) { }

// func-style
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const expr1 = function () { };
// max-depth
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function maxDepth() {
	for (; ;) { // Nested 1 deep
		// eslint-disable-next-line no-constant-condition
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
// max params
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function maxParams (bar, baz, qux, qxx) { // four parameters, may be too many
	doSomething();
}
// complexity check
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function complexity(x) {
	// eslint-disable-next-line no-constant-condition
	if (true) {
		return x;
		// eslint-disable-next-line no-constant-condition
	} else if (false) {
			return x+1;
	} else if (2 > 3) {
		return x+2;
	} else {
			return 4; // 3rd path
	}
}
// new-cap
class person {
	constructor() {
		this.name = "John";
	}
	greet() {
		console.log(`Hello, my name is ${this.name}`);
	}
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const friend = new person();
// no-else-return
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function noElseReturn() {
	if (x) {
			return 1;
	} else {
			return 2;
	}
}
// no-eval
eval("foo")
//  no-lonely-if
// eslint-disable-next-line no-constant-condition
if (1 > 2) {
	// ...
} else {
	// eslint-disable-next-line no-constant-condition
	if (2>3) {
			// ...
	}
}
// no-loop-func
let i = 0;
while (i < 5) {
	// eslint-disable-next-line func-style
    const a = function() { return i; };
    a();
    i++;
}