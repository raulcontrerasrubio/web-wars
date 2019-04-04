WW.Data.Building = class Building{
  constructor(x, y, team = 'white'){
    this.position = {x,y};
    this.team = team;
    this.defense = 3;
    this.capture = 20;
  }
};