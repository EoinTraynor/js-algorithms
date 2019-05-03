// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
  if (row === n) return;
  if (level.length === n*2-1) {
    console.log(level);
    return pyramid(n, row+1);
  };
  const midpoint = Math.floor((n*2-1)/2);
  if(midpoint - row <= level.length && midpoint + row >= level.length) level += '#';
  else level += ' ';
  pyramid(n, row, level);
}

module.exports = pyramid;
