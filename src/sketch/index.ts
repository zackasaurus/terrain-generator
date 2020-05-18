export const terrainGenerator = (p) => {
  // let x = 100;
  // let y = 100;
  var cols, rows;
  var scl = 20;
  var w = 2000;
  var h = 1600;

  var flying = 0;

  var terrain;

  p.setup = () => {
    p.createCanvas(600, 600, p.WEBGL);
    cols = w / scl;
    rows = h / scl;
    terrain = create2DArray(cols, rows);
    // console.log(terrain);
  };

  p.draw = () => {
    flying -= 0.005;

    var yoff = flying;
    for (let y = 0; y < rows; y++) {
      var xoff = 0;
      for (let x = 0; x < cols; x++) {
        // console.log(terrain[x]);
        terrain[x][y] = p.map(p.noise(xoff, yoff), 0, 1, -100, 100);
        xoff += 0.2;
      }
      yoff += 0.2;
    }

    // p.background(200, 200, 200, 200);
    p.background(0);

    p.stroke(255);

    // translate(width / 2, height / 2);
    // p.translate(0, 50);
    p.rotateX(p.PI / 2.2);
    p.fill(200, 200, 200, 255);

    p.translate(-p.width, -p.height / 2 + 50);
    for (let y = 0; y < rows - 1; y++) {
      p.beginShape(p.TRIANGLE_STRIP);
      for (let x = 0; x < cols; x++) {
        p.vertex(x * scl, y * scl, terrain[x][y]);
        p.vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
        // rect(x * scl, y * scl, scl, scl);
      }
      p.endShape();
    }
  };

  function create2DArray(numArrays, numSubArrays) {
    // console.log(numArrays);
    var arr = new Array(numArrays);
    for (var i = 0; i < numArrays; i++) {
      arr[i] = new Array(numSubArrays);
    }
    return arr;
  }
};

// let myp5 = new p5(s);
