WW.Data.Tiles = {
  dataset: {
    plain: {
      id: 0,
      img: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 0, 0, 16, 16),
    },
    sea: {
      id: 1,
      img: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 0, 32, 16, 16),
    },
    mountain: {
      id: 2,
      img: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 0, 96, 16, 32),
    },
    wood: {
      id: 3,
      img: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 0, 48, 16, 16),
    },
    river: {
      id: 3,
      img: {
        fourWays: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 0, 0, 16, 16),
        threeWaysUp: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 0, 0, 16, 16),
        threeWaysDown: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 0, 0, 16, 16),
        threeWaysRight: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 0, 0, 16, 16),
        threeWaysLeft: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 0, 0, 16, 16),
        twoWaysUpRight: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 0, 0, 16, 16),
        twoWaysUpLeft: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 0, 0, 16, 16),
        twoWaysDownRight: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 0, 0, 16, 16),
        twoWaysDownLeft: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 0, 0, 16, 16),
        horizontal: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 0, 0, 16, 16),
        vertical: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 0, 0, 16, 16),
      },
    },
    shoal: {
      id: 4,
      img: {

      },
    },
    reef: {
      id: 5,
      img: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 0, 16, 16, 16)
    },
    road: {
      id: 6,
      img: {
        fourWays: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 16, 32, 16, 16),
        threeWaysUp: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 32, 96, 16, 16),
        threeWaysDown: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 16, 96, 16, 16),
        threeWaysRight: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 16, 80, 16, 16),
        threeWaysLeft: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 32, 80, 16, 16),
        twoWaysUpRight: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 16, 64, 16, 16),
        twoWaysUpLeft: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 32, 64, 16, 16),
        twoWaysDownRight: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 16, 112, 16, 16),
        twoWaysDownLeft: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 32, 112, 16, 16),
        horizontal: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 16, 0, 16, 16),
        vertical: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 16, 16, 16, 16),
      },
    },
    bridge: {
      id: 7,
      img: {
        horizontal: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 32, 0, 16, 16),
        vertical: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/terrain.png', 32, 16, 16, 16),
      },
    },
    hq: {
      id: 8,
      img: {
        red: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/red-buildings.png', 0, 3, 16, 32),
        blue: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/blue-buildings.png', 0, 2, 16, 32),
        yellow: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/yellow-buildings.png', 0, 2, 16, 32),
        green: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/green-buildings.png', 0, 2, 16, 32),
        black: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/black-buildings.png', 0, 2, 16, 32),
        white: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/black-buildings.png', 0, 2, 16, 32),
      }
    },
    city: {
      id: 9,
      img: {
        red: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/red-buildings.png', 0, 174, 16, 20),
        blue: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/blue-buildings.png', 0, 174, 16, 20),
        yellow: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/yellow-buildings.png', 0, 174, 16, 20),
        green: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/green-buildings.png', 0, 174, 16, 20),
        black: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/black-buildings.png', 0, 38, 16, 20),
        white: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/white-buildings.png', 0, 0, 16, 20),
      },
    },
    base: {
      id: 10,
      img: {
        red: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/red-buildings.png', 0, 198, 16, 16),
        blue: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/blue-buildings.png', 0, 197, 16, 16),
        yellow: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/yellow-buildings.png', 0, 197, 16, 16),
        green: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/green-buildings.png', 0, 197, 16, 16),
        black: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/black-buildings.png', 0, 62, 16, 16),
        white: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/white-buildings.png', 0, 23, 16, 16),
      },
    },
    airport: {
      id: 11,
      img: {
        red: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/red-buildings.png', 0, 218, 16, 18),
        blue: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/blue-buildings.png', 0, 217, 16, 18),
        yellow: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/yellow-buildings.png', 0, 217, 16, 18),
        green: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/green-buildings.png', 0, 217, 16, 18),
        black: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/black-buildings.png', 0, 82, 16, 18),
        white: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/white-buildings.png', 0, 42, 16, 18),
      }
    },
    port: {
      id: 12,
      img: {
        red: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/red-buildings.png', 0, 240, 16, 20),
        blue: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/blue-buildings.png', 0, 239, 16, 20),
        yellow: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/yellow-buildings.png', 0, 239, 16, 20),
        green: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/green-buildings.png', 0, 239, 16, 20),
        black: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/black-buildings.png', 0, 104, 16, 20),
        white: new WW.Data.ImageCoord(WW.Config.ROOT + 'assets/sprites/white-buildings.png', 0, 64, 16, 20),
      }
    },
  },
  getTileById: function(id){
    for(let tile in this.dataset){
      if(this.dataset[tile].id === id){
        return {name: tile, props: this.dataset[tile]};
      }
    }
    return false;
  },
};