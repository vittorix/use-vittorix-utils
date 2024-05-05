import { p, isEmpty } from "./node_modules/vittorix-utils/vittorix-utils.js";
import * as vu from "./node_modules/vittorix-utils/vittorix-utils.js";

p(1);
var d = "  ";
p(isEmpty(d));

// prettier-ignore
{
try {  p(vu.isEmpty(true));} catch (err) {vu.p(err)}
var b = 2,  s = 3;
}

const arr = ["a", b, "C", { d: "dd" }, { e: { ee: "ee" } }, s];
p(vu.isNotEmpty("q293487"));
p(arr);
console.table(arr);
