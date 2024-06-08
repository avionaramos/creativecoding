let genres = ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Romance", "Sci-Fi", "Thriller", "Mystery", "Documentary", "Animation", "Musical"];
    let values = [75, 25, 87.5, 87.5, 50, 50, 75, 50, 75, 50, 37.5, 37.5, 50];
    let barColors = [];

    function setup() {
      createCanvas(windowWidth, windowHeight);
      background('#F1E5D1');
      generatePastelColors();
      drawBarChart();
    }

    function generatePastelColors() {
      for (let i = 0; i < genres.length; i++) {
        let r = random(100, 200);
        let g = random(100, 255);
        let b = random(100, 255);
        barColors.push(color(r, g, b));
      }
    }

    function drawBarChart() {
      let barWidth = (width - 100) / genres.length - 10; // Increased bar width
      let startX = 50;
      let startY = height - 10;
      let cornerRadius = 10; // Rounded corners

      // Draw title
      fill(0);
      textAlign(CENTER, CENTER);
      textSize(32);
      text("Favorite Movie Genre", width / 2, 50);

      // Draw bars
      for (let i = 0; i < genres.length; i++) {
        let barHeight = map(values[i], 0, 100, 0, height - 90);
        
        // Draw shadow
        fill(200);
        stroke(1);
        rect(startX + i * (barWidth + 10) + 5, startY - barHeight + 1, barWidth, barHeight, cornerRadius);

        // Draw bar
        noStroke();
        fill(barColors[i]);
        rect(startX + i * (barWidth + 10), startY - barHeight, barWidth, barHeight, cornerRadius);

        // Draw value labels
        textSize(12);
        textAlign(CENTER);
        fill(0);
        text(values[i] + "%", startX + i * (barWidth + 10) + barWidth / 2, startY - barHeight - 10);
      }
    }