WW.Data.Units.Fighter = class Fighter extends WW.Data.Unit{
  constructor(x,y, team = 'red'){
    this.position = {x, y};
    this.team = team;
    this.type = 'air';
    this.movementType = 'air';
    this.cost = 20000;
    this.movement = 9;
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
      fighter: new WW.Data.DamageChart(55,null),
      bomber: new WW.Data.DamageChart(100,null),
      bCopter: new WW.Data.DamageChart(100,null),
      tCopter: new WW.Data.DamageChart(100,null),
      battleship: null,
      cruiser: null,
      lander: null,
      submarine: null,
    };
    this.image = new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 0, 32, 16, 16);
    this.ammo = 9;
    this.range = [1];
  }
};