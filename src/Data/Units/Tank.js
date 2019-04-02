WW.Data.Units.Tank = class Tank extends WW.Data.Unit{
  constructor(x,y, team = 'red'){
    super();
    this.position = {x, y};
    this.team = team;
    this.type = 'land';
    this.movementType = 'treads';
    this.cost = 7000;
    this.movement = 6;
    this.vision = 3;
    this.damageChart = {
      infantry: new WW.Data.DamageChart(25,75),
      mech: new WW.Data.DamageChart(25,70),
      recon: new WW.Data.DamageChart(85,40),
      tank: new WW.Data.DamageChart(55,6),
      mediumTank: new WW.Data.DamageChart(15,1),
      neoTank: new WW.Data.DamageChart(15,1),
      apc: new WW.Data.DamageChart(75,45),
      artillery: new WW.Data.DamageChart(70,45),
      rockets: new WW.Data.DamageChart(85,55),
      antiAir: new WW.Data.DamageChart(65,5),
      missiles: new WW.Data.DamageChart(85,30),
      fighter: null,
      bomber: null,
      bCopter: new WW.Data.DamageChart(null,10),
      tCopter: new WW.Data.DamageChart(null,40),
      battleship: new WW.Data.DamageChart(1,null),
      cruiser: new WW.Data.DamageChart(5,null),
      lander: new WW.Data.DamageChart(10, null),
      submarine: new WW.Data.DamageChart(1,null),
    };
    this.fuel = 70;
    this.image = WW.Controllers.ImageManager.loadedImages.tank[team];
    this.ammo = 9;
    this.range = [1];
  }
};