describe('Unit class tests', function(){
  let unit;
  
  beforeEach(function(){
    unit = new Unit();
  });

  it('should be defined a Unit class', function(){
    expect(unit instanceof Unit).toBe(true);
  });

  describe('defined properties', function(){
    it('should have a cost', function(){
      expect(unit.cost).not.toBe(undefined);
    });
    it('should have a move type', function(){
      expect(unit.moveType).not.toBe(undefined);
    });
    it('should have an attack range', function(){
      expect(unit.range).not.toBe(undefined);
    });
    it('should have a vision', function(){
      expect(unit.vision).not.toBe(undefined);
    });
    it('should have ammo', function(){
      expect(unit.ammo).not.toBe(undefined);
    });
    it('should have a movement', function(){
      expect(unit.movement).not.toBe(undefined);
    });
    it('should have a health', function(){
      expect(unit.health).not.toBe(undefined);
    });
    it('should have weapons',function(){
      expect(unit.weapons).not.toBe(undefined);
    });
    it('should have fuel', function(){
      expect(unit.fuel).not.toBe(undefined);
    });
    it('should have an image',function(){
      expect(unit.image).not.toBe(undefined);
    });
  });

  describe('appropiate type properties', function(){
    it('the cost should be a number', function(){
      expect(typeof unit.cost).toBe('number');
    });
    it('the moveType should be a string', function(){
      expect(typeof unit.moveType).toBe('string');
    });
    it('the vision should be a number', function(){
      expect(typeof unit.moveType).toBe('number');
    });
    it('the ammo should be a number', function(){
      expect(typeof unit.ammo).toBe('number');
    });
    it('the health should be a number', function(){
      expect(typeof unit.health).toBe('number');
    });
    it('the weapons should be an object',function(){
      expect(typeof unit.weapons).toBe('object');
    });
    it('the movement should be a number', function(){
      expect(typeof unit.movement).toBe('number');
    });
    it('the attack range should be an array', function(){
      expect(Array.isArray(unit.range)).toBe(true);
    });
    it('the attack range should have at least one element', function(){
      expect(unit.range.length >= 1).toBe(true);
    });
    it('the elements of the attack range should be a number', function(){
      expect(unit.range.every(e => typeof e === 'number')).toBe(true);
    });
    it('the fuel should be a number', function(){
      expect(typeof unit.fuel).toBe('number');
    });
  });

  describe('getters and setters defined', function(){
    it('should have a getCost method', function(){
      expect(unit.getCost).toBe('function');
    });
    it('should have a getMoveType method', function(){
      expect(unit.getMoveType).toBe('function');
    });
    it('should have a getVision method', function(){
      expect(unit.getVision).toBe('function');
    });
    it('should have a getAmmo method', function(){
      expect(unit.getAmmo).toBe('function');
    });
    it('should have a getHealth method', function(){
      expect(unit.getHealth).toBe('function');
    });
    it('should have a getWeapons method',function(){
      expect(unit.getWeapons).toBe('function');
    });
    it('should have a getMovement method', function(){
      expect(unit.getMovement).toBe('function');
    });
    it('should have a getRange method', function(){
      expect(unit.getRange).toBe('function');
    });
    it('should have a getFuel method', function(){
      expect(unit.getFuel).toBe('function');
    });

    it('should have a setCost method', function(){
      expect(unit.setCost).toBe('function');
    });
    it('should have a setMoveType method', function(){
      expect(unit.setMoveType).toBe('function');
    });
    it('should have a setVision method', function(){
      expect(unit.setVision).toBe('function');
    });
    it('should have a setAmmo method', function(){
      expect(unit.setAmmo).toBe('function');
    });
    it('should have a setHealth method', function(){
      expect(unit.setHealth).toBe('function');
    });
    it('should have a setWeapons method',function(){
      expect(unit.setWeapons).toBe('function');
    });
    it('should have a setMovement method', function(){
      expect(unit.setMovement).toBe('function');
    });
    it('should have a setRange method', function(){
      expect(unit.setRange).toBe('function');
    });
    it('should have a setFuel method', function(){
      expect(unit.setFuel).toBe('function');
    });
  });
  describe('getters should return appropiate type values', function(){
    beforeEach(function(){
      unit.cost = 2000;
      unit.moveType = 'treads';
      unit.vision = 3;
      unit.ammo = 9;
      unit.health = 100;
      unit.weapons = {
        primary: 'gun',
        secondary: null
      };
      unit.movement = 7;
      unit.range = [2, 3, 4, 5];
      unit.fuel = 55;
    });
    it('getCost method should return the unit cost', function(){
      expect(unit.getCost()).toBe(2000);
    });
    it('getMoveType method should return the unit move type', function(){
      expect(unit.getMoveType()).toBe('treads');
    });
    it('getVision method should return the unit vision', function(){
      expect(unit.getVision()).toBe(3);
    });
    it('getAmmo method should return the unit ammo', function(){
      expect(unit.getAmmo()).toBe(9);
    });
    it('getHealth method should return the unit health', function(){
      expect(unit.getHealth()).toBe(100);
    });
    it('getWeapons method should return the current unit weapons',function(){
      expect(unit.getWeapons()).toBe({primary: 'gun', secondary: null});
    });
    it('getWeapons method should be able to return the primary weapon',function(){
      expect(unit.getWeapons('primary')).toBe('gun');
    });
    it('getWeapons method should be able to return the secondary weapon',function(){
      expect(unit.getWeapons('secondary')).toBe(null);
    });
    it('getMovement method should return the unit movement', function(){
      expect(unit.getMovement()).toBe(7);
    });
    it('getRange method should return the range array', function(){
      expect(Array.isArray(unit.getRange())).toBe([2, 3, 4, 5]);
    });
    it('getFuel method should return the current unit fuel', function(){
      expect(unit.getFuel()).toBe(55);
    });

    it('setCost method should change the unit\'s cost', function(){
      unit.setCost(8000);
      expect(unit.cost).toBe(8000);
    });
    it('setMoveType method should change the unit\'s move type', function(){
      unit.setMoveType('air');
      expect(unit.moveType).toBe('air');
    });
    it('setVision method should change the unit\'s vision', function(){
      unit.setVision(2);
      expect(unit.moveType).toBe(2);
    });
    it('setAmmo method should change the unit\'s ammo', function(){
      unit.setAmmo(0);
      expect(unit.ammo).toBe(0);
    });
    it("setHealth method should change the unit's health",function(){
      unit.setHealth(66);
      expect(unit.health).toBe(66);
    });
    it("setWeapons method should change the unit's weapons",function(){
      unit.setWeapons('tires', 'gun');
      expect(unit.weapons).toBe({primary: 'tires', secondary: 'gun'});
    });
    it("setMovement method should change the unit's movement",function(){
      unit.setMovement(3);
      expect(unit.movement).toBe(3);
    });
    it("setRange method should change the unit's range",function(){
      unit.setRange([1]);
      expect(unit.range).toBe([1]);
    });
    it("setFuel method should change the unit's fuel",function(){
      unit.setFuel(2);
      expect(unit.fuel).toBe(2);
    });
    
  });
});