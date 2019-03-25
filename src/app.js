class WebWars{
  constructor(){
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.root = this.canvas.getBoundingClientRect();
    this.panels = {
      settings: {
        width: 180,
        height: 120
      }
    };

    this.canvas.width = 640;
    this.canvas.height = 320;

    this.panels.position = {
      left: QuickSettings.create(this.root.left, this.root.top, 'LeftPanel')
        .setHeight(this.canvas.height)
        .setWidth(this.panels.settings.width),

      right: QuickSettings.create(this.root.left + this.canvas.width - this.panels.settings.width, this.root.top, 'RightPanel')
        .setHeight(this.canvas.height)
        .setWidth(this.panels.settings.width),

      bottom: QuickSettings.create(this.root.left, this.root.top + this.canvas.height - this.panels.settings.height, 'BottomPanel')
        .setHeight(this.panels.settings.height)
        .setWidth(this.canvas.width),

      top: QuickSettings.create(this.root.left, this.root.top, 'TopPanel')
        .setHeight(this.panels.settings.height)
        .setWidth(this.canvas.width),
    }

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
  window.scroll = Game.reOffset;
  window.onresize = Game.reOffset;
  console.log(Game);
}
