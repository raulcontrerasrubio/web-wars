WW.Data.Units.Recon = class Recon extends WW.Data.Unit{
  constructor(x,y, team = 'red'){
    this.position = {x, y};
    this.team = team;
    this.type = 'land';
    this.movementType = 'tires';
    this.cost = 4000;
    this.movement = 8;
    this.vision = 5;
    this.damageChart = {
      infantry: new WW.Data.DamageChart(null,70),
      mech: new WW.Data.DamageChart(null,65),
      recon: new WW.Data.DamageChart(null,35),
      tank: new WW.Data.DamageChart(null,6),
      mediumTank: new WW.Data.DamageChart(null,1),
      neoTank: new WW.Data.DamageChart(null,1),
      apc: new WW.Data.DamageChart(null,45),
      artillery: new WW.Data.DamageChart(null,45),
      rockets: new WW.Data.DamageChart(null,55),
      antiAir: new WW.Data.DamageChart(null,4),
      missiles: new WW.Data.DamageChart(null,28),
      fighter: null,
      bomber: null,
      bCopter: new WW.Data.DamageChart(null,10),
      tCopter: new WW.Data.DamageChart(null,35),
      battleship: null,
      cruiser: null,
      lander: null,
      submarine: null,
    };
    this.fuel = 80;
    this.image = WW.Controllers.ImageManager.loadedImages.recon[team];
    this.range = [1];
  }
};