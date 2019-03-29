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
    it('should have a health', function(){
      expect(unit.health).not.toBe(undefined);
    });
    it('should have a primary weapon', function(){
      expect(unit.primaryWeapon).not.toBe(undefined);
    });
    it('should have a secondary weapon', function(){
      expect(unit.secondaryWeapon).not.toBe(undefined);
    });
    it('should have a movement', function(){
      expect(unit.movement).not.toBe(undefined);
    });
    it('should have an attack range', function(){
      expect(unit.range).not.toBe(undefined);
    });
    it('should have fuel', function(){
      expect(unit.fuel).not.toBe(undefined);
    });
  });
  describe('appropiate type properties', function(){
    it('the cost should be a number', function(){
      expect(typeof unit.cost).toBe('number');
    });
    it('the health should be a number', function(){
      expect(typeof unit.health).toBe('number');
    });
    it('the primary weapon should be a string or null', function(){
      expect(typeof unit.primaryWeapon).toBe('string' || 'null');
    });
    it('the secondary weapon should be a string or null', function(){
      expect(typeof unit.secondaryWeapon).toBe('string' || 'null');
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
    it('should have a getHealth method', function(){
      expect(unit.getHealth).toBe('function');
    });
    it('should have a getPrimaryWeapon method', function(){
      expect(unit.getPrimaryWeapon).toBe('function');
    });
    it('should have a getSecondaryWeapon method', function(){
      expect(unit.getSecondaryWeapon).toBe('function');
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
    it('should have a setHealth method', function(){
      expect(unit.setHealth).toBe('function');
    });
    it('should have a setPrimaryWeapon method', function(){
      expect(unit.setPrimaryWeapon).toBe('function');
    });
    it('should have a setSecondaryWeapon method', function(){
      expect(unit.setSecondaryWeapon).toBe('function');
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
      unit.cost = 100;
      unit.health = 100;
      unit.primaryWeapon = 'gun';
      unit.secondaryWeapon = 'none';
      unit.health = 100;
      unit.health = 100;
    });
    it('getCost method should return a number', function(){
      expect(unit.getCost()).toBe(2000);
    });
    it('getHealth method should return a number', function(){
      expect(unit.getHealth()).toBe(100);
    });
    it('getPrimaryWeapon method should return a string or null', function(){
      expect(unit.getPrimaryWeapon()).toBe('string' || null);
    });
    it('getSecondaryWeapon method should return a string or null', function(){
      expect(unit.getSecondaryWeapon()).toBe('string' || null);
    });
    before(function(){
      unit.primaryWeapon = null;
    });
    it('getPrimaryWeapon method should return null', function(){
      expect(unit.getPrimaryWeapon()).toBe(null);
    });

    after(function(){
      unit.primaryWeapon = 'gun';
    });
    before(function(){
      unit.secondaryWeapon = null;
    });
    it('getSecondaryWeapon method should return or null', function(){
      expect(unit.getSecondaryWeapon()).toBe(null);
    });
    after(function(){
      unit.secondaryWeapon = 'gun';
    });
    it('getMovement method should return a number', function(){
      expect(unit.getMovement()).toBe('number');
    });
    it('getRange method should return an array', function(){
      expect(Array.isArray(unit.getRange())).toBe(true);
    });
    it('getFuel method should return a number', function(){
      expect(unit.getFuel()).toBe('number');
    });
    it('setCost method should change the unit\'s cost', function(){
      unit.setCost(8000);
      expect(unit.cost).toBe(8000);
    });
  });
});