let canvasHTML = document.querySelector("#gameCanvas");
let ballX = 50;
let ballY = 50;
let speedX = 10;
let speedY = 10;

let racketHeight = 120;
let racketWidth = 20;
let racket1Y = 200;
let racket2Y = 200;


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
  computerMovement()
};

const createBall = () => {
  const ballElement = getCanvas();
  ballElement.fillStyle = "#fff";
  ballElement.beginPath();
  ballElement.arc(ballX, ballY, 10, 0, Math.PI * 2, true);
  ballElement.fill();
  ballMovement();
};

const ballMovement = () => {
  // Start Horizontal movement
  ballX = ballX + speedX;

  //Manage de right side actions if the ball hit the racket or goes outside de canvas
  if (ballX > canvasHTML.width - racketWidth && ballY > racket2Y && ballY < racket2Y + racketHeight) {
    speedX = -speedX;
  }
  if (ballX === canvasHTML.width) {
    onPoint();
    speedX = -speedX;
  }
  //Manage de left side actions if the ball hit the racket or goes outside de canvas
  if (ballX === racketWidth && ballY > racket1Y && ballY < racket1Y + racketHeight) {
    speedX = -speedX;
  }
  if (ballX === 0) {
    onPoint();
    speedX = -speedX;
  }
  // Ball Vertical movement
  ballY = ballY + speedY;
  if (ballY > canvasHTML.height - 10) {
    speedY = -speedY;
  }
  if (ballY === 0) {
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
    rightRacket.fillRect( canvasHTML.width - racketWidth , racket2Y, racketWidth, racketHeight);
  };

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
        let racket2Ymiddle = racket2Y + (racketHeight/ 2)
        if(racket2Ymiddle < ballY){
            racket2Y += Math.random()*17
        }else{
            racket2Y -= Math.random()*17
        }
  };

const onPoint = () => {
  ballX = canvasHTML.width / 2;
  ballY = canvasHTML.height / 2;
};

window.addEventListener("load", () => {
    let fps = 30;
    
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
