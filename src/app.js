var Game;
class WebWars{
  constructor(){
    this.game = null;
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.root = this.canvas.getBoundingClientRect();
    this.canvas.width = 640;
    this.canvas.height = 320;
    this.panels = {
      settings: {
        width: 180,
        height: 120
      }
    };
    this.panels.panels = {
      left: QuickSettings.create(this.root.left, this.root.top, 'LeftPanel')
        .setHeight(this.canvas.height)
        .setWidth(this.panels.settings.width)
        .setDraggable(false)
        .setCollapsible()
        .hideAllTitles()
        .hide(),

      right: QuickSettings.create(this.root.left + this.canvas.width - this.panels.settings.width, this.root.top, 'RightPanel')
        .setHeight(this.canvas.height)
        .setWidth(this.panels.settings.width)
        .setDraggable(false)
        .setCollapsible(false)
        .hideAllTitles()
        .hide(),

      bottom: QuickSettings.create(this.root.left, this.root.top + this.canvas.height - this.panels.settings.height, 'BottomPanel')
        .setHeight(this.panels.settings.height)
        .setWidth(this.canvas.width)
        .setDraggable(false)
        .setCollapsible()
        .hideAllTitles()
        .hide(),

      top: QuickSettings.create(this.root.left, this.root.top, 'TopPanel')
        .setHeight(this.panels.settings.height)
        .setWidth(this.canvas.width)
        //.bindDropDown('Dropdown', ['item 1', 'item 2'], this)
        .bindBoolean('') // Bind to arrow keys with a selected index
        .setDraggable(false)
        .setCollapsible()
        .hideAllTitles()
        .hide(),
    }

    this.maps = [];
    this.selectedIndexMap = 0;

    this.cameras = [];
    this.selectedIndexCamera = 0;

  }

  gameLoop(){

    requestAnimationFrame(this.gameLoop);
  }

  reOffset(){
    this.root = this.canvas.getBoundingClientRect();
  }

  togglePanel(panel){
    switch(panel){
    case 'top':
      this.panels.panels[panel].toggleVisibility();
      break;
    case 'bottom':
      this.panels.panels[panel].toggleVisibility();
      break;
    case 'left':
      this.panels.panels[panel].toggleVisibility();
      break;
    case 'right':
      this.panels.panels[panel].toggleVisibility();
      break;
    }
  }
}

window.onload = function(){
  Game = new WebWars();
  window.scroll = Game.reOffset;
  window.onresize = Game.reOffset;
}

// Unit classes
class Unit{
  constructor(){
    this.cost = 0;
    this.movement = {
      tiles: 0,
      type: ''
    };
    this.range = null;
    this.ammo = null;
    this.fuel = 0;
    this.vision = 0;
  }
}

class LandUnit extends Unit{
  constructor(){
    super();
  }
}

class Infantry extends LandUnit{
  constructor(){
    super();
    this.cost = 1000;
    this.movement = {
      tiles: 3,
      type: 'infantry'
    };
    this.range = 1;
    this.ammo = null;
    this.fuel = 99;
    this.vision = 2;
  }
}

class Mech extends LandUnit{
  constructor(){
    super();
    this.cost = 3000;
    this.movement = {
      tiles: 2,
      type: 'mech'
    };
    this.range = 1;
    this.ammo = 3;
    this.fuel = 70;
    this.vision = 2;
  }
}

class Recon extends LandUnit{
  constructor(){
    super();
    this.cost = 4000;
    this.movement = {
      tiles: 8,
      type: 'tires'
    };
    this.range = 1;
    this.ammo = null;
    this.fuel = 80;
    this.vision = 5;
  }
}
class APC extends LandUnit{
  constructor(){
    super();
    this.cost = 5000;
    this.movement = {
      tiles: 6,
      type: 'treads'
    };
    this.range = null;
    this.ammo = null;
    this.fuel = 99;
    this.vision = 1;
  }
}
class Artillery extends LandUnit{
  constructor(){
    super();
    this.cost = 6000;
    this.movement = {
      tiles: 5,
      type: 'treads'
    };
    this.range = [2, 3];
    this.ammo = 9;
    this.fuel = 50;
    this.vision = 1;
  }
}
class Tank extends LandUnit{
  constructor(){
    super();
    this.cost = 7000;
    this.movement = {
      tiles: 6,
      type: 'treads'
    };
    this.range = 1;
    this.ammo = 9;
    this.fuel = 70;
    this.vision = 3;
  }
}
class AntiAirTank extends LandUnit{
  constructor(){
    super();
    this.cost = 8000;
    this.movement = {
      tiles: 6,
      type: 'treads'
    };
    this.range = 1;
    this.ammo = 9;
    this.fuel = 60;
    this.vision = 2;
  }
}

