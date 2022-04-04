class Node {
  constructor(value, x, y) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.x = x;
    this.y = y;
  }

  addNode(node) {
    if (node.value < this.value) {
      if (this.left === null) {
        this.left = node;
        // posição na árvore
        this.left.x = this.x - 20;
        this.left.y = this.y + 50;
      } else {
        this.left.addNode(node);
      }
    } else if (node.value > this.value) {
      if (this.right === null) {
        this.right = node;
        // posição na árvore
        this.right.x = this.x + 20;
        this.right.y = this.y + 50;
      } else {
        this.right.addNode(node);
      }
    }
  }

  visit() {
    if (this.left !== null) {
      this.left.visit();
    }
    console.log(this.value);
    if (this.right !== null) {
      this.right.visit();
    }
  }

  search(value) {
    if (this.value === value) {
      console.log(`Elemento encontrado: ${value}`);
      return this;
    } else if (value < this.value && this.left !== null) {
      return this.left.search(value);
    } else if (value > this.value && this.right !== null) {
      return this.right.search(value);
    }
  }

  draw(parent) {
    if (this.left !== null) {
      this.left.draw(this);
    }
    // Nó
    fill(0, 180, 216);
    noStroke();
    textAlign(CENTER);
    text(this.value, this.x, this.y);

    stroke(0, 180, 216);
    noFill();
    ellipse(this.x, this.y, 30, 30);
    // Ligação entre pai e filho
    stroke(0, 180, 216);
    line(parent.x, parent.y + 10, this.x, this.y + 10);
    if (this.right !== null) {
      this.right.draw(this);
    }
  }
}
