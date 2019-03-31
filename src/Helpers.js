WW.Helpers = {
  drawBitMap: function(useBitmap, atX, atY){
    WW.ctx.save();
    WW.ctx.translate(atX, atY);
    WW.ctx.drawImage(useBitmap, -useBitmap.width/2, -useBitmap.height/2);
    WW.ctx.restore();
  },
};