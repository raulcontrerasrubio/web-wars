class WebWars{
  constructor(){
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.root = this.canvas.getBoundingClientRect();
    this.panels = {
      settings: {
        width: 180,
        height: 120
      },
      position: {
        left: QuickSettings.create(this.root.left, this.root.top, 'LeftPanel')
          .setHeight(this.canvas.height)
          .setWidth(this.panels.settings.width),

        right: QuickSettings.create(this.root.right - panelWidth, this.root.top, 'RightPanel')
          .setHeight(this.canvas.height)
          .setWidth(this.panels.settings.width),

        bottom: QuickSettings.create(this.root.left, this.root.top + this.canvas.height - panelHeight, 'BottomPanel')
          .setHeight(this.panels.settings.height)
          .setWidth(this.canvas.width),

        top: QuickSettings.create(this.root.left, this.root.top, 'TopPanel')
          .setHeight(this.panels.settings.height)
          .setWidth(this.canvas.width),
      },
    };

    this.canvas.width = 640;
    this.canvas.height = 320;
  }

  gameLoop(){
    requestAnimationFrame(this.gameLoop);
  }

  reOffset(){
    this.root = this.canvas.getBoundingClientRect();
  }
}

window.onload = function(){
  let Game = new WebWars();
  Game.canvas
  console.log(Game);
}