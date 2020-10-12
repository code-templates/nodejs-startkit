import sum from "../sum";

describe("sum", () => {
  it('should return 3 when give 1 + 2', () => {
    expect(sum(1, 2)).toBe(3);
  });
})
