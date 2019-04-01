WW.Data.Units.Rockets = class Rockets extends WW.Data.Unit{
  constructor(x,y, team = 'red'){
    this.position = {x, y};
    this.team = team;
    this.type = 'land';
    this.movementType = 'tires';
    this.cost = 15000;
    this.movement = 5;
    this.vision = 1;
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
      battleship: new WW.Data.DamageChart(55,null),
      cruiser: new WW.Data.DamageChart(85,null),
      lander: new WW.Data.DamageChart(60,null),
      submarine: new WW.Data.DamageChart(85,null),
    };
    this.fuel = 50;
    this.image = WW.Controllers.ImageManager.loadedImages.rockets[team];
    this.ammo = 6;
    this.range = [3,4,5];
  }
};