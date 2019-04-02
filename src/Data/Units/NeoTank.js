WW.Data.Units.NeoTank = class NeoTank extends WW.Data.Unit{
  constructor(x,y, team = 'red'){
    super();
    this.position = {x, y};
    this.team = team;
    this.type = 'land';
    this.movementType = 'treads';
    this.cost = 22000;
    this.movement = 6;
    this.vision = 1;
    this.damageChart = {
      infantry: new WW.Data.DamageChart(30,125),
      mech: new WW.Data.DamageChart(30,115),
      recon: new WW.Data.DamageChart(125,45),
      tank: new WW.Data.DamageChart(105,8),
      mediumTank: new WW.Data.DamageChart(75,1),
      neoTank: new WW.Data.DamageChart(55,1),
      apc: new WW.Data.DamageChart(125,45),
      artillery: new WW.Data.DamageChart(115,45),
      rockets: new WW.Data.DamageChart(125,55),
      antiAir: new WW.Data.DamageChart(115,7),
      missiles: new WW.Data.DamageChart(125,35),
      fighter: null,
      bomber: null,
      bCopter: new WW.Data.DamageChart(22,12),
      tCopter: new WW.Data.DamageChart(55,45),
      battleship: new WW.Data.DamageChart(15,null),
      cruiser: new WW.Data.DamageChart(40,null),
      lander: new WW.Data.DamageChart(50,null),
      submarine: new WW.Data.DamageChart(15,null),
    };
    this.image = WW.Controllers.ImageManager.loadedImages.neoTank[team];
    this.ammo = 9;
    this.range = [1];
  }
};