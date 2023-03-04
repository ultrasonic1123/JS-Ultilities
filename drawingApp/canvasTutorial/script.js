let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let hue = 0;
const mousePosition = {
  x: null,
  y: null,
};

const particles = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle = "white";
  ctx.fillRect(50, 50, 150, 100);
});


canvas.addEventListener("mousemove", (event) => {
  console.log(event);
  mousePosition.x = event.x;
  mousePosition.y = event.y;
  for(let i = 0; i < 100; i++) {
    particles.push(new Particles())
  }
});

class Particles {
  constructor() {
    this.x = mousePosition.x;
    this.y = mousePosition.y;
    // this.x = Math.random() * canvas.width;
    // this.y = Math.random() * canvas.height;
    this.size = Math.random() * 5 + 1;
    this.offsetX = Math.random() * 3 - 1.5;
    this.offsetY = Math.random() * 3 - 1.5;
    this.color = `hsl(${hue},100%, 50%)`
  }

  update() {
    this.x = this.x + this.offsetX;
    this.y = this.y + this.offsetY;
    if(this.size > 0.2) this.size -= 0.1;
  }

  draw() {
    ctx.beginPath();
    // ctx.fillStyle = 'white'
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
}


// function init() {
//     for(let i = 0; i < 1000; i++) {
//         particles.push(new Particles());
//     }
// }

function handlesParticles() {
    for(let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw()
        if(particles[i].size < 0.3) {
            particles.splice(i, 1)
            i--;
        }
        
    }
}

function animation() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = 'rgba(0,0,0, 0.05)';
ctx.fillRect(0, 0, canvas.width, canvas.height);
  handlesParticles();
  hue+=5;
  requestAnimationFrame(animation);
}

// init();
animation();
