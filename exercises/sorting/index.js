// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  arr.map((num, i) => {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j+1]) {
        const lesser = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    }
  });
  return arr;
}

function selectionSort(arr) {
  arr.map((num, i) => {
    let   indexOfSmallest = i;
    for (let j = i+1; j < arr.length; j++) {      
      if(arr[indexOfSmallest] > arr[j]) {
        indexOfSmallest = j;
      }
    }
    const larger = arr[i];
    arr[i] = arr[indexOfSmallest];
    arr[indexOfSmallest] = larger;    
  });
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const center = Math.floor(arr.length/2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const arr = [];
  while (left.length && right.length) {
    (left[0] < right[0]) ? arr.push(left.shift()) : arr.push(right.shift());
  }
  return [...arr, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
