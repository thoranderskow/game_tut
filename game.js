let canvas= document.querySelector("#myCanvas");
let ctx= canvas.getContext("2d");
//COLLISION VAR
let x = canvas.width/2;
let y = canvas.height-30;
let dx = 2;
let dy = -2;
//BALL VAR
let ballRadius = 10;
let ballColor = "black"
//PADDLE VAR
let paddleHeight = 15;
let paddleWidth = 80;
let paddleX = (canvas.width-paddleWidth)/2;
let rightPressed = false;
let leftPressed = false;
//FUNCTIONS

//randomizer functions
function getRandomNumber(){return Math.floor(Math.random() * 255);}
function getRandomColor(){return "rgba("
+ getRandomNumber() + ", "
+ getRandomNumber() + ", "
+ getRandomNumber() + ", "
+ 1 + ")";}

//draw functions
function drawSq (){
ctx.beginPath();
ctx.rect(240, 160, 40, 40);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();
}

function drawBall(color){
ctx.beginPath();
ctx.arc(x, y, ballRadius, 0, Math.PI*2);
ctx.fillStyle = color;
ctx.fill();
ctx.closePath();
}

function drawPaddle(){
ctx.beginPath();
ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
ctx.fillStyle = "#0095DD";
ctx.fill();
ctx.closePath();
}

function draw (){
ctx.clearRect(0, 0, canvas.width, canvas.height);
//this makes it a circle instead of a line by clearing the canvas every 10 ms^
drawBall(ballColor);
drawPaddle();
//top border collision
if (y + dy < ballRadius){
  dy = -dy; ballColor=getRandomColor();
}
else if (y + dy > canvas.height-paddleHeight-ballRadius){
  if (x > paddleX && x < paddleX + paddleWidth){
    if (dy < 5){ // keeps speed of ball under 5 pixels per frame
    dy = -(dy + 1);
    } else {dy = -dy;}
    ballColor=getRandomColor();
  } else if(y + dy > canvas.height-ballRadius){
  alert("GAME OVER");
  document.location.reload();}
} //sides border collision
if (x + dx < ballRadius || x + dx > canvas.width-ballRadius){
  dx = -dx; ballColor=getRandomColor();
};
//KEY PARAMETERS
if (rightPressed && paddleX < canvas.width-paddleWidth){paddleX += 4;};
if (leftPressed && paddleX > 0){paddleX -= 4;};
x += dx;
y += dy;
}
//KEY HANDLERS
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
function keyDownHandler(e){
  if (e.keyCode == 39){rightPressed = true;}
  else if (e.keyCode == 37){leftPressed = true;}
}
function keyUpHandler(e){
  if(e.keyCode == 39){rightPressed = false;}
  else if (e.keyCode == 37){leftPressed = false;}
}
setInterval(draw, 10);



//green half circle
//ctx.beginPath();
//ctx.arc(240, 160, 20, 0, Math.PI, true);
//ctx.fillStyle = "#00ff00";
//ctx.fill();
//ctx.closePath();
//outlined rectangle
//ctx.beginPath();
//ctx.rect(160, 10, 100, 40);
//ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
//ctx.stroke();
//ctx.closePath();
