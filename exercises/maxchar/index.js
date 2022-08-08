// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   let maxChar = 0;
//   let maxNum = 0;
//   const mappedChars = {};
//   for (const char of str) {
//     mappedChars[char] = mappedChars[char]+1 || 1;
//   }
//   for (char in mappedChars) {
//     // console.log(char, maxChar);
//     if(mappedChars[char] > maxNum) {
//       maxNum = mappedChars[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;
// }

const maxChar = (string) => {
  if (!string) return 0;
  const mappedChars = {};
  let largestChar = null;
  let largestCharCount = 0;
  for (const char of string) {
    mappedChars[char] = mappedChars[char] + 1 || 1;
  }
  console.log(mappedChars);
  for (const char in mappedChars) {
    if (mappedChars[char] > largestCharCount) {
      largestChar = char;
      largestCharCount = mappedChars[char];
    }
  }
  return largestChar;
};

module.exports = maxChar;
