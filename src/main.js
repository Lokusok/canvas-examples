import Ball from "./props/ball.js";
import Player from "./props/player.js";
import Score from "./props/score.js";

import { config, canvas, ctx } from './config/index.js';

const scoreCount = {
  player1: 0,
  player2: 0,
};
const startDX = 4;
const startDY = 4;

let dx = startDX;
let dy = startDY;

let playerDY = 5;

const ball = new Ball(ctx, config.ball);
const player1 = new Player(ctx, { ...config.abstractPlayer, color: 'green', });
const player2 = new Player(ctx, { ...config.abstractPlayer, color: 'blue', });
const score = new Score(ctx, { ...config.abstractScore, ...config.score });

window.addEventListener('keydown', (e) => {
  const key = e.code;

  switch (key) {
    case 'KeyW': config.player1.movement.top = true; break;
    case 'KeyS': config.player1.movement.down = true; break;
    case 'ArrowUp': config.player2.movement.top = true; break;
    case 'ArrowDown': config.player2.movement.down = true; break;
  }
});

window.addEventListener('keyup', (e) => {
  const key = e.code;

  switch (key) {
    case 'KeyW': config.player1.movement.top = false; break;
    case 'KeyS': config.player1.movement.down = false; break;
    case 'ArrowUp': config.player2.movement.top = false; break;
    case 'ArrowDown': config.player2.movement.down = false; break;
  }
});

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ball.draw(config.ball.coords.x, config.ball.coords.y);
  player1.draw(config.player1.coords.x, config.player1.coords.y);
  player2.draw(config.player2.coords.x, config.player2.coords.y);
  score.draw(scoreCount.player1, scoreCount.player2);

  config.ball.coords.x += dx;
  config.ball.coords.y += dy;

  // === Логика движения игроков ===
  if (
    config.player1.movement.top &&
    config.player1.coords.y - playerDY >= 0 + 15
    ) {
    config.player1.coords.y -= playerDY;
  }

  if (
    config.player1.movement.down &&
    config.player1.coords.y + playerDY <= canvas.height - config.abstractPlayer.height - 15
    ) {
    config.player1.coords.y += playerDY;
  }

  if (
    config.player2.movement.top &&
    config.player2.coords.y - playerDY >= 0 + 15
    ) {
    config.player2.coords.y -= playerDY;
  }

  if (
    config.player2.movement.down &&
    config.player2.coords.y + playerDY <= canvas.height - config.abstractPlayer.height - 15
  ) {
    config.player2.coords.y += playerDY;
  }
  
  // === Логика побед ===
  // Проверка победы левого
  if (config.ball.coords.x >= config.player2.coords.x + config.ball.radius) {
    scoreCount.player1++;
    dx = -startDX;
  }

  // Проверка победы правого
  if (config.ball.coords.x <= config.player1.coords.x) {
    scoreCount.player2++;
    dx = startDX;
  }

  // === Логика столкновений ===
  // Проверка по "Y"
  if (
    config.ball.coords.y >= canvas.height - config.ball.radius ||
    config.ball.coords.y <= 0 + config.ball.radius
    ) {
    dy *= -1;
  }

  // Столкновения с игроками
  if (
    config.ball.coords.x <= config.player1.coords.x + config.ball.radius + 10 &&
    config.ball.coords.y >= config.player1.coords.y && config.ball.coords.y <= config.player1.coords.y + config.abstractPlayer.height
  ) {
    dx *= -1.1;
  }

  if (
    config.ball.coords.x >= config.player2.coords.x - config.ball.radius &&
    config.ball.coords.y >= config.player2.coords.y && config.ball.coords.y <= config.player2.coords.y + config.abstractPlayer.height
  ) {
    dx *= -1.1;
  }

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
