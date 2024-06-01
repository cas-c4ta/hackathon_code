/*
// Als Ausgangspunkt schlagen wir eine Kreatur-Klasse mit
// einigen Methoden vor. Wenn du es anders machen möchtest,
// kannst du es auch komplett anders machen.
// 
// Wenn du Fragen zum Code hast, helfen dir Vera und Josef. 
*/

let kreatur;

function setup() {
  createCanvas(800, 800);
  // kreatur = new Kreatur(width/2, height/2, 50);
  kreatur = useCreature({x: width/2, y: height/2, size: 50});
}

function draw() {
  background(220);
  kreatur.display();
}

function mousePressed() {
  kreatur.move();
}
