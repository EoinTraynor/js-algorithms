// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const cleanStringA = stringA.toLowerCase().replace(/\W/g, '');
  const cleanStringB = stringB.toLowerCase().replace(/\W/g, '');
  const mappedCharsA = generateCharMap(cleanStringA);
  const mappedCharsB = generateCharMap(cleanStringB);
  if (Object.keys(mappedCharsA).length !== Object.keys(mappedCharsB).length) return false;
  for (const char in mappedCharsA) {
    if (mappedCharsA[char] !== mappedCharsB[char]) return false;
  }
  return true;
}

function generateCharMap(string) {
  const charMap = {};
  for (const char of string) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

module.exports = anagrams;
