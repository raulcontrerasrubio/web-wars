WW.Data.Tiles = {
  dataset: {
    plain: {
      id: 0,
      img: WW.Config.ROOT + 'assets/plain.bmp',
    },
    sea: {
      id: 1,
      img: '',
    },
    mountain: {
      id: 2,
      img: '',
    },
    wood: {
      id: 3,
      img: '',
    },
    river: {
      id: 3,
      img: {
        fourWays: '',
        threeWaysUp: '',
        threeWaysDown: '',
        threeWaysRight: '',
        threeWaysLeft: '',
        twoWaysUpRight: '',
        twoWaysUpLeft: '',
        twoWaysDownRight: '',
        twoWaysDownLeft: '',
        horizontal: '',
        vertical: '',
      },
    },
    shoal: {
      id: 4,
      img: {

      },
    },
    reef: {
      id: 5,
      img: '',
    },
    road: {
      id: 6,
      img: {
        fourWays: '',
        threeWaysUp: '',
        threeWaysDown: '',
        threeWaysRight: '',
        threeWaysLeft: '',
        twoWaysUpRight: '',
        twoWaysUpLeft: '',
        twoWaysDownRight: '',
        twoWaysDownLeft: '',
        horizontal: '',
        vertical: '',
      },
    },
    bridge: {
      id: 7,
      img: {
        horizontal: '',
        vertical: '',
      },
    },
    hq: {
      id: 8,
      img: {
        red: '',
        blue: '',
        yellow: '',
        green: '',
        black: '',
        white: '',
      }
    },
    city: {
      id: 9,
      img: {
        red: '',
        blue: '',
        yellow: '',
        green: '',
        black: '',
        white: '',
      },
    },
    base: {
      id: 10,
      img: {
        red: '',
        blue: '',
        yellow: '',
        green: '',
        black: '',
        white: '',
      },
    },
    airport: {
      id: 11,
      img: {
        red: '',
        blue: '',
        yellow: '',
        green: '',
        black: '',
        white: '',
      }
    },
    port: {
      id: 12,
      img: {
        red: '',
        blue: '',
        yellow: '',
        green: '',
        black: '',
        white: '',
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