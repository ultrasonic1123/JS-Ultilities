let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.fillStyle = "white";
  ctx.fillRect(50, 50, 150, 100);
});

ctx.fillStyle = 'red';
ctx.strokeStyle = 'blue';

ctx.beginPath();

ctx.arc(100, 100, 50, 0, 2*Math.PI);
ctx.lineWidth = 4;
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle= 'white';
ctx.lineWidth = 1;
ctx.strokeRect(50, 50, 100, 100)
ctx.stroke();

canvas.addEventListener('click', (event) => {
    console.log(event)
})