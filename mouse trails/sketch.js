let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(0, 50);

  // Add a new particle at the mouse position
  particles.push(new Particle(mouseX, mouseY));

  // Update and display all particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].isFinished()) {
      particles.splice(i, 1);  // Remove the particle if it's finished
    }
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
    this.alpha = 255;
    this.size = random(20, 50);  // Larger size for bubble effect
    this.innerColor = color(random(255), random(255), random(255), 150);
    this.outerColor = color(random(255), random(255), random(255), 50);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 3;  // Fade out more slowly
  }

  isFinished() {
    return this.alpha < 0;
  }

  show() {
    noFill();
    stroke(this.outerColor.levels[0], this.outerColor.levels[1], this.outerColor.levels[2], this.alpha);
    strokeWeight(2);
    ellipse(this.x, this.y, this.size + 20);

    noStroke();
    fill(this.innerColor.levels[0], this.innerColor.levels[1], this.innerColor.levels[2], this.alpha);
    ellipse(this.x, this.y, this.size);
  }
}
