//here is the test for the code

//I need to import the Vitest tools (methods) from the Vitest folder in the node modules
//In our case, we don't want to use ALL the Vitest contents; we want specific elements in the Vitest folder --> destructuring {}

import { expect, test, describe } from "vitest";

// we need to import our function from app.js
//Our add function needs to be exported!
import { add, multiply } from "./app.js";

// test("test add function", function () {
//   const result = add(2, 4);
//   const expectedResult = 6;

//   expect(result).toBe(expectedResult);
// });

//=============================================

describe("Add function tests", function () {
  //here I will add multiple test() methods
  //first test
  test("test add function", function () {
    const result = add(2, 4);
    const expectedResult = 6;

    expect(result).toBe(expectedResult);
  });
  //second test
  test("test add function", function () {
    const result = add(1, 7);
    const expectedResult = 8;

    expect(result).toBe(expectedResult);
  });
});

describe("Multiply function tests", function () {
  test("multiply function test 1", function () {
    const result = multiply(2, 4);
    const expected = 8;

    expect(result).toBe(expected);
  });

  test("multiply function test 2", function () {
    const result = multiply(567, 84746);
    const expected = 48050982;

    expect(result).toBe(expected);
  });
});
