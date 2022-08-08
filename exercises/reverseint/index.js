// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   const isPositive = Math.sign(n);
//   const nAsStringReversed = n.toString().split('').reverse().join('');
//   return parseInt(nAsStringReversed) * isPositive;
// }

function reverseInt(n) {
  if (n === 0) return n;
  const isPositive = Math.sign(n);
  const numReversedAsString = n.toString().split('').reverse().join('');
  const numReversed = parseInt(numReversedAsString);
  return numReversed * isPositive;
}

module.exports = reverseInt;
