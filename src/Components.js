WW.Components = {
  maps: null,
  selectedMapIndex: null,
  init: function(){
    this.maps = [new this.Map(WW.Data.Layouts.test, [new WW.Components.Team('red', [new WW.Data.Units.Infantry(0, 0), new WW.Data.Units.Mech(7, 5)]), new WW.Components.Team('black', [new WW.Data.Units.Infantry(1, 0, 'black'), new WW.Data.Units.Mech(9, 5, 'black')])])];
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