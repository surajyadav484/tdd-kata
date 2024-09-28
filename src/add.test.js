import add from "./add";

describe("add", () => {
  test("should return 0 if no argument is passed", () => {
    expect(add()).toBe(0);
  });
  test("should return same number if only one number is passed", () => {
    expect(add("1")).toBe(1);
  });
  test("should return sum if comma separated numbers are passed", () => {
    expect(add("1,2,3")).toBe(6);
  });
  test("should return sum if '\\n' separated number is passed", () => {
    expect(add("1\n2\n3")).toBe(6);
  });
  test("should return sum if '\\n' and ',' separated number is passed", () => {
    expect(add("1\n2,3")).toBe(6);
  });
  test("should return sum if first line contains separator and next line contains values separated by provided separator", () => {
    expect(add("//;\n1;2;3")).toBe(6);
  });
  test("should throw an exception when called with single negative number", () => {
    expect(add("-1")).toBe("Negative numbers not allowed -1");
  });
  test("should throw an exception when called with all negative number", () => {
    expect(add("-1,-2,-3")).toBe("Negative numbers not allowed -1,-2,-3");
  });
  test("should throw an exception when called with combination of positive and negative number", () => {
    expect(add("-1,2,-3,-4,4,5")).toBe("Negative numbers not allowed -1,-3,-4");
  });
});
