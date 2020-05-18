export const terrainGenerator = (p) => {
  let x = 100;
  let y = 100;

  // p.drawBackground = () => {
  //   p.background(200);
  // };
  // p.setupPosition = () => {
  //   x = p.windowWidth / 2;
  //   y = p.windowHeight / 2;
  // };
  // p.windowResized = () => {
  //   p.resizeCanvas(p.windowWidth, p.windowHeight);
  //   p.drawBackground();
  //   p.setupPosition();
  // };
  const w = 600;
  const h = 600;
  const scale = 20;
  const cols = w / scale;
  const rows = h / scale;

  let terrain: number[][];

  terrain = new Array(rows);
  for (var i = 0; i < terrain.length; i++) {
    terrain[i] = new Array(cols);
  }

  p.setup = () => {
    p.createCanvas(600, 600, p.WEBGL);
    // p.drawBackground();
    // p.setupPosition();
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        console.log(x);
        console.log(y);

        terrain[x][y] = p.random(-10, 10);
      }
    }
  };

  p.draw = () => {
    p.rotateX(p.PI / 2.3);
    p.translate(-w / 2, -h / 4, 0);
    p.background(0);
    p.stroke(255);
    // p.fill(100);
    // p.noFill();
    // p.frameRate(1);
    for (let y = 0; y < rows - 1; y++) {
      p.beginShape(p);
      for (let x = 0; x < cols; x++) {
        // p.rect(x * scale, y * scale, scale, scale);
        p.vertex(x * scale, y * scale, terrain[x][y]);

        p.vertex(x * scale, (y + 1) * scale, terrain[x][y + 1]);
        // p.vertex(x * scale, (y  1) * scale);
        // p.vertex((x + 1) * scale, y * scale);
        // p.vertex(x * scale, (y + 2) * scale);
      }
      p.endShape();
    }
  };

  // p.draw = () => {
  //   p.background(0);
  //   p.fill(200);
  //   p.rect(x, y, 200, 200);
  // };
};

// let myp5 = new p5(s);
