class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value, width / 2, 20, 0);
    if (this.root === null) {
      this.root = node;
    } else {
      this.root.addNode(node);
    }
  }

  traverse() {
    this.root.visit();
  }

  search(value) {
    return this.root.search(value);
  }

  drawTree() {
    this.root.draw(this.root);
  }
}