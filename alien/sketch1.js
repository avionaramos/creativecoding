function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
   
    background(25,25);
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
    
    
    
    //Draw a circle
    fill ("#AADA3B");
    ellipse (200, 300, 250, 100);
    
    //Draw a circle
    fill (200);
    ellipse (200, 300, 215, 80);
    
    
    // Draw the hands
    push();
    translate(200, 250);
    fill(50, 205, 50); // color for hands
    ellipse(-70, 20, 30, 50); // Left hand
    ellipse(70, 20, 30, 50); // Right hand
    pop();
    
    // Draw the head
    fill("#AADA3B");
    ellipse(200, 195, 200);
    
   // Draw the center Eye
   noFill();
   arc(200, 130, 35, 20, PI, TWO_PI);
    
    fill(255);
    ellipse(200, 170, 55, 70);
    
    // Draw the center Eye
    fill("#1D270E");
    ellipse(200, 170, 20, 40);
    
  
   // Draw the Antennae
    stroke("#AADA3B");
    strokeWeight(4);
    line(140, 130, 145, 80);  // Adjusted line
    line(175, 130, 145, 80);  // Adjusted line
    
  // Draw the Antennae
    stroke("#AADA3B");
    strokeWeight(4);
    line(215, 120, 250, 80);  // Adjusted line
    line(250, 120, 250, 80);  // Adjusted line
    
    //Draw the teeth
    
    fill(222,184,135);
    stroke(0);
    strokeWeight(1);
    arc(200, 273.5, 25, 30, PI, TWO_PI);
    
    fill(255);
    stroke(0);
    strokeWeight(1);
    arc(190, 245.5, 10, 18, 0, PI);
    
    fill(255);
    stroke(0);
    strokeWeight(1);
    arc(180, 242.9, 10, 18, 0, PI);
    
    fill(255);
    stroke(0);
    strokeWeight(1);
    arc(200, 245, 10, 18, 0, PI);
    
    fill(255);
    stroke(0);
    strokeWeight(1);
    arc(210, 245, 10, 18, 0, PI);
    
    fill(255);
    stroke(0);
    strokeWeight(1);
    arc(220, 242.9, 10, 18, 0, PI);
    
    // Draw the Mouth
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(200, 230, 75, 30, 0, PI);
    
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(200, 230, 75, 90, 0, PI); 
  }