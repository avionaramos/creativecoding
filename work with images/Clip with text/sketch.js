function setup() {
    createCanvas(windowWidth, windowHeight);
    background("#AF8F6F");
    
    // Define the center positions
    let centerX = width / 2;
    let centerY = height / 2;
    
    // show drawings inside of text using clip and erase functions
    // first what's behind the text:
    let cnv4 = createGraphics(width, height);
    let ctx2 = cnv4.canvas.getContext("2d");
    
    // Rectangle dimensions
    let rectWidth = 200;
    let rectHeight = 200;
    
    // Circle dimensions
    let circleDiameter = 100;
    
    // Text size
    let textSizeVal = 115;
    
    // Adjusting the positions
    let rectX = centerX - rectWidth / 2;
    let rectY = centerY - rectHeight / 2;
    let circleX = centerX;
    let circleY = centerY;
    let textX = rectX + 10; // Adjusted text position within the rectangle
    let textY = rectY + rectHeight / 2 + textSizeVal / 3; // Centered text in the rectangle
    
    // Drawing the rectangle and circle
    cnv4.rect(rectX, rectY, rectWidth, rectHeight);
    ctx2.clip();
    cnv4.fill("#D8AE7E"); // color of the circle
    cnv4.circle(circleX, circleY, circleDiameter);
    image(cnv4, 0, 0);
    
    // Drawing the text
    let cnv3 = createGraphics(width, height);
    cnv3.fill("#74512D"); // color of the rectangle
    cnv3.rect(rectX, rectY, rectWidth, rectHeight);
    cnv3.erase();
    cnv3.textSize(textSizeVal);
    cnv3.text('AVI', textX, textY); // text, x, y
    cnv3.noErase();
    image(cnv3, 0, 0);
  }
  