WW.Components.Team = class Team{
  constructor(name, units = []){
    this.name = name;
    this.units = [...units];
    this.funds = 7000;
    this.selectedUnit = null;
  }
  endTurn(){
    WW.Components.maps[WW.Components.getCurrentMap()].nextTurn();
  }
  update(){
    this.units = this.units.filter(unit => unit.health > 0);
  }
  draw(){
    this.units.forEach(unit => unit.draw());
  }
};