let canvas= document.querySelector("#myCanvas");
let ctx= canvas.getContext("2d");
let x = canvas.width/2;
let y = canvas.height-30;
let dx = 2;
let dy = -2;
let ballRadius = 10;

function drawSq (){
ctx.beginPath();
ctx.rect(240, 160, 40, 40);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();
}

function drawBall(){
ctx.beginPath();
ctx.arc(x, y, ballRadius, 0, Math.PI*2);
ctx.fillStyle = "#000000";
ctx.fill();
ctx.closePath();
}

function draw (){
ctx.clearRect(0, 0, canvas.width, canvas.height);
//this makes it a circle instead of a line^
drawSq();
drawBall();
x += dx;
y += dy;
if (y + dy < ballRadius || y + dy > canvas.height-ballRadius){dy = -dy};
if (x + dx < ballRadius || x + dx > canvas.width-ballRadius){dx = -dx}
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
