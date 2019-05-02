// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let maxChar = 0;
  let maxNum = 0;
  const mappedChars = {};
  for (const char of str) {
    mappedChars[char] = mappedChars[char]+1 || 1;
  }
  console.warn(mappedChars);
  for (char in mappedChars) {
    // console.log(char, maxChar);
    if(mappedChars[char] > maxNum) {
      maxNum = mappedChars[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
