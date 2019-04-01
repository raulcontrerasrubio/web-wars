WW.Data.Units.AntiAir = class AntiAir extends WW.Data.Unit{
  constructor(x,y, team = 'red'){
    this.position = {x, y};
    this.team = team;
    this.type = 'land';
    this.movementType = 'treads';
    this.cost = 8000;
    this.movement = 6;
    this.vision = 2;
    this.damageChart = {
      infantry: new WW.Data.DamageChart(105,null),
      mech: new WW.Data.DamageChart(105,null),
      recon: new WW.Data.DamageChart(60,null),
      tank: new WW.Data.DamageChart(25,null),
      mediumTank: new WW.Data.DamageChart(10,null),
      neoTank: new WW.Data.DamageChart(5,null),
      apc: new WW.Data.DamageChart(50,null),
      artillery: new WW.Data.DamageChart(50,null),
      rockets: new WW.Data.DamageChart(55,null),
      antiAir: new WW.Data.DamageChart(45,null),
      missiles: new WW.Data.DamageChart(55,null),
      fighter: new WW.Data.DamageChart(65,null),
      bomber: new WW.Data.DamageChart(75,null),
      bCopter: new WW.Data.DamageChart(120,null),
      tCopter: new WW.Data.DamageChart(120,null),
      battleship: null,
      cruiser: null,
      lander: null,
      submarine: null,
    };
    this.fuel = 60;
    this.image = new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 0, 32, 16, 16);
    this.ammo = 9;
    this.range = [1];
  }
};