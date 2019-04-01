WW.Data.Units.TCopter = class TCopter extends WW.Data.Unit{
  constructor(x,y, team = 'red'){
    this.position = {x, y};
    this.team = team;
    this.type = 'air';
    this.movementType = 'air';
    this.cost = 5000;
    this.movement = 6;
    this.vision = 2;
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
    this.fuel = 99;
    this.image = new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 0, 32, 16, 16);
    this.range = [0];
    this.canCharge = true;
    this.charge = [];
    this.maxCharge = 1;
  }
};