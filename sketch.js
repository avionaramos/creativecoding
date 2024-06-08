function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(25,30);
    
    var galaxy = { 
      locationX : random(width),
      locationY : random(height),
      size : random(1,4)
    }
    
    //stars
    push();
    fill(255);
    noStroke();
    ellipse(galaxy.locationX ,galaxy.locationY, galaxy.size, galaxy.size);
    pop();
    
    // Draw the rectangle first
    fill("#49243E");
    rect(100, 170, 210, 65);
    
    // Adjust the trapezoid to align with the top of the rectangle and extend to the right
    fill("#49243E");
    beginShape();
    vertex(120, 170); 
    vertex(300, 170); 
    vertex(260, 120); 
    vertex(160, 120); 
    endShape(CLOSE); // Close the shape
    
    //windows
    fill("#DBAFA0");
    rect(165, 180, 30, 30); 
    rect(210, 180, 30, 30); 
    rect(255, 180, 30, 30); 
    
    //car front
    fill("#DBAFA0");
    triangle(50, 170, 100, 170, 100, 235); 
    
    // Left wheels
    fill("#000000 ");
    ellipse(120, 255, 40, 40); 
    fill("#DBAFA0");
    ellipse(120, 255, 20, 20); 
  
    // Right wheels
    fill("#000000 ");
    ellipse(290, 255, 40, 40); 
    fill("#DBAFA0");
    ellipse(290, 255, 20, 20);
  }