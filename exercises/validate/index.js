// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

// function validate(node, min = null, max = null) {
//     // if (max !== null && node.data > max) return false;
//     // if (min !== null && node.data < min) return false;
//     // if (node.left && !validate(node.left, min, node.data)) return false;
//     // if (node.right && !validate(node.right, node.data, max)) return false;
//     // return true;

//     // if this child doesn't exist
//     if (node === null) return true;
//     const isValueLessThanMax = (max === null || node.data < max);
//     const isValueGreaterThanMin = (min === null || node.data > min);
//     if (isValueLessThanMax && isValueGreaterThanMin) {
//       return (validate(node.left, min, node.data) && validate(node.right, node.data, max))
//     }
//     return false;
// }

function validate(node, min = null, max = null) {
  // is left less than max
  if (node === null) return true;
  const isValueLessThanMax = (max === null || node.data < max);
  const isValueGreaterThanMin = (min === null || node.data > min);
  if (isValueLessThanMax && isValueGreaterThanMin) {
    return (validate(node.left, min, node.data) && validate(node.right, node.data, max));
  };
  return false;
}

module.exports = validate;
