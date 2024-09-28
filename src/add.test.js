import add from "./add";

describe("add", () => {
  test("should return 0 if no argument is passed", () => {
    expect(add()).toBe(0);
  });
});
