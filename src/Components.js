WW.Components = {
  maps: null,
  selectedMapIndex: null,
  init: function(){
    this.maps = [new this.Map(WW.Data.Layouts.test, ['red', 'black'])];
    this.selectedMapIndex = 0;
  },
  move: function(){

  },
  draw: function(){
    this.Background.draw();
    this.maps[this.selectedMapIndex].draw();
  },
  getCurrentMap: function(){
    return this.maps[this.selectedMapIndex];
  }
};