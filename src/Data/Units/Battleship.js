WW.Data.Units.Battleship = class Battleship extends WW.Data.Unit{
  constructor(x,y, team = 'red'){
    this.position = {x, y};
    this.team = team;
    this.type = 'sea';
    this.movementType = 'ships';
    this.cost = 28000;
    this.movement = 5;
    this.vision = 2;
    this.damageChart = {
      infantry: new WW.Data.DamageChart(95,null),
      mech: new WW.Data.DamageChart(90,null),
      recon: new WW.Data.DamageChart(90,null),
      tank: new WW.Data.DamageChart(80,null),
      mediumTank: new WW.Data.DamageChart(55,null),
      neoTank: new WW.Data.DamageChart(50,null),
      apc: new WW.Data.DamageChart(80,null),
      artillery: new WW.Data.DamageChart(80,null),
      rockets: new WW.Data.DamageChart(85,null),
      antiAir: new WW.Data.DamageChart(85,null),
      missiles: new WW.Data.DamageChart(90,null),
      fighter: null,
      bomber: null,
      bCopter: null,
      tCopter: null,
      battleship: new WW.Data.DamageChart(50,null),
      cruiser: new WW.Data.DamageChart(95,null),
      lander: new WW.Data.DamageChart(95,null),
      submarine: new WW.Data.DamageChart(95,null),
    };
    this.fuel = 99;
    this.image = new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 0, 32, 16, 16);
    this.ammo = 9;
    this.range = [2,3,4,5,6];
  }
};