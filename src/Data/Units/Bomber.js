WW.Data.Units.Bomber = class Bomber extends WW.Data.Unit{
  constructor(x,y, team = 'red'){
    this.position = {x, y};
    this.team = team;
    this.type = 'air';
    this.movementType = 'air';
    this.cost = 22000;
    this.movement = 7;
    this.vision = 2;
    this.damageChart = {
      infantry: new WW.Data.DamageChart(110,null),
      mech: new WW.Data.DamageChart(110,null),
      recon: new WW.Data.DamageChart(105,null),
      tank: new WW.Data.DamageChart(105,null),
      mediumTank: new WW.Data.DamageChart(95,null),
      neoTank: new WW.Data.DamageChart(90,null),
      apc: new WW.Data.DamageChart(105,null),
      artillery: new WW.Data.DamageChart(105,null),
      rockets: new WW.Data.DamageChart(105,null),
      antiAir: new WW.Data.DamageChart(95,null),
      missiles: new WW.Data.DamageChart(105,null),
      fighter: null,
      bomber: null,
      bCopter: null,
      tCopter: null,
      battleship: new WW.Data.DamageChart(75,null),
      cruiser: new WW.Data.DamageChart(85,null),
      lander: new WW.Data.DamageChart(95,null),
      submarine: new WW.Data.DamageChart(95,null),
    };
    this.fuel = 99;
    this.image = WW.Controllers.ImageManager.loadedImages.bomber[team];
    this.ammo = 9;
    this.range = [1];
  }
};