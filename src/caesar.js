// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  let caesar = (input, shift, encode = true) => {
    let lowercasedMessage = input.toLowerCase(); // input to lowercase
    let message = ""; // stores the message
    if (!shift || shift < -25 || shift > 25) return false;
    if (encode === false) {
      shift *= -1; // shift edgecase
    }

    for (let i = 0; i < lowercasedMessage.length; i++) {
      // loop through all lowercase characters
      let char = lowercasedMessage.charCodeAt(i); // charcodeat determines the characters number
      const shifted = char + shift;

      if (/[a-zA-Z]/.test(input[i])) {
        // determines if the characters are shifted and non speical characters
        if (shifted > 122) {
          message += String.fromCharCode(shifted - 26);
        } else if (shifted < 97) {
          message += String.fromCharCode(shifted + 26);
        } else {
          message += String.fromCharCode(shifted);
        }
      } else {
        message += String.fromCharCode(char);
      }
    }
    return message;
  };

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
