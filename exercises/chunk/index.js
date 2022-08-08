// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   const chunkedArray = [];
//   while (array.length > 0) {
//     const chunk = array.splice(0, size);
//     chunkedArray.push(chunk);
//   }
//   return chunkedArray;
// }

const chunk = (array, size) => {
  if (array.length === 0) return [];
  let chunks = [];
  let numOfChunks = Math.round(array.length / size);
  while (numOfChunks !== 0) {
    const chunk = array.splice(0, size);
    chunks.push(chunk);
    numOfChunks--;
  }
  return chunks;
}

module.exports = chunk;
