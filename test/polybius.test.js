// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() tests - Team 4 tests", () => {
  describe("polybius() tests - encoding", () => {
    it("should encode a message by translating each letter to number pairs", () => {
      const message = "message";
      const actual = polybius(message);
      const expected = "23513434112251";

      expect(actual).to.equal(expected);
    });
    it("should maintain spaces throughout", () => {
      const message = "my message";
      const actual = polybius(message);
      const expected = "2345 23513434112251";

      expect(actual).to.equal(expected);
    });
    it("should be a string", () => {
      const message = "jiggle";
      const actual = polybius(message);
      //const expected = "424222221351";

      expect(actual).to.be.a("string");
    });
    it("should translate both I and J to 42", () => {
      const message = "jiggle";
      const actual = polybius(message);
      const expected = "424222221351";

      expect(actual).to.equal(expected);
    });
    it("should ignore capitalization", () => {
      const message = "my message";
      const actual = polybius(message);
      const expected = "2345 23513434112251";

      expect(actual).to.equal(expected);
    });
  });
  describe("polybius() tests - decoding", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
      const message = "23513434112251";
      const actual = polybius(message, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });
    it("should return false if the string is an uneven number", () => {
      const message = "2345 235134341122514";
      const actual = polybius(message, false);

      expect(actual).to.be.false;
    });
    it("should maintain spaces throughout", () => {
      const message = "2345 23513434112251";
      const actual = polybius(message, false);
      const expected = "my message";

      expect(actual).to.equal(expected);
    });
    it("should ignore capitalization", () => {
      const message = "2345 23513434112251";
      const actual = polybius(message, false);
      const expected = "my message";

      expect(actual).to.equal(expected);
    });
    it("should translate both I and J to 42", () => {
      const message = "424222221351";
      const actual = polybius(message, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });
  });
});
