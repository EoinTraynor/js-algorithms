// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

// class Node {
//   constructor(data, left = null, right = null) {
//     this.data = data;
//     this.left = left;
//     this.right = right;
//   }
//   insert(data) {
//     if (data < this.data) {
//       this.left ? this.left.insert(data) : this.left = new Node(data);
//     }
//     if (data > this.data) {
//       this.right ? this.right.insert(data) : this.right = new Node(data);
//     }
//   }
//   contains(data) {
//     if (data === this.data) return this;
//     if (data < this.data) {
//       return this.left ? this.left.contains(data) : null
//     }
//     if (data > this.data) {
//       return this.right ? this.right.contains(data) : null
//     }
//     return null;
//   }
// }

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  insert(data) {
    // check left node
    if (this.data > data) {
      if (this.left === null) this.left = new Node(data);
      else this.left.insert(data);
    }
    // check right node
    if (this.data < data) {
      if (this.right === null) this.right = new Node(data);
      else this.right.insert(data);
    }
  }
  contains(data) {
    if (data === this.data) return this;
    if (data > this.data && this.right) return this.right.contains(data);
    if (data < this.data && this.left) return this.left.contains(data);
    return null;
  }
}

module.exports = Node;
