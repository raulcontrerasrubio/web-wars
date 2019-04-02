WW.Components.Team = class Team{
  constructor(name, units = []){
    this.name = name;
    this.units = units;
    this.funds = 0;
  }
  endTurn(){
    WW.Components.maps[WW.Components.getCurrentMap()].nextTurn();
  }
};