// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, nextNode = null) {
    this.data = data;
    this.next = nextNode;
  }
}

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
    return this.head;
  }
}

module.exports = { Node, LinkedList };
 