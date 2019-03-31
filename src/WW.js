const WW = {
  /** @type {HTMLCanvasElement} */
  canvas: null,
  /** @type {CanvasRenderingContext2D} */
  ctx: null,
  gb: null,
  w: null,
  h: null,
  w2: null,
  h2: null,
  frameCount: null,
  frameID: null,
  setFullScreen: function(){
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.w2 = this.w/2;
    this.h2 = this.h/2;
    this.gb.setAttribute('style', `width:${this.w}px;height:${this.h}px`);
    this.canvas.width = this.gb.offsetWidth;
    this.canvas.height = this.gb.offsetHeight;
  },
  checkFrameCount: function(){
    this.frameCount++;
    if(this.frameCount > 3600){
      this.frameCount = 1;
    }
  },
  startGame: function(){
    this.gb = document.querySelector('#game-board');
    this.canvas = document.querySelector('#canvas');
    this.ctx = this.canvas.getContext('2d');
    this.setFullScreen();
    this.frameCount = 0;

    this.Components.init();

    this.gameLoop();
  },
  gameLoop: function(){
    this.checkFrameCount();
    this.frameID = requestAnimationFrame(this.gameLoop.bind(this));
    this.clear();
    this.moveAll();
    this.drawAll();
  },
  clear: function(){
    this.ctx.clearRect(0, 0, this.w, this.h);
  },
  moveAll: function(){
    this.Components.move();
  },
  drawAll: function(){
    this.Components.draw();
  }
};