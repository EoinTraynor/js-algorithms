// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// function fizzBuzz(n) {
//   let i = 1;
//   while (i <= n) {
//     if (i % 5 === 0) {
//       if (i % 3 === 0) console.log('fizzbuzz');
//       else console.log('buzz');
//     }
//     else if (i % 3 === 0) console.log  ('fizz');
//     else console.log(i);
//     i++;
//   }
// }

const fizzBuzz = (num) => {
  if (!num) return 0;
  for (let int = 1; int <= num; int++) {
    const isDevisableByFive = int % 5 === 0;
    const isDevisableByThree = int % 3 === 0;
    if (isDevisableByFive && isDevisableByThree) {
      console.log('fizzbuzz');
    } else if (isDevisableByThree) {
      console.log('fizz');
    } else if (isDevisableByFive) {
      console.log('buzz');
    } else {
      console.log(int);
    }
  }
}

module.exports = fizzBuzz;
