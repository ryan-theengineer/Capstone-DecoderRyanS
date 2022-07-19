// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar tests - Team 4 tests", () => {
  describe("function caesar() - error handling", () => {
    it("should return false if the shift value is 0, or not present", () => {
      const shift = 0;
      const input = "hello world";
      expect(caesar(input, shift, (encode = true))).to.be.false;
    });
    it("should return false if the shift value is less than -26", () => {
      const shift = -26;
      const input = "hello world";
      expect(caesar(input, shift, (encode = true))).to.be.false;
    });
    it("should return false if the shift value is greater than 26", () => {
      const shift = 26;
      const input = "hello world";
      expect(caesar(input, shift, (encode = true))).to.be.false;
    });
  });

  describe("function caesar() - encoding ", () => {
    it("should maintain spaces throughout", () => {
      const shift = 2;
      const input = "team four";
      const expected = "vgco hqwt";
      const actual = caesar(input, shift, (encode = true));
      expect(actual).to.equal(expected);
    });
    it("should maintain non-alphanumeric characters throughout", () => {
      const shift = 2;
      const input = "team four!";
      const expected = "vgco hqwt!";
      const actual = caesar(input, shift, (encode = true));
      expect(actual).to.equal(expected);
    });
    it("should ignore capitalization", () => {
      const shift = 2;
      const input = "team four!";
      const expected = "vgco hqwt!";
      const actual = caesar(input, shift, (encode = true));
      expect(actual).to.equal(expected);
    });
    it("should handle shifts that go off alphabet by looping around", () => {
      const shift = 2;
      const input = "zebra";
      const expected = "bgdtc";
      const actual = caesar(input, shift, (encode = true));
      expect(actual).to.equal(expected);
    });
    it("should handle a shift to the left", () => {
      const shift = -2;
      const input = "team four";
      const expected = "rcyk dmsp";
      const actual = caesar(input, shift, (encode = true));
      expect(actual).to.equal(expected);
    });
  });

  describe("function caesar() - decoding ", () => {
    it("should maintain spaces throughout", () => {
      const shift = 2;
      const expected = "team four";
      const input = "vgco hqwt";
      const actual = caesar(input, shift, (encode = false));
      expect(actual).to.equal(expected);
    });
    it("should maintain non-alphanumeric characters throughout", () => {
      const shift = 2;
      const expected = "team four!";
      const input = "vgco hqwt!";
      const actual = caesar(input, shift, (encode = false));
      expect(actual).to.equal(expected);
    });
    it("should ignore capitalization", () => {
      const shift = 2;
      const expected = "team four";
      const input = "Vgco Hqwt";
      const actual = caesar(input, shift, (encode = false));
      expect(actual).to.equal(expected);
    });
    it("should handle shifts that go off alphabet by looping around", () => {
      const shift = 2;
      const expected = "zebra";
      const input = "bgdtc";
      const actual = caesar(input, shift, (encode = false));
      expect(actual).to.equal(expected);
    });
    it("should handle a shift to the left", () => {
      const shift = -2;
      const expected = "team four";
      const input = "rcyk dmsp";
      const actual = caesar(input, shift, (encode = false));
      expect(actual).to.equal(expected);
    });
  });
});
