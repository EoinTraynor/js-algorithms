// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//   const wordsArr = str.split(' ');
//   const wordsArrUpper = wordsArr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
//   return wordsArrUpper.join(' ');
// }

// const capitalize = (string) => {
//   if (!string) return string;
//   const words = string.split(" ");
//   const capWordsAsArray = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
//   const capWordsAsString = capWordsAsArray.join(" ");
//   return capWordsAsString;
// }

const capitalize = (string) => {
  if (!string) return string;
  let capitalizedString = "";
  let previousChar = " ";
  for (const char of string) {
    capitalizedString += (previousChar === " ") ? char.toUpperCase() : char;
    previousChar = char;
  }
  return capitalizedString
}

module.exports = capitalize;
