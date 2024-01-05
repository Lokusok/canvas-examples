import Render from './render.js';

class Ball extends Render {
  /**
   * Рисует круг по заданным координатам
   * @param {number} x 
   * @param {number} y 
   */
  draw(x, y) {
    this.ctx.strokeStyle = 'red';
    this.ctx.fillStyle = 'red';
    this.ctx.beginPath();
    this.ctx.arc(x, y, this.config.radius, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.stroke();
  }
}

export default Ball;
