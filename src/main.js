import './style.css';

const canvas = document.createElement('canvas');
canvas.id = 'game';
canvas.width = 700;
canvas.height = 300;

document.body.append(canvas);

const ctx = canvas.getContext('2d');
const config = {
  square: {
    width: 35,
    height: 35,
  },
  speeds: [1, 2, 3],
};
let coords = {x: getRandomNumber(10, canvas.width), y: getRandomNumber(10, canvas.height)};
let dx = getRandomElem(config.speeds);
let dy = getRandomElem(config.speeds);

function getRandomElem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);

  coords.x += dx;
  coords.y += dy;

  ctx.fillStyle = 'red';
  ctx.fillRect(coords.x, coords.y, config.square.width, config.square.height);

  if (coords.x + dx + config.square.width >= canvas.width || coords.x <= 0) {
    dx = getRandomElem(config.speeds) * -Math.sign(dx);
  }

  if (coords.y + dy + config.square.height >= canvas.height || coords.y <= 0) {
    dy = getRandomElem(config.speeds) * -Math.sign(dy);
  }

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
