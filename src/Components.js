WW.Components = {
  maps: null,
  selectedMapIndex: null,
  init: function(){
    this.maps = [new this.Map(WW.Data.Layouts.medium, [
      new WW.Components.Team('red', [
        new WW.Data.Units.Infantry(11, 1, 'red'),
        new WW.Data.Units.Mech(6, 0, 'red'),
        new WW.Data.Units.Infantry(0, 3, 'red'),
        new WW.Data.Units.Recon(6, 4, 'red'),
      ]),
      new WW.Components.Team('black', [
        new WW.Data.Units.Infantry(7, 2, 'black'),
        new WW.Data.Units.Mech(2, 2, 'black'),
        new WW.Data.Units.Tank(5, 4, 'black'),
      ]),
    ])];
    this.selectedMapIndex = 0;
  },
  update: function(){
    this.maps.forEach(map => map.update());
  },
  draw: function(){
    this.Background.draw();
    this.maps[this.selectedMapIndex].draw();
  },
  getCurrentMap: function(){
    return this.maps[this.selectedMapIndex];
  }
};