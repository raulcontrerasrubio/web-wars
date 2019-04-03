WW.Components.Team = class Team{
  constructor(name, units = []){
    this.name = name;
    this.units = [...units];
    this.funds = 7000;
  }
  endTurn(){
    WW.Components.maps[WW.Components.getCurrentMap()].nextTurn();
  }
  draw(){
    this.units.forEach(unit => unit.draw());
  }
};