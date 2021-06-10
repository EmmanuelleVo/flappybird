const background = {
  game: null,
  frame: {
    sx: 0,
    sy: 0,
    sw: 0,
    sh: 0,
    dx: 0,
    dy: 0,
    dw: 0,
    dh: 0,
  },

  update() {
    this.game.renderSpriteFrame(this.frame)
  },

  init(game) {
    this.game = game
    this.frame.dw = game.canvas.width
    this.frame.dh = game.canvas.height
    this.frame.sw = game.canvas.width
    this.frame.sh = game.canvas.height
  }
}

export default background