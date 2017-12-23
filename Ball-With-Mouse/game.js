var canvas , canvasContent;
var ballX = 75;
var ballY = 75;
var ballSpeedX = 5;
var ballSpeedY = 7;

const PADDLE_WIDTH = 100;
const PADDLE_THICKNESS = 10;
const PADDLE_DIST_FROM_EGDE = 60;

var PaddleX = 400;

function updateMousePos(evt){

    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;

    var mouseX = evt.clientX - rect.left - root.scrollLeft;
   // var mouseY = evt.clientY - rect.top - root.scrollTop;

    PaddleX = mouseX - PADDLE_WIDTH / 2;
}


window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContent = canvas.getContext('2d');

    var framesPerSecond = 30;
    setInterval(updateAll, 1000/framesPerSecond);


    canvas.addEventListener('mousemove', updateMousePos)

}

function updateAll() {
    moveAll();
    drawAll();
}

function ballRest(){
       ballX = canvas.width/2;
       ballY = canvas.height/2;
}

function moveAll(){

    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;

    if(ballX < 0){
        ballSpeedX *= -1; // left
    }

    if(ballX > canvas.width){
        ballSpeedX *= -1;   // right
    }

    if(ballY > canvas.height){
            ballRest();
       //  ballSpeedY *= -1;     bottom
    }

    if(ballY < 0){
        ballSpeedY *= -1;   // top
    }

    var PaddleTopEdgeY = canvas.height - PADDLE_DIST_FROM_EGDE;
    var PaddleBottomEdgeY = PaddleTopEdgeY + PADDLE_THICKNESS;
    var PaddleLeftEdgeX = PaddleX;
    var PaddleRightEdgeX = PaddleX+ PADDLE_WIDTH;
  
    if(ballY > PaddleTopEdgeY && // below
       ballY < PaddleBottomEdgeY && // above
       ballX > PaddleLeftEdgeX && // right
       ballX < PaddleRightEdgeX // left
    ){
        ballSpeedY *= -1;
    }

}


function drawAll(){
    colorRec(0,0, canvas.width, canvas.height,"black")
    colorCircle(ballX,ballY, 10, "white")
    colorRec(PaddleX, canvas.height-PADDLE_DIST_FROM_EGDE, PADDLE_WIDTH, PADDLE_THICKNESS,"white")
   
}

function colorRec(topLeftX,topLeftY, boxWidth,boxHeight, fillColor){
    canvasContent.fillStyle = fillColor
    canvasContent.fillRect(topLeftX,topLeftY, boxWidth,boxHeight)    
}

function colorCircle(centerX,centerY, radius, fillcolor){
    canvasContent.fillStyle = fillcolor;
    canvasContent.beginPath();
    canvasContent.arc(centerX,centerY, radius, 0, Math.PI*2,true)
    canvasContent.fill();

}