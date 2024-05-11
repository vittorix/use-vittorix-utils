import {
  isEmpty,
  isNotEmpty,
  isString,
  makeArr,
  pa,
  parse,
  randomBoolean,
  stringy,
  test,
  testNot
} from "./node_modules/vittorix-utils/vittorix-utils.js";

testNot(undefined, "Test not undefined.");
testNot(null, "Test not null.");
testNot("", "Test not empty string.");
testNot(false, "Test not false.");

test(" ");
test(true);
test(1);
test(1 > 0);

const randomBool = randomBoolean();
test(randomBool === true || randomBool === false);

test(isEmpty(undefined));
test(isEmpty(null));
test(isEmpty(""));
test(isEmpty(" "));
test(isNotEmpty(" a "));
test(isNotEmpty("1"));
test(isNotEmpty("false"));
test(isString("false"));
test(isString(""));
test(!isString(undefined));
test(!isString(null));
test(!isString(true));
test(!isString([]));
test(!isString(["a"]));
test(!isString({}));
test(!isString({ a: 1 }));

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Smartphone", price: 700 },
  { name: "Tablet", price: 450 },
  { name: "Headphones", price: 150 },
  { name: "Smartwatch", price: 300 },
  { description: "product test array" },
  "ciao"
];

const productsCopy = makeArr(products);
test(productsCopy != undefined);

// test that the conversions make same stringy and different objects
test(stringy(products) === stringy(productsCopy));
test(parse(stringy(products)) !== parse(stringy(productsCopy)));
test(
  stringy(parse(stringy(products))) === stringy(parse(stringy(productsCopy)))
);

products[1].price = 123;
productsCopy[2].price = 456;
// pa(products, "products");
// pa(productsCopy, "productsCopy");
// make sure that they are 2 different arrays and changes in the objects of one do not change the objects of the other
test(products[2].price === 450);
test(productsCopy[1].price === 700);
test(stringy(products[0]) === stringy(productsCopy[0]));
test(stringy(products) !== stringy(productsCopy));

// arrays have changed, so test they make different stringy
test(
  stringy(parse(stringy(products))) !== stringy(parse(stringy(productsCopy)))
);
