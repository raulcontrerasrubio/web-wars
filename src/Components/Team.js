WW.Components.Team = class Team{
  constructor(name, units = []){
    this.name = name;
    this.units = units;
  }
  endTurn(){
    WW.Components.maps[WW.Components.getCurrentMap()].nextTurn();
  }
};