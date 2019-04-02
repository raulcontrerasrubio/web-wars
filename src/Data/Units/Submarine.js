WW.Data.Units.Submarine = class Submarine extends WW.Data.Unit{
  constructor(x,y, team = 'red'){
    super();
    this.position = {x, y};
    this.team = team;
    this.type = 'sea';
    this.movementType = 'ships';
    this.cost = 20000;
    this.movement = 5;
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
      fighter: null,
      bomber: null,
      bCopter: null,
      tCopter: null,
      battleship: new WW.Data.DamageChart(55,null),
      cruiser: new WW.Data.DamageChart(25,null),
      lander: new WW.Data.DamageChart(95,null),
      submarine: new WW.Data.DamageChart(55,null),
    };
    this.fuel = 60;
    this.image = WW.Controllers.ImageManager.loadedImages.submarine[team];
    this.ammo = 6;
    this.range = [1];
    this.canSumerge = true;
    this.isSumerged = false;
  }
};