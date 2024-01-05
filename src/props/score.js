import Render from "./render.js";

class Score extends Render {
  draw(score1, score2) {
    this.ctx.font = this.config.font;
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(score1, this.config.score1.coords.x, this.config.score1.coords.y);
    this.ctx.fillText(score2, this.config.score2.coords.x, this.config.score2.coords.y);
  }
}

export default Score;
