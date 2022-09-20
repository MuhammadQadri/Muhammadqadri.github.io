// chessboard
// Your Name
// September 19, 2022
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawChessboard();
}

function drawChessboard() {
  let cellWidth = width/8;
  let cellHeight = height/8;
  if (cellwidth > cellHeight){
    cellWidth = cellHeight;
  }
  else {
    cellHeight = cellWidth;
  }
  let iswhite = true;

  for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array.length; x++) {
      if (iswhite) {
        fill("white");
      }
      else {
        fill("black");
      }
      rect(x*cellWidth,y*cellHeight,cellWitdh,cellHeight)
      iswhite = iswhite;

      iswhite= !iswhite
    }  
    
  }
}