let binaryTree = new BinaryTree();
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(202, 240, 248);
  // for (let i = 0; i < 10; i++) {
  //   binaryTree.insert(floor(random(0, 100)));
  // }
  binaryTree.insert(10);
  binaryTree.insert(50);
  binaryTree.insert(20);
  binaryTree.insert(100);
  binaryTree.insert(30);
  binaryTree.insert(40);
  binaryTree.insert(90);
  binaryTree.insert(80);

  binaryTree.drawTree();
  
}

function draw() {
  // Draw the tree
}

function windowResized(){
  return setup();
}