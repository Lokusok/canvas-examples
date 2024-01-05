import Render from "./render.js";

class Player extends Render {
  draw(x, y) {
    this.ctx.fillStyle = this.config.color;
    this.ctx.fillRect(x, y, this.config.width, this.config.height);
  }
}

export default Player;
