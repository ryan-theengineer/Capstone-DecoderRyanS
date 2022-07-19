// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;
    const myAlphabetString = "abcdefghijklmnopqrstuvwxyz";
    const myAlphabetArray = [...myAlphabetString];
    const lowercaseAlphabet = input.toLowerCase(); // sets input to lowercase alphabet
    const inputArr = [...lowercaseAlphabet];
    const codedAlphabetArr = [...alphabet];
    let result = [];
    //variables setup for both decoding and encoding

    //check for a unique value and get the length
    const checkUnique = codedAlphabetArr.filter(
      (char, idx, arr) => arr.indexOf(char) == idx
    ).length;
    //if filtered result is less than 26 return false
    if (checkUnique !== 26) return false;

    if (encode) {
      inputArr.forEach((letter) => {
        if (letter === " ") result.push(" ");
        const myAlphabetIdx = myAlphabetString.indexOf(letter);

        const codedChar = codedAlphabetArr[myAlphabetIdx];
        result.push(codedChar);
      });
      return result.join("");
      //start of decoded result
    } else {
      inputArr.forEach((letter) => {
        if (letter === " ") result.push(" ");
        const myAlph = codedAlphabetArr.indexOf(letter);
        const myAlphaChar = myAlphabetArray[myAlph];
        result.push(myAlphaChar);
      });
      return result.join("");
    }
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
