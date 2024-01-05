const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const config = {
  square: {
    width: 30,
    height: 30,
  },
};
let coords = {x: 30, y: 10};
let dx = 2;
let dy = 2;

function gameLoop() {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);

  coords.x += dx;
  coords.y += dy;

  ctx.fillStyle = 'red';
  ctx.fillRect(coords.x, coords.y, config.square.width, config.square.height);

  console.log(coords);
  if (coords.x + config.square.width >= canvas.width || coords.x <= 0) {
    dx *= -1;
  }

  if (coords.y + config.square.height >= canvas.height || coords.y <= 0) {
    dy *= -1;
  }

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
