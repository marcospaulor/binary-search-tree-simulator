let binaryTree = new BinaryTree();

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(202, 240, 248);
  for (let i = 0; i < 30; i++) {
    binaryTree.insert(floor(random(0, 100)));
  }
  binaryTree.drawTree();
}

function draw() {}
