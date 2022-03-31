function setup(){
    // create a canvas black with a text white on the center
    createCanvas(windowWidth, windowHeight);
    background(0);
    fill(255);
    textSize(32);
    textAlign(CENTER);
    text("Click to draw", width/2, height/2);
}

function draw(){
    // draw a circle when mouse is pressed and random color
    if(mouseIsPressed){
        fill(random(255), random(255), random(255));
        circle(mouseX, mouseY, random(100), random(100));
    }

}