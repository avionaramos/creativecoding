let img;
function preload(){
  img=loadImage('nature.jpg')

}

function setup() {
  createCanvas(700, 700);
  background(200, 225, 100);
  img.resize(200,200);
  let cnv7 = createGraphics(200,200);
  cnv7.ellipse(100,100,190);
  cnv7.canvas.getContext("2d").clip();
  cnv7.image(img,0,0);
  image(cnv7,350,225);
  img.resize(200,200);
  let cnv5 = createGraphics(200,200);
  cnv5.triangle(0,0,100,200,200,0);
  img.mask(cnv5);
  image(img,350,450);
}