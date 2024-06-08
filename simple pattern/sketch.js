function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
    noStroke();
    drawPattern();
  }
  
  function draw() {
    // Drawing logic moved to drawPattern function
  }
  
  function drawPattern() {
    background("#D6D7D3");
  
    let cols = 10;
    let rows = 10;
    let w = width / cols;
    let h = height / rows;
  
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * w + w / 2;
        let y = j * h + h / 2;
        
        let isEven = (i + j) % 2 == 0;
        let baseColor = isEven ? color(0, 105, 137) : color(232, 141, 103);
        fill(baseColor);
  
        if (isEven) {
          drawTriangleUp(x, y, w, h);
        } else {
          drawTriangleDown(x, y, w, h);
        }
      }
    }
  }
  
  function drawTriangleUp(x, y, w, h) {
    beginShape();
    vertex(x + random(-10, 10), y - h / 2 + random(-10, 10));
    vertex(x - w / 2 + random(-10, 10), y + h / 2 + random(-10, 10));
    vertex(x + w / 2 + random(-10, 10), y + h / 2 + random(-10, 10));
    endShape(CLOSE);
  }
  
  function drawTriangleDown(x, y, w, h) {
    beginShape();
    vertex(x + random(-10, 10), y + h / 2 + random(-10, 10));
    vertex(x - w / 2 + random(-10, 10), y - h / 2 + random(-10, 10));
    vertex(x + w / 2 + random(-10, 10), y - h / 2 + random(-10, 10));
    endShape(CLOSE);
  }
  
  function mousePressed() {
    drawPattern();
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    drawPattern();
  }
  