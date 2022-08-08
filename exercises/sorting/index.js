// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// function bubbleSort(arr) {
//   arr.map((num, i) => {
//     for (let j = 0; j < (arr.length - i - 1); j++) {
//       if (arr[j] > arr[j+1]) {
//         const lesser = arr[j+1];
//         arr[j+1] = arr[j];
//         arr[j] = lesser;
//       }
//     }
//   });
//   return arr;
// }

// function selectionSort(arr) {
//   arr.map((num, i) => {
//     let   indexOfSmallest = i;
//     for (let j = i+1; j < arr.length; j++) {
//       if(arr[indexOfSmallest] > arr[j]) {
//         indexOfSmallest = j;
//       }
//     }
//     const larger = arr[i];
//     arr[i] = arr[indexOfSmallest];
//     arr[indexOfSmallest] = larger;
//   });
//   return arr;
// }

// function mergeSort(arr) {
//   if (arr.length === 1) return arr;
//   const center = Math.floor(arr.length/2);
//   const left = arr.slice(0, center);
//   const right = arr.slice(center);
//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   const arr = [];
//   while (left.length && right.length) {
//     (left[0] < right[0]) ? arr.push(left.shift()) : arr.push(right.shift());
//   }
//   return [...arr, ...left, ...right];
// }

function bubbleSort(arr) {
  const sortedArray = [];
  while (arr.length) {
    let largestItem = null;
    let indexOfLargestItem = null;
    arr.forEach((element, index) => {
      if (element > largestItem || largestItem === null) {
        largestItem = element;
        indexOfLargestItem = index;
      }
    });
    const removedElement = arr.splice(indexOfLargestItem, 1)[0];
    sortedArray.unshift(removedElement);
  }
  return sortedArray;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallestElementIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestElementIndex]) {
        smallestElementIndex = j;
      }
    }
    if (smallestElementIndex !== i) {
      const currentIndexValue = arr[i]
      arr[i] = arr[smallestElementIndex];
      arr[smallestElementIndex] = currentIndexValue;
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const midPoint = Math.floor(arr.length/2);
  const arr1 = arr.slice(0, midPoint);
  const arr2 = arr.slice(midPoint, arr.length);
  return merge(mergeSort(arr1), mergeSort(arr2))
}

function merge(arr1, arr2) {
  const result = [];
  while(arr1.length && arr2.length) {
    const smallest = arr1[0] <= arr2[0] ? arr1.shift() : arr2.shift();
    result.push(smallest);
  }
  return [
    ...result,
    ...arr1,
    ...arr2,
  ]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
