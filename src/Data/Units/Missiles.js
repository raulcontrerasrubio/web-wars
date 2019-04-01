WW.Data.Units.Missiles = class Missiles extends WW.Data.Unit{
  constructor(x,y, team = 'red'){
    this.position = {x, y};
    this.team = team;
    this.type = 'land';
    this.movementType = 'treads';
    this.cost = 12000;
    this.movement = 4;
    this.vision = 5;
    this.damageChart = {
      infantry: null,
      mech: null,
      recon: null,
      tank: null,
      mediumTank: null,
      neoTank: null,
      apc: null,
      artillery: null,
      rockets: null,
      antiAir: null,
      missiles: null,
      fighter: new WW.Data.DamageChart(100,null),
      bomber: new WW.Data.DamageChart(100,null),
      bCopter: new WW.Data.DamageChart(120,null),
      tCopter: new WW.Data.DamageChart(120,null),
      battleship: null,
      cruiser: null,
      lander: null,
      submarine: null,
    };
    this.fuel = 50;
    this.image = WW.Controllers.ImageManager.loadedImages.missiles[team];
    this.ammo = 6;
    this.range = [3,4,5];
  }
};