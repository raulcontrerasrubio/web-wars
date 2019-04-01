WW.Data.Units.Mech = class Mech extends WW.Data.Unit{
  constructor(x,y, team = 'red'){
    this.position = {x, y};
    this.team = team;
    this.type = 'land';
    this.movementType = 'mech';
    this.cost = 3000;
    this.movement = 2;
    this.vision = 2;
    this.damageChart = {
      infantry: new WW.Data.DamageChart(null,65),
      mech: new WW.Data.DamageChart(null,55),
      recon: new WW.Data.DamageChart(85,18),
      tank: new WW.Data.DamageChart(55,6),
      mediumTank: new WW.Data.DamageChart(15,1),
      neoTank: new WW.Data.DamageChart(15,1),
      apc: new WW.Data.DamageChart(75,20),
      artillery: new WW.Data.DamageChart(70,32),
      rockets: new WW.Data.DamageChart(85,35),
      antiAir: new WW.Data.DamageChart(65,6),
      missiles: new WW.Data.DamageChart(85,35),
      fighter: null,
      bomber: null,
      bCopter: new WW.Data.DamageChart(null,9),
      tCopter: new WW.Data.DamageChart(null,35),
      battleship: null,
      cruiser: null,
      lander: null,
      submarine: null,
    };
    this.fuel = 70;
    this.image = new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 0, 32, 16, 16);
    this.ammo = 3;
    this.canCapture = true;
  }
};