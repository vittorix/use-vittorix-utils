import {
  test,
  assertErr
} from "./node_modules/vittorix-utils/vittorix-utils.js";

assertErr("", "Test condition empty.");
assertErr(false, "Test condition false.");
assertErr(undefined, "Test condition undefined.");
test(" ");
test(true);
test(1);
