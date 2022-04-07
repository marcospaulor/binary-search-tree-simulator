// calcula o espaço de acordo com o nível do nó
function calculateSpacing(level, spacing) {
  for (let i = 0; i < level; i++) {
    spacing /= 2;
  }
  return spacing;
}

class Node {
  constructor(value, x, y, level) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.x = x;
    this.y = y;
    this.level = level;
  }

  addNode(node) {
    node.level = this.level + 1;
    if (node.value < this.value) {
      if (this.left === null) {
        console.log(node.level);
        this.left = node;
        this.left.x = this.x - calculateSpacing(node.level, width / 2);
        this.left.y = this.y + 50;
      } else {
        this.left.addNode(node);
      }
    } else if (node.value > this.value) {
      if (this.right === null) {
        console.log(node.level);
        this.right = node;
        this.right.x = this.x + calculateSpacing(node.level, width / 2);
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
      alert(`Elemento encontrado: ${value}`);
      return this;
    } else if (value < this.value && this.left !== null) {
      return this.left.search(value);
    } else if (value > this.value && this.right !== null) {
      return this.right.search(value);
    } else{
      console.log(`Elemento não encontrado: ${value}`);
    }
  }

  draw(parent) {
    if (this.left !== null) {
      this.left.draw(this);
    }
    // nó
    noStroke();
    fill(3, 4, 94);
    ellipse(this.x, this.y, 20);
    // ligação entre o pai e o filho
    stroke(3, 4, 94);
    line(parent.x , parent.y, this.x , this.y);
    // texto do nó
    noStroke();
    fill(202, 240, 248);
    textAlign(CENTER);
    textSize(8);
    text(this.value, this.x, this.y);

    if (this.right !== null) {
      this.right.draw(this);
    }
  }
}

function minValue(current) {
  while (current.left) {
    current = current.left;
  }
  return current;
}

function removeNode(root, value) {
  let parent = null;
  let current = root;

  // seta o nó pai
  while (current != null && current.value != value) {
    parent = current;
    // verifica se o valor passado no parâmetro é menor que o filho esquerdo do nó atual
    if (value < current.value) {
      current = current.left;
    } else {
      current = current.right;
    }
  }

  // retorna a raiz caso o valor passado não exista na árvore
  if (current === null) {
    return root;
  }

  // caso 1: nó a ser deletado é nó folha
  if (current.left === null && current.right === null) {
    // verifica se o nó é a raiz
    if (current !== root) {
      if (parent.left === current) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    } else {
      root = null;
    }
    // caso 2: nó a ser deletado tem dois filhos
  } else if (current.left && current.right) {
    // nó sucessor
    let sucessor = minValue(current.right);
    let val = sucessor.value;
    removeNode(root, sucessor.value);
    // nó atual recebe o valor do sucessor
    current.value = val;
    // caso 3: nó a ser deletado tem apenas um filho
  } else {
    let child = null;
    // escolha do nó filho
    if (current.left != null) {
      child = current.left;
    } else {
      child = current.right;
    }

    // verica se o nó a ser deletado é a raiz
    if (current != root) {
      if (current === parent.left) {
        parent.left = child;
      } else {
        parent.right = child;
      }
    } else {
      root = child;
    }
  }

  return root;
}