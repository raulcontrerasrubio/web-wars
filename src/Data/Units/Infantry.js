WW.Data.Units.Infantry = class Infantry extends WW.Data.Unit{
  constructor(x,y, team = 'red'){
    super();
    this.position = {x, y};
    this.team = team;
    this.type = 'land';
    this.movementType = 'infantry';
    this.cost = 1000;
    this.health = 100;
    this.movement = 3;
    this.vision = 2;
    this.damageChart = {
      infantry: new WW.Data.DamageChart(null,55),
      mech: new WW.Data.DamageChart(null,45),
      recon: new WW.Data.DamageChart(null,12),
      tank: new WW.Data.DamageChart(null,5),
      mediumTank: new WW.Data.DamageChart(null,1),
      neoTank: new WW.Data.DamageChart(null,1),
      apc: new WW.Data.DamageChart(null,14),
      artillery: new WW.Data.DamageChart(null,15),
      rockets: new WW.Data.DamageChart(null,25),
      antiAir: new WW.Data.DamageChart(null,5),
      missiles: new WW.Data.DamageChart(null,25),
      fighter: null,
      bomber: null,
      bCopter: new WW.Data.DamageChart(null,7),
      tCopter: new WW.Data.DamageChart(null,30),
      battleship: null,
      cruiser: null,
      lander: null,
      submarine: null,
    };
    this.image = WW.Controllers.ImageManager.loadedImages.infantry[team];
    this.canCapture = true;
    this.isCapturing = false;
  }
};