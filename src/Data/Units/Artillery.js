WW.Data.Units.Artillery = class Artillery extends WW.Data.Unit{
  constructor(x,y, team = 'red'){
    super();
    this.position = {x, y};
    this.team = team;
    this.type = 'land';
    this.movementType = 'treads';
    this.cost = 6000;
    this.movement = 5;
    this.vision = 1;
    this.damageChart = {
      infantry: new WW.Data.DamageChart(90,null),
      mech: new WW.Data.DamageChart(85,null),
      recon: new WW.Data.DamageChart(80,null),
      tank: new WW.Data.DamageChart(70,null),
      mediumTank: new WW.Data.DamageChart(45,null),
      neoTank: new WW.Data.DamageChart(40,null),
      apc: new WW.Data.DamageChart(70,null),
      artillery: new WW.Data.DamageChart(75,null),
      rockets: new WW.Data.DamageChart(80,null),
      antiAir: new WW.Data.DamageChart(75,null),
      missiles: new WW.Data.DamageChart(80,null),
      fighter: null,
      bomber: null,
      bCopter: null,
      tCopter: null,
      battleship: new WW.Data.DamageChart(40,null),
      cruiser: new WW.Data.DamageChart(65,null),
      lander: new WW.Data.DamageChart(55,null),
      submarine: new WW.Data.DamageChart(60,null),
    };
    this.fuel = 50;
    this.image = WW.Controllers.ImageManager.loadedImages.artillery[team];
    this.ammo = 9;
    this.range = [2,3];
  }
};