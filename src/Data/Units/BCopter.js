WW.Data.Units.BCopter = class BCopter extends WW.Data.Unit{
  constructor(x,y, team = 'red'){
    this.position = {x, y};
    this.team = team;
    this.type = 'air';
    this.movementType = 'air';
    this.cost = 9000;
    this.movement = 6;
    this.vision = 3;
    this.damageChart = {
      infantry: new WW.Data.DamageChart(null,75),
      mech: new WW.Data.DamageChart(null,75),
      recon: new WW.Data.DamageChart(55,30),
      tank: new WW.Data.DamageChart(55,6),
      mediumTank: new WW.Data.DamageChart(25,1),
      neoTank: new WW.Data.DamageChart(20,1),
      apc: new WW.Data.DamageChart(60,20),
      artillery: new WW.Data.DamageChart(65,25),
      rockets: new WW.Data.DamageChart(65,35),
      antiAir: new WW.Data.DamageChart(25,6),
      missiles: new WW.Data.DamageChart(65,35),
      bCopter: new WW.Data.DamageChart(65,null),
      tCopter: new WW.Data.DamageChart(95,null),
      battleship: new WW.Data.DamageChart(25,null),
      cruiser: new WW.Data.DamageChart(55,null),
      lander: new WW.Data.DamageChart(25,null),
      submarine: new WW.Data.DamageChart(25,null),
    };
    this.fuel = 99;
    this.image = WW.Controllers.ImageManager.loadedImages.bCopter[team];
    this.ammo = 6;
    this.range = [1];
  }
};