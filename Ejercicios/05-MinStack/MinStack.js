class Node {
  // Your code here:
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    this.top = null;
  }

  push(value) {
    if (!this.top) {
      this.top = new Node(value);
    } else {
      const oldTop = this.top;
      this.top = new Node(value);
      this.top.next = oldTop;
      return this.top && this.top.value;
    }
  }

  pop() {
    if (!this.top) {
      return "The stack is now empty.";
    } else {
      const newTop = this.top.next;
      const oldTop = this.top;
      this.top = newTop;
      return oldTop && oldTop.value;
    }
  }

  peek() {
    if (!this.top) {
      return "The stack is empty.";
    } else {
      return this.top && this.top.value;
    }
  }
}

class MinStack extends Stack {
  // Your code here:
  constructor(value) {
    super();
    this.minimum = new Stack();
  }

  push(value) {
    if (!this.top) {
      this.top = new Node(value);
      this.minimum.push(value);
      return this.top && this.top.value;
    } else {
      const oldTop = this.top;
      this.top = new Node(value);
      this.top.next = oldTop;
      if (this.minimum.peek() < this.top.value) {
        this.minimum.push(this.minimum.peek());
      } else {
        this.minimum.push(value);
      }
      return this.top && this.top.value;
    }
  }

  pop() {
    if (!this.top) {
      return "The stack is empty.";
    } else {
      const newTop = this.top.next;
      const oldTop = this.top;
      this.top = newTop;
      this.minimum.pop();
      return oldTop && oldTop.value;
    }
  }

  peek() {
    if (!this.top) {
      return "The stack is empty.";
    } else {
      return this.top && this.top.value;
    }
  }

  min() {
    if (!this.top) {
      return "The stack is empty.";
    } else {
      return this.minimum.peek();
    }
  }
}

module.exports = {
  Node,
  MinStack,
};
