describe("empty test", () => {
  test("empty", () => {
    expect(() => {
      console.log("empty test");
    }).not.toThrow();
  });
});
