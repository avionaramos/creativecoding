let snake; // Snake object
let food; // Food position
let resolution = 20; // Size of each grid cell
let cols; // Number of columns in the grid
let rows; // Number of rows in the grid
let score = 0; // Player's score
let gameOver = false; // Game over flag

function setup() {
    // Create the canvas and set the frame rate
    let canvas = createCanvas(400, 400);
    canvas.parent('gameContainer');
    frameRate(10);
    
    // Calculate the number of columns and rows
    cols = floor(width / resolution);
    rows = floor(height / resolution);
    
    // Initialize the snake and set the initial food location
    snake = new Snake();
    foodLocation();
}

function foodLocation() {
    // Set a random position for the food within the grid
    let x = floor(random(cols));
    let y = floor(random(rows));
    food = createVector(x, y);
}

function draw() {
    // Scale the drawing to the resolution size
    scale(resolution);
    background("#B5C18E");

    // Game loop logic
    if (!gameOver) {
        // Check if the snake eats the food
        if (snake.eat(food)) {
            foodLocation(); // Place new food
            score++; // Increment score
        }
        snake.update(); // Update snake's position
        snake.show(); // Draw the snake

        // Draw the food
        noStroke();
        fill("#CF0A0A");
        ellipse(food.x + 0.5, food.y + 0.5, 0.6, 0.6); // Smaller circle for food

        // Display the score
        fill("#803D3B");
        textSize(1);
        text(`Score: ${score}`, 1, 2);
    } else {
        // Show the game over message
        document.getElementById('gameOver').style.display = 'block';
        noLoop(); // Stop the draw loop
    }
}

function restartGame() {
    // Restart the game by reinitializing the snake, score, and gameOver flag
    snake = new Snake();
    score = 0;
    gameOver = false;
    document.getElementById('gameOver').style.display = 'none';
    loop(); // Start the draw loop again
}

function keyPressed() {
    // Change the snake's direction based on arrow key presses
    if (!gameOver) {
        if (keyCode === LEFT_ARROW) {
            snake.setDir(-1, 0);
        } else if (keyCode === RIGHT_ARROW) {
            snake.setDir(1, 0);
        } else if (keyCode === DOWN_ARROW) {
            snake.setDir(0, 1);
        } else if (keyCode === UP_ARROW) {
            snake.setDir(0, -1);
        }
    }
}

class Snake {
    constructor() {
        // Initialize the snake's body, direction, and length
        this.body = [];
        this.body[0] = createVector(floor(cols / 2), floor(rows / 2));
        this.xdir = 0;
        this.ydir = 0;
        this.len = 0;
    }

    setDir(x, y) {
        // Set the direction of the snake
        this.xdir = x;
        this.ydir = y;
    }

    update() {
        // Update the snake's position
        let head = this.body[this.body.length - 1].copy();
        this.body.shift(); // Remove the tail segment
        head.x += this.xdir;
        head.y += this.ydir;

        // Wrap around the borders
        if (head.x > cols - 1) {
            head.x = 0;
        } else if (head.x < 0) {
            head.x = cols - 1;
        } else if (head.y > rows - 1) {
            head.y = 0;
        } else if (head.y < 0) {
            head.y = rows - 1;
        }

        // Check for collision with itself
        for (let i = 0; i < this.body.length - 1; i++) {
            let part = this.body[i];
            if (head.x === part.x && head.y === part.y) {
                gameOver = true; // Set game over flag
            }
        }

        this.body.push(head); // Add the new head position
    }

    grow() {
        // Grow the snake by adding a new segment
        let head = this.body[this.body.length - 1].copy();
        this.len++;
        this.body.push(head);
    }

    eat(pos) {
        // Check if the snake's head is at the same position as the food
        let head = this.body[this.body.length - 1];
        if (head.x === pos.x && head.y === pos.y) {
            this.grow(); // Grow the snake
            return true;
        }
        return false;
    }

    show() {
        // Draw the snake
        for (let i = 0; i < this.body.length; i++) {
            fill(0);
            noStroke();
            rect(this.body[i].x, this.body[i].y, 1, 1);
        }

        // Draw eyes on the snake's head
        let head = this.body[this.body.length - 1];
        fill(255);
        let eyeSize = 0.2;
        let eyeOffset = 0.15;
        let eyeX = head.x + 0.3; // Adjusted to keep eyes within the square
        let eyeY = head.y + 0.3; // Adjusted to keep eyes within the square

        ellipse(eyeX - eyeOffset, eyeY - eyeOffset, eyeSize, eyeSize);
        ellipse(eyeX + eyeOffset, eyeY - eyeOffset, eyeSize, eyeSize);
    }
}
