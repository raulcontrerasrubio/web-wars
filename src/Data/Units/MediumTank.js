WW.Data.Units.MediumTank = class MediumTank extends WW.Data.Unit{
  constructor(x,y, team = 'red'){
    this.position = {x, y};
    this.team = team;
    this.type = 'land';
    this.movementType = 'treads';
    this.cost = 16000;
    this.movement = 5;
    this.vision = 1;
    this.damageChart = {
      infantry: new WW.Data.DamageChart(30,105),
      mech: new WW.Data.DamageChart(30,95),
      recon: new WW.Data.DamageChart(105,45),
      tank: new WW.Data.DamageChart(85,8),
      mediumTank: new WW.Data.DamageChart(55,1),
      neoTank: new WW.Data.DamageChart(45,1),
      apc: new WW.Data.DamageChart(105,45),
      artillery: new WW.Data.DamageChart(105,45),
      rockets: new WW.Data.DamageChart(105,55),
      antiAir: new WW.Data.DamageChart(105,7),
      missiles: new WW.Data.DamageChart(105,35),
      fighter: null,
      bomber: null,
      bCopter: new WW.Data.DamageChart(null,12),
      tCopter: new WW.Data.DamageChart(null,45),
      battleship: new WW.Data.DamageChart(10,null),
      cruiser: new WW.Data.DamageChart(55,null),
      lander: new WW.Data.DamageChart(35,null),
      submarine: new WW.Data.DamageChart(10,null),
    };
    this.fuel = 50;
    this.image = WW.Controllers.ImageManager.loadedImages.mediumTank[team];
    this.ammo = 8;
    this.range = [1];
  }
};