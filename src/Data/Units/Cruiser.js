WW.Data.Units.Cruiser = class Cruiser extends WW.Data.Unit{
  constructor(x,y, team = 'red'){
    this.position = {x, y};
    this.team = team;
    this.type = 'sea';
    this.movementType = 'ships';
    this.cost = 18000;
    this.movement = 6;
    this.vision = 3;
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
      fighter: new WW.Data.DamageChart(55,null),
      bomber: new WW.Data.DamageChart(65,null),
      bCopter: new WW.Data.DamageChart(115,null),
      tCopter: new WW.Data.DamageChart(115,null),
      battleship: null,
      cruiser: null,
      lander: null,
      submarine: new WW.Data.DamageChart(90,null),
    };
    this.fuel = 99;
    this.image = WW.Controllers.ImageManager.loadedImages.cruiser[team];
    this.ammo = 9;
    this.range = [1];
  }
};