class Missiles extends LandUnit{
  constructor(){
    super();
    this.cost = 12000;
    this.movement = {
      tiles: 4,
      type: 'tires'
    };
    this.range = [3, 4, 5];
    this.ammo = 6;
    this.fuel = 50;
    this.vision = 5;
  }
}
class Rockets extends LandUnit{
  constructor(){
    super();
    this.cost = 15000;
    this.movement = {
      tiles: 5,
      type: 'tires'
    };
    this.range = [3, 4, 5];
    this.ammo = 6;
    this.fuel = 50;
    this.vision = 1;
  }
}
class MediumTank extends LandUnit{
  constructor(){
    super();
    this.cost = 16000;
    this.movement = {
      tiles: 5,
      type: 'treads'
    };
    this.range = 1;
    this.ammo = 8;
    this.fuel = 50;
    this.vision = 1;
  }
}
class NeoTank extends LandUnit{
  constructor(){
    super();
    this.cost = 22000;
    this.movement = {
      tiles: 6,
      type: 'treads'
    };
    this.range = 1;
    this.ammo = 9;
    this.fuel = 99;
    this.vision = 1;
  }
}
class MegaTank extends LandUnit{
  constructor(){
    super();
    this.cost = 28000;
    this.movement = {
      tiles: 3,
      type: 'infantry'
    };
    this.range = 1;
    this.ammo = null;
    this.fuel = 99;
    this.vision = 2;
  }
}

class NavalUnit extends Unit{
  constructor(){
    super();
  }
}

class BlackBoat extends NavalUnit{
  constructor(){
    super();
    this.cost = 7500;
    this.movement = {
      tiles: 7,
      type: 'ship'
    };
    this.range = null;
    this.ammo = null;
    this.fuel = 60;
    this.vision = 1;
  }
}
class Lander extends NavalUnit{
  constructor(){
    super();
    this.cost = 12000;
    this.movement = {
      tiles: 6,
      type: 'ship'
    };
    this.range = null;
    this.ammo = null;
    this.fuel = 99;
    this.vision = 1;
  }
}
class Cruiser extends NavalUnit{
  constructor(){
    super();
    this.cost = 18000;
    this.movement = {
      tiles: 6,
      type: 'ship'
    };
    this.range = 1;
    this.ammo = 9;
    this.fuel = 99;
    this.vision = 3;
  }
}
class Submarine extends NavalUnit{
  constructor(){
    super();
    this.cost = 20000;
    this.movement = {
      tiles: 5,
      type: 'ship'
    };
    this.range = 1;
    this.ammo = 6;
    this.fuel = 60;
    this.vision = 5;
  }
}
class Battleship extends NavalUnit{
  constructor(){
    super();
    this.cost = 28000;
    this.movement = {
      tiles: 5,
      type: 'ship'
    };
    this.range = [2, 3, 4, 5, 6];
    this.ammo = 9;
    this.fuel = 99;
    this.vision = 2;
  }
}

class AirUnit extends Unit{
  constructor(){
    super();
  }
}

class TransportCopter extends AirUnit{
  constructor(){
    this.cost = 5000;
    this.movement = {
      tiles: 6,
      type: 'air'
    };
    this.range = null;
    this.ammo = null;
    this.fuel = 99;
    this.vision = 2;
  }
}
class BattleCopter extends AirUnit{
  constructor(){
    this.cost = 9000;
    this.movement = {
      tiles: 6,
      type: 'air'
    };
    this.range = 1;
    this.ammo = 6;
    this.fuel = 99;
    this.vision = 3;
  }
}
class Fighter extends AirUnit{
  constructor(){
    this.cost = 20000;
    this.movement = {
      tiles: 9,
      type: 'air'
    };
    this.range = 1;
    this.ammo = 9;
    this.fuel = 99;
    this.vision = 2;
  }
}
class Bomber extends AirUnit{
  constructor(){
    this.cost = 22000;
    this.movement = {
      tiles: 7,
      type: 'air'
    };
    this.range = 1;
    this.ammo = 9;
    this.fuel = 99;
    this.vision = 2;
  }
}
class StealthFighter extends AirUnit{
  constructor(){
    this.cost = 24000;
    this.movement = {
      tiles: 6,
      type: 'air'
    };
    this.range = 1;
    this.ammo = 6;
    this.fuel = 60;
    this.vision = 4;
  }
}