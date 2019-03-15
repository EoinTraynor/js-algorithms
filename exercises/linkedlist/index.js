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
}

module.exports = { Node, LinkedList };
 