WW.Data.ImageCoord = class ImageCoord{
  constructor(origin, x, y, w = 16, h = 16){
    this.origin = origin;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.toX = this.x + this.w;
    this.toY = this.y + this.h;
  }
};