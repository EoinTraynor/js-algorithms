// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

// class Node {
//   constructor(data, children = []) {
//     this.data = data;
//     this.children = children;
//   }
//   add(data) {
//     const node = new Node(data);
//     this.children.push(node);
//   }
//   remove(data) {
//     this.children = this.children.filter(node => node.data !== data);
//   }
// }

// class Tree {
//   constructor() {
//     this.root = null;
//   }
//   traverseBF(func) {
//     let arr = [this.root];
//     while (arr.length) {
//       const node = arr.shift();
//       arr = [
//         ...arr,
//         ...node.children
//       ];
//       func(node);
//     }
//   }
//   traverseDF(func) {
//     let node = this.root;
//     let arr = [node];
//     while (arr.length) {
//       node = arr.shift();
//       arr = [
//         ...node.children,
//         ...arr,
//       ]
//       func(node);
//     }
//   }
// }

class Node {
  constructor(data, children = []) {
    this.data = data;
    this.children = children;
  }
  add(data) {
    const newNode = new Node(data);
    this.children.push(newNode);
  }
  remove(data) {
    const filteredNodes = this.children.filter(node => node.data !== data)
    this.children = filteredNodes;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  traverseBF(func) {
    if (!this.root) return;
    let nodes = [this.root];
    while (nodes.length) {
      const currentNode = nodes.shift();
      func(currentNode);
      if (currentNode.children && currentNode.children.length) nodes.push(...currentNode.children);
    }
  }
  traverseDF(func) {
    if (!this.root) return;
    let nodes = [this.root];
    while (nodes.length) {
      const currentNode = nodes.shift();
      const { children = [] } = currentNode;
      nodes.unshift(...children);
      func(currentNode)
    }
  }
}

module.exports = { Tree, Node };
