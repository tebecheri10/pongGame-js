let canvasHTML = document.querySelector("#gameCanvas");
let ballX = 50;
let ballY = 50;
let speedX = 10;
let speedY = 10;

let racketHeight = 120;
let racketWidth = 20;
let racket1Y = 200;
let racket2Y = 200;
let score1 = 0;
let score2 = 0;

const getCanvas = () => {
  let canvasContext = canvasHTML.getContext("2d");
  return canvasContext;
};

const createGameLayout = () => {
  const layout = getCanvas();
  layout.fillStyle = "black";
  layout.fillRect(0, 0, canvasHTML.width, canvasHTML.height);
  createBall();
  createLeftRacket();
  createRightRacket();
  computerMovement();
  drawTableLines();
  drawScore(score1,(canvasHTML.width / 1.5) , 100)
  drawScore(score2, (canvasHTML.width / 3) , 100);
};

const createBall = () => {
  const ballElement = getCanvas();
  ballElement.fillStyle = "#03fc6b";
  ballElement.beginPath();
  ballElement.arc(ballX, ballY, 10, 0, Math.PI * 2, true);
  ballElement.fill();
  ballMovement();
};

const ballMovement = () => {
  // Start Horizontal movement
  ballX = ballX + speedX;

  //Manage de right side actions if the ball hit the racket or goes outside de canvas
  if (
    ballX > canvasHTML.width - racketWidth &&
    ballY > racket2Y &&
    ballY < racket2Y + racketHeight
  ) {
    speedX = -speedX;
    let deltaY = ballY - ( racket2Y + racketHeight / 2 );
    speedY = deltaY * 0.35
  }
  if (ballX === canvasHTML.width) {
    onPoint();
    speedX = -speedX;
  }
  //Manage de left side actions if the ball hit the racket or goes outside de canvas
  if (
    ballX === racketWidth &&
    ballY > racket1Y &&
    ballY < racket1Y + racketHeight
  ) {
    speedX = -speedX;
    let deltaY = ballY - ( racket1Y + racketHeight / 2 );
    speedY = deltaY * 0.35
  }
  if (ballX === 0) {
    onPoint(2);
    speedX = -speedX;
  }
  // Ball Vertical movement
  ballY = ballY + speedY;
  if (ballY >= canvasHTML.height - 10) {
    speedY = -speedY;
  }
  if (ballY < 0) {
    speedY = -speedY;
  }
};

const createLeftRacket = () => {
  const leftRacket = getCanvas();
  leftRacket.fillStyle = "white";
  leftRacket.fillRect(0, racket1Y, racketWidth, racketHeight);
};

const createRightRacket = () => {
  const rightRacket = getCanvas();
  rightRacket.fillStyle = "white";
  rightRacket.fillRect(
    canvasHTML.width - racketWidth,
    racket2Y,
    racketWidth,
    racketHeight
  );
};

const drawTableLines = () => {
  const tableLines = getCanvas();
  tableLines.fillStyle = "white";
  tableLines.fillRect(canvasHTML.width / 2, 0, racketWidth/2, canvasHTML.height);
};

const drawScore = (wichScore,x,y)=>{
  const score = getCanvas();
  score.font = '48px serif';
  score.fillText(wichScore,x , y );
}

const mousePosition = (e) => {
  let rect = canvasHTML.getBoundingClientRect();
  let root = document;
  let mouseX = e.clientX - rect.left - root.scrollingElement.clientLeft;
  let mouseY = e.clientY - rect.top - root.scrollingElement.clientTop;

  return {
    x: mouseX,
    y: mouseY,
  };
};

const computerMovement = () => {
  let racket2Ymiddle = racket2Y + racketHeight / 2;
  if (racket2Ymiddle < ballY) {
    racket2Y += Math.random() * 17;
  } else {
    racket2Y -= Math.random() * 17;
  }
};

const onPoint = (score) => {
  if(score === 2){
    score1++
  }else{
    score2++
  }
  ballX = canvasHTML.width / 2;
  ballY = canvasHTML.height / 2;
};

window.addEventListener("load", () => {
  let fps = 60;

  canvasHTML.addEventListener("mousemove", (e) => {
    let mousePos = mousePosition(e);
    racket1Y = mousePos.y - racketHeight / 2;
  });

  if (true) {
    setInterval(() => {
        createGameLayout();  
    }, 1000 / fps);
  }
});
