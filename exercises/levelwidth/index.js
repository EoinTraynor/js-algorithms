// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// function levelWidth(root) {
//   // const arr = [root, 'level end'];
//   // const counters = [];
//   // let nodesInLevel = 0;
//   // while (arr.length > 1) {
//   //   const node = arr.shift();
//   //   if (node === 'level end') {
//   //     counters.push(nodesInLevel);
//   //     nodesInLevel = 0;
//   //     arr.push(node);
//   //   } else {
//   //     arr.push(...node.children);
//   //     nodesInLevel++;
//   //   }
//   // }
//   // counters.push(nodesInLevel);
//   // return counters;
//   const arr = [root, 's'];
//   const counters = [0];

//   while (arr.length > 1) {
//     const node = arr.shift();

//     if (node === 's') {
//       counters.push(0);
//       arr.push('s');
//     } else {
//       arr.push(...node.children);
//       counters[counters.length - 1]++;
//     }
//   }
//   return counters;
// }

function levelWidth(root) {
  const results = [];
  const stop = 's';
  let counter = 0;
  let nodes = [root, stop];

  while (nodes.length > 1) {
    const currentNode = nodes.shift();
    if (currentNode === stop) {
      results.push(counter);
      counter = 0;
      nodes.push(currentNode);
    } else {
      counter++;
      nodes.push(...currentNode.children);
    }
  }
  results.push(counter)
  return results;
}

module.exports = levelWidth;
