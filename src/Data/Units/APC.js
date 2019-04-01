WW.Data.Units.APC = class APC extends WW.Data.Unit{
  constructor(x,y, team = 'red'){
    this.position = {x, y};
    this.team = team;
    this.type = 'land';
    this.movementType = 'treads';
    this.cost = 5000;
    this.movement = 6;
    this.vision = 1;
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
      battleship: null,
      cruiser: null,
      lander: null,
      submarine: null,
    };
    this.fuel = 70;
    this.image = WW.Controllers.ImageManager.loadedImages.apc[team];
    this.range = [0];
    this.canSupply = true;
    this.canCharge = true;
    this.canJoin = false;
    this.maxCharge = 1;
    this.charge = [];
  }
};