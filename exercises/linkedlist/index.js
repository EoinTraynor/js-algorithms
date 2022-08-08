// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

// class Node {
//   constructor(data, nextNode = null) {
//     this.data = data;
//     this.next = nextNode;
//   }
// }

class Node {
  constructor(data, nextNode = null) {
    this.data = data;
    this.next = nextNode;
  }
}

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }
//   insertFirst(data) {
//     const existingNode = this.head || null;
//     this.head = new Node(data, existingNode);
//   }
//   size() {
//     let counter = 0;
//     let currentNode = this.head;
//     while (currentNode) {
//       counter++;
//       currentNode = currentNode.next;
//     }
//     return counter;
//   }
//   getFirst() {
//     return this.head;
//   }
//   getLast() {
//     let currentNode = this.head;
//     if (!currentNode) return null;
//     while (currentNode.next) {
//       currentNode = currentNode.next;
//     }
//     return currentNode;
//   }
//   clear() {
//     this.head = null;
//   }
//   removeFirst() {
//     this.head = this.head.next || null;
//   }
//   removeLast() {
//     let currentNode = this.head;
//     let previousNode = null;
//     if (!currentNode) return;
//     if (!currentNode.next) {
//       this.head = null;
//       return
//     };
//     while (currentNode.next) {
//       previousNode = currentNode;
//       currentNode = currentNode.next;
//     }
//     previousNode.next = null;
//   }
//   insertLast(data) {
//     const newNode = new Node(data);

//     if (!this.head) this.head = newNode;

//     const lastNode = this.getLast();
//     lastNode.next = newNode;
//   }
//   getAt(n) {
//     let count = 0;
//     let node = this.head;
//     while (node) {
//       if (count === n) return node;
//       node = node.next;
//       count++;
//     }
//     return null;
//   }
// }

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  getFirst() {
    return this.getAt(0);
  }
  getLast() {
    if (this.head === null) return null;
    let node = this.head;
    while (node.next) {
      node = node.next
    }
    return node;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if(this.head === null) return;
    const firstNode = this.head;
    this.head = firstNode.next;
  }
  removeLast() {
    if(this.head === null) return;
    if(this.head.next === null) {
      this.head = null;
      return;
    }
    let node = this.head;
    let previous = null;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }
  insertLast(data) {
    const node = new Node(data, null);
    const lastNode = this.getLast();
    (lastNode === null) ? this.insertFirst(data) : lastNode.next = node;
  }
  getAt(n) {
    let count = 0;
    let node = this.head;
    while (node) {
      if (count === n) return node;
      node = node.next;
      count++;
    }
    return null;
  }
  removeAt(index) {
    if (!this.size()) return;
    if (index === 0) {
      this.removeFirst();
      return;
    }
    const previousNode = this.getAt(index - 1);
    const targetNode = previousNode.next;

    if (!targetNode) return;
    previousNode.next = targetNode.next || null;
  }
  insertAt(data, index) {
    const newNode = new Node(data, null);
    if (!this.head) {
      this.head = newNode
      return;
    };
    if (index === 0) {
      const existingNode = this.head;
      newNode.next = existingNode;
      this.head = newNode;
      return;
    }
    const previousNode = this.getAt(index - 1) || this.getLast();
    const nextNode = previousNode.next;

    newNode.next = nextNode;
    previousNode.next = newNode;
  }
  forEach(func) {
    if (!this.head) return;
    let index = 0;
    let node = this.head;
    while (node) {
      func(node, index);
      index++;
      node = node.next;
    }
  }
  // removeAt(n) {
  //   // handle no nodes
  //   if (this.head === null) return null;
  //   // removal of first node
  //   if (n === 0) {
  //     // no subsequent node
  //     if (this.head.next === null) this.head = null;
  //     // subsequent node
  //     else this.head = this.head.next;
  //     return;
  //   }
  //   let previousNode = null;
  //   let currentNode = this.head;
  //   let count = 0;
  //   while (currentNode) {
  //     if (count === n) {
  //       previousNode.next = currentNode.next;
  //       return;
  //     }
  //     previousNode = currentNode;
  //     currentNode = currentNode.next;
  //     count++;
  //   }
  // }
  // insertAt(data, index) {
  //   const newNode = new Node(data);
  //   if (this.head === null) {
  //     this.head = newNode;
  //     return;
  //   }
  //   if (index === 0) {
  //     this.insertFirst(data);
  //     return;
  //   }
  //   if (index > this.size()) {
  //     this.insertLast(data);
  //     return;
  //   }
  //   const currentIndexNode = this.getAt(index);
  //   const previousIndexNode = this.getAt(index -1);
  //   previousIndexNode.next = newNode;
  //   newNode.next = currentIndexNode;
  // }
  // forEach(func) {
  //   if (this.head === null) return null;
  //   let currentNode = this.head;
  //   while (currentNode) {
  //     func(currentNode);
  //     currentNode = currentNode.next;
  //   }
  // }
  // *[Symbol.iterator]() {
  //   let node = this.head;
  //   while (node) {
  //     yield node;
  //     node = node.next;
  //   }
  // }
}

module.exports = { Node, LinkedList };
