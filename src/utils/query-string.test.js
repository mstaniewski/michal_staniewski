import qs from "./query-string";

describe("query-string", () => {
  it("should throw an error when wrong data passed", () => {
    const sampleQuery = 12;
    expect(() => {
      qs(sampleQuery);
    }).toThrow();
  });

  it("should create proper query string", () => {
    const sampleQuery = {
      test: "test",
      test2: "test2",
      test3: "test3"
    };

    expect(qs(sampleQuery)).toEqual("?test=test&test2=test2&test3=test3");
  });

  it("should omit empty entries", () => {
    const sampleQuery = {
      test: null,
      test2: "test2",
      test3: null
    };
    expect(qs(sampleQuery)).toEqual("?test2=test2");
  });
});
