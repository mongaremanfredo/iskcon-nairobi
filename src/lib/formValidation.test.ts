import { describe, expect, it } from "vitest";
import { isValidEmail } from "./formValidation";

describe("isValidEmail", () => {
  it("accepts ordinary addresses, ignoring surrounding spaces", () => {
    expect(isValidEmail("name@example.com")).toBe(true);
    expect(isValidEmail(" name@example.co.ke ")).toBe(true);
  });

  it("rejects obvious mistakes", () => {
    for (const value of ["", "name", "name@", "name@example", "@example.com", "na me@example.com"]) {
      expect(isValidEmail(value)).toBe(false);
    }
  });
});
