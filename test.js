import {
  isEmpty,
  isNotEmpty,
  randomBoolean,
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

test(isEmpty(""));
test(isEmpty(" "));
test(isNotEmpty(" a "));
