/* eslint-disable @typescript-eslint/no-unused-vars, no-undef */
// no-multi-assign: "error"
const a = b = c = 5;
// no-multi-str: "error"
const x = "Line 1 \
         Line 2";
//  no-nested-ternary: "error"
const thing = foo ? bar : baz === qux ? quxx : foobar;
//  no-new: "error"
class Thing {
	constructor() {
		this.x = 1;
	}
	do(){ return 1}
}
new Thing();
// no-param-reassign: "error
function noReassign(bar) {
	bar = 13;
}
// no-return-assign: "error"
function doSomething() {
	return foo = bar + 2;
}
//  no-shadow: "error"
const a1 = 3;

function b() {
    const a1 = 10;
}
// no-unneeded-ternary: "error"
const unnnededTernary = x === 2 ? true : false;







// no-throw-literal: "error"
throw "error";