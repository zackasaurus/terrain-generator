export const terrainGenerator = (p) => {
  let x = 100;
  let y = 100;

  p.setup = () => {
    p.createCanvas(600, 600, p.WEBGL);
    // p.drawBackground();
    // p.setupPosition();
  };
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

  p.draw = () => {
    p.translate(-w / 2, -h / 2, 0);
    p.background(0);
    p.noFill();
    p.stroke(255);
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        p.rect(x * scale, y * scale, scale, scale);
      }
    }
  };

  // p.draw = () => {
  //   p.background(0);
  //   p.fill(200);
  //   p.rect(x, y, 200, 200);
  // };
};

// let myp5 = new p5(s);
