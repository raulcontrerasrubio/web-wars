WW.Data.Layouts = {
  test: {
    grid: [
      //0  1  2  3  4  5  6  7  8  9
      [ 0, 0, 6, 6, 6, 6, 6, 6, 6, 6,], // 0
      [11, 8, 9, 0, 0,13,13,13,13, 6,], // 1
      [10, 9,12, 1, 1,13, 7,13,13, 6,], // 2
      [ 0, 0, 2, 1, 1,13, 3, 3,13, 6,], // 3
      [ 0, 0,13, 0, 1,13, 0, 0, 0,11,], // 4
      [ 0, 0,13, 1, 1, 4, 0, 0, 8, 9,], // 5
      [ 0, 0,13, 5, 1,12, 0, 0,10, 9,], // 6
    ],
    buildings: [
      new WW.Data.Buildings.HQ(1, 1, 'red'),
      new WW.Data.Buildings.HQ(8, 5, 'black'),
      new WW.Data.Buildings.City(2, 1, 'red'),
      new WW.Data.Buildings.City(1, 2, 'red'),
      new WW.Data.Buildings.City(9, 5, 'black'),
      new WW.Data.Buildings.City(9, 6, 'black'),
      new WW.Data.Buildings.Base(0, 2, 'red'),
      new WW.Data.Buildings.Base(8, 6, 'black'),
      new WW.Data.Buildings.Airport(0, 1, 'red'),
      new WW.Data.Buildings.Airport(9, 4, 'black'),
      new WW.Data.Buildings.Port(2, 2, 'red'),
      new WW.Data.Buildings.Port(5, 6, 'black'),

    ],
  },
  medium: {
    grid: [
      //0 1  2  3  4  5  6  7  8  9 10 11 12
      [0, 0, 0, 0, 0, 0, 0,11, 0, 0, 9, 9, 9,], //0
      [9, 8,10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], //1
      [9, 0,10, 0, 0, 9, 9, 0, 0, 0, 0,10, 0,], //2
      [9, 0,11, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0,], //3
      [0, 0, 0, 0, 0,10, 0, 0, 0, 0, 0, 0, 0,], //4
    ],
    buildings: [
      new WW.Data.Buildings.HQ(1, 1, 'red'),
      new WW.Data.Buildings.HQ(11, 3, 'black'),
      new WW.Data.Buildings.City(0, 1, 'red'),
      new WW.Data.Buildings.City(0, 2, 'red'),
      new WW.Data.Buildings.City(0, 3, 'black'),
      new WW.Data.Buildings.City(10, 0, 'black'),
      new WW.Data.Buildings.City(11, 0, 'black'),
      new WW.Data.Buildings.City(12, 0, 'black'),
      new WW.Data.Buildings.Base(2, 1, 'red'),
      new WW.Data.Buildings.Base(2, 2, 'red'),
      new WW.Data.Buildings.Base(11, 2, 'black'),
      new WW.Data.Buildings.Airport(2, 3, 'red'),

      new WW.Data.Buildings.Airport(7, 0, 'white'),
      new WW.Data.Buildings.City(6, 2, 'white'),
      new WW.Data.Buildings.City(5, 2, 'white'),
      
      new WW.Data.Buildings.Base(5, 4, 'white'),
    ],
    // units: [
    //   new WW.Components.Team('red', [
    //     new WW.Data.Units.Infantry(11, 1, 'red'),
    //     new WW.Data.Units.Mech(6, 0, 'red'),
    //     new WW.Data.Units.Infantry(0, 3, 'red'),
    //     new WW.Data.Units.Recon(6, 4, 'red'),
    //   ]),
    //   new WW.Components.Team('black', [
    //     new WW.Data.Units.Infantry(7, 2, 'black'),
    //     new WW.Data.Units.Mech(2, 2, 'black'),
    //     new WW.Data.Units.Tank(5, 4, 'black'),
    //   ]),
    // ],
  },
  big: {
    grid: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 4, 1, 1, 1, 1, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 4, 1, 1, 1, 1, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 9, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 9, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 9, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 11, 11, 11, 11, 11, 11, 11, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 11, 11, 11, 11, 11, 11, 11, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 9, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ],
    buildings: [
      new WW.Data.Buildings.HQ(5, 1, 'red'),
      new WW.Data.Buildings.HQ(1, 28, 'yellow'),
      new WW.Data.Buildings.HQ(33, 10, 'black'),
      new WW.Data.Buildings.HQ(45, 5, 'blue'),
      new WW.Data.Buildings.HQ(45, 25, 'green'),

      new WW.Data.Buildings.City(1, 2, 'green'),
      new WW.Data.Buildings.City(1, 22, 'red'),
      new WW.Data.Buildings.City(4, 9, 'blue'),
      new WW.Data.Buildings.City(4, 10, 'yellow'),
      new WW.Data.Buildings.City(4, 11, 'green'),
      new WW.Data.Buildings.City(5, 9, 'red'),
      new WW.Data.Buildings.City(5, 10, 'white'),
      new WW.Data.Buildings.City(5, 11, 'white'),
      new WW.Data.Buildings.City(6, 9, 'white'),
      new WW.Data.Buildings.City(6, 10, 'red'),
      new WW.Data.Buildings.City(6, 11, 'white'),
      new WW.Data.Buildings.City(7, 9, 'green'),
      new WW.Data.Buildings.City(7, 10, 'yellow'),
      new WW.Data.Buildings.City(7, 11, 'yellow'),
      new WW.Data.Buildings.City(8, 9, 'black'),
      new WW.Data.Buildings.City(8, 10, 'blue'),
      new WW.Data.Buildings.City(8, 11, 'red'),
      new WW.Data.Buildings.City(20, 23, 'green'),
      new WW.Data.Buildings.City(34, 15, 'blue'),
      new WW.Data.Buildings.City(41, 19, 'red'),
      new WW.Data.Buildings.City(46, 4, 'black'),
      new WW.Data.Buildings.City(34, 3, 'black'),

      new WW.Data.Buildings.Base(5, 22, 'red'),
      new WW.Data.Buildings.Base(6, 22, 'blue'),
      new WW.Data.Buildings.Base(7, 22, 'green'),
      new WW.Data.Buildings.Base(8, 22, 'yellow'),
      new WW.Data.Buildings.Base(9, 22, 'white'),
      new WW.Data.Buildings.Base(10, 22, 'blue'),
      new WW.Data.Buildings.Base(11, 22, 'red'),
      new WW.Data.Buildings.Base(12, 22, 'black'),

      new WW.Data.Buildings.Airport(40, 13, 'yellow'),
      new WW.Data.Buildings.Airport(41, 13, 'red'),
      new WW.Data.Buildings.Airport(42, 13, 'blue'),
      new WW.Data.Buildings.Airport(43, 13, 'red'),
      new WW.Data.Buildings.Airport(44, 13, 'white'),
      new WW.Data.Buildings.Airport(45, 13, 'green'),
      new WW.Data.Buildings.Airport(46, 13, 'black'),
      new WW.Data.Buildings.Airport(47, 13, 'white'),
      new WW.Data.Buildings.Airport(40, 14, 'blue'),
      new WW.Data.Buildings.Airport(41, 14, 'black'),
      new WW.Data.Buildings.Airport(42, 14, 'blue'),
      new WW.Data.Buildings.Airport(43, 14, 'white'),
      new WW.Data.Buildings.Airport(44, 14, 'yellow'),
      new WW.Data.Buildings.Airport(45, 14, 'red'),
      new WW.Data.Buildings.Airport(46, 14, 'green'),
      new WW.Data.Buildings.Airport(47, 14, 'black'),

      new WW.Data.Buildings.Port(18, 8, 'black'),
      new WW.Data.Buildings.Port(19, 8, 'yellow'),
      new WW.Data.Buildings.Port(20, 8, 'red'),
      new WW.Data.Buildings.Port(21, 8, 'green'),
      new WW.Data.Buildings.Port(22, 8, 'red'),
      new WW.Data.Buildings.Port(23, 8, 'blue'),
      new WW.Data.Buildings.Port(24, 8, 'black'),
      new WW.Data.Buildings.Port(25, 8, 'white'),
      new WW.Data.Buildings.Port(26, 8, 'white'),
      new WW.Data.Buildings.Port(27, 8, 'yellow'),
    ],
    // units: [
    //   new WW.Components.Team('blue', [
    //     new WW.Data.Units.Infantry(4, 1, 'blue'),
    //     new WW.Data.Units.Mech(6, 8, 'blue'),
    //     new WW.Data.Units.APC(6, 9, 'blue'),
    //     new WW.Data.Units.Recon(12, 9, 'blue'),
    //     new WW.Data.Units.Tank(7, 5, 'blue'),
    //     new WW.Data.Units.MediumTank(2, 3, 'blue'),
    //     new WW.Data.Units.NeoTank(2, 21, 'blue'),
    //     new WW.Data.Units.AntiAir(8, 27, 'blue'),
    //     new WW.Data.Units.Artillery(9, 24, 'blue'),
    //     new WW.Data.Units.Rockets(18, 22, 'blue'),
    //     new WW.Data.Units.Missiles(37, 22, 'blue'),
    //     new WW.Data.Units.Fighter(30, 12, 'blue'),
    //     new WW.Data.Units.Bomber(21, 11, 'blue'),
    //     new WW.Data.Units.BCopter(18, 6, 'blue'),
    //     new WW.Data.Units.TCopter(12, 1, 'blue'),
    //     new WW.Data.Units.Battleship(18, 9, 'blue'),
    //     new WW.Data.Units.Cruiser(20, 15, 'blue'),
    //     new WW.Data.Units.Lander(28, 14, 'blue'),
    //     new WW.Data.Units.Submarine(28, 18, 'blue'),
    //   ]),
    //   new WW.Components.Team('red', [
    //     new WW.Data.Units.Infantry(54, 17, 'red'),
    //     new WW.Data.Units.Mech(50, 12, 'red'),
    //     new WW.Data.Units.APC(41, 6, 'red'),
    //     new WW.Data.Units.Recon(34, 4, 'red'),
    //     new WW.Data.Units.Tank(28, 7, 'red'),
    //     new WW.Data.Units.MediumTank(19, 1, 'red'),
    //     new WW.Data.Units.NeoTank(14, 3, 'red'),
    //     new WW.Data.Units.AntiAir(8, 1, 'red'),
    //     new WW.Data.Units.Artillery(2, 7, 'red'),
    //     new WW.Data.Units.Rockets(3, 12, 'red'),
    //     new WW.Data.Units.Missiles(6, 15, 'red'),
    //     new WW.Data.Units.Fighter(11, 13, 'red'),
    //     new WW.Data.Units.Bomber(10, 5, 'red'),
    //     new WW.Data.Units.BCopter(3, 4, 'red'),
    //     new WW.Data.Units.TCopter(2, 19, 'red'),
    //     new WW.Data.Units.Battleship(23, 18, 'red'),
    //     new WW.Data.Units.Cruiser(29, 16, 'red'),
    //     new WW.Data.Units.Lander(29, 14, 'red'),
    //     new WW.Data.Units.Submarine(25, 11, 'red'),
    //   ]),
    //   new WW.Components.Team('green', [
    //     new WW.Data.Units.Infantry(7, 16, 'green'),
    //     new WW.Data.Units.Mech(8, 22, 'green'),
    //     new WW.Data.Units.APC(7, 28, 'green'),
    //     new WW.Data.Units.Recon(12, 28, 'green'),
    //     new WW.Data.Units.Tank(19, 27, 'green'),
    //     new WW.Data.Units.MediumTank(25, 31, 'green'),
    //     new WW.Data.Units.NeoTank(28, 22, 'green'),
    //     new WW.Data.Units.AntiAir(32, 27, 'green'),
    //     new WW.Data.Units.Artillery(38, 31, 'green'),
    //     new WW.Data.Units.Rockets(45, 29, 'green'),
    //     new WW.Data.Units.Missiles(49, 27, 'green'),
    //     new WW.Data.Units.Fighter(2, 6, 'green'),
    //     new WW.Data.Units.Bomber(2, 4, 'green'),
    //     new WW.Data.Units.BCopter(7, 6, 'green'),
    //     new WW.Data.Units.TCopter(15, 5, 'green'),
    //     new WW.Data.Units.Battleship(20, 16, 'green'),
    //     new WW.Data.Units.Cruiser(27, 16, 'green'),
    //     new WW.Data.Units.Lander(27, 20, 'green'),
    //     new WW.Data.Units.Submarine(24, 18, 'green'),
    //   ]),
    //   new WW.Components.Team('yellow', [
    //     new WW.Data.Units.Infantry(33, 12, 'yellow'),
    //     new WW.Data.Units.Mech(41, 15, 'yellow'),
    //     new WW.Data.Units.APC(47, 9, 'yellow'),
    //     new WW.Data.Units.Recon(2, 12, 'yellow'),
    //     new WW.Data.Units.Tank(10, 22, 'yellow'),
    //     new WW.Data.Units.MediumTank(13, 12, 'yellow'),
    //     new WW.Data.Units.NeoTank(15, 9, 'yellow'),
    //     new WW.Data.Units.AntiAir(16, 13, 'yellow'),
    //     new WW.Data.Units.Artillery(13, 18, 'yellow'),
    //     new WW.Data.Units.Rockets(10, 18, 'yellow'),
    //     new WW.Data.Units.Missiles(1, 19, 'yellow'),
    //     new WW.Data.Units.Fighter(16, 1, 'yellow'),
    //     new WW.Data.Units.Bomber(17, 9, 'yellow'),
    //     new WW.Data.Units.BCopter(14, 13, 'yellow'),
    //     new WW.Data.Units.TCopter(23, 0, 'yellow'),
    //     new WW.Data.Units.Battleship(29, 8, 'yellow'),
    //     new WW.Data.Units.Cruiser(28, 13, 'yellow'),
    //     new WW.Data.Units.Lander(24, 18, 'yellow'),
    //     new WW.Data.Units.Submarine(21, 21, 'yellow'),
    //   ]),
    //   new WW.Components.Team('black', [
    //     new WW.Data.Units.Infantry(5, 2, 'black'),
    //     new WW.Data.Units.Mech(4, 7, 'black'),
    //     new WW.Data.Units.APC(43, 26, 'black'),
    //     new WW.Data.Units.Recon(41, 19, 'black'),
    //     new WW.Data.Units.Tank(35, 19, 'black'),
    //     new WW.Data.Units.MediumTank(46, 9, 'black'),
    //     new WW.Data.Units.NeoTank(3, 7, 'black'),
    //     new WW.Data.Units.AntiAir(2, 1, 'black'),
    //     new WW.Data.Units.Artillery(0, 10, 'black'),
    //     new WW.Data.Units.Rockets(0, 27, 'black'),
    //     new WW.Data.Units.Missiles(4, 19, 'black'),
    //     new WW.Data.Units.Fighter(19, 13, 'black'),
    //     new WW.Data.Units.Bomber(21, 20, 'black'),
    //     new WW.Data.Units.BCopter(14, 13, 'black'),
    //     new WW.Data.Units.TCopter(28, 19, 'black'),
    //     new WW.Data.Units.Battleship(24, 14, 'black'),
    //     new WW.Data.Units.Cruiser(27, 10, 'black'),
    //     new WW.Data.Units.Lander(25, 20, 'black'),
    //     new WW.Data.Units.Submarine(19, 21, 'black'),
    //   ]),
    // ],
  },
  unitTest: {
    grid: [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
    ],
    buildings: [],
    // units: [
    //   new WW.Components.Team('red', [
    //     new WW.Data.Units.Infantry(0, 0, 'red'),
    //     new WW.Data.Units.Mech(0, 1, 'red'),
    //     new WW.Data.Units.APC(1, 0, 'red'),
    //     new WW.Data.Units.Recon(1, 1, 'red'),
    //     new WW.Data.Units.Tank(2, 0, 'red'),
    //     new WW.Data.Units.MediumTank(2, 1, 'red'),
    //     new WW.Data.Units.NeoTank(3, 0, 'red'),
    //     new WW.Data.Units.AntiAir(3, 1, 'red'),
    //     new WW.Data.Units.Artillery(4, 0, 'red'),
    //     new WW.Data.Units.Rockets(4, 1, 'red'),
    //     new WW.Data.Units.Missiles(5, 0, 'red'),
    //     new WW.Data.Units.Fighter(5, 1, 'red'),
    //     new WW.Data.Units.Bomber(6, 0, 'red'),
    //     new WW.Data.Units.BCopter(6, 1, 'red'),
    //     new WW.Data.Units.TCopter(7, 0, 'red'),
    //     new WW.Data.Units.Battleship(7, 1, 'red'),
    //     new WW.Data.Units.Cruiser(8, 0, 'red'),
    //     new WW.Data.Units.Lander(8, 1, 'red'),
    //     new WW.Data.Units.Submarine(9, 0, 'red'),
    //   ]),
    //   new WW.Components.Team('blue', [
    //     new WW.Data.Units.Infantry(0, 2, 'blue'),
    //     new WW.Data.Units.Mech(0, 3, 'blue'),
    //     new WW.Data.Units.APC(1, 2, 'blue'),
    //     new WW.Data.Units.Recon(1, 3, 'blue'),
    //     new WW.Data.Units.Tank(2, 2, 'blue'),
    //     new WW.Data.Units.MediumTank(2, 3, 'blue'),
    //     new WW.Data.Units.NeoTank(3, 2, 'blue'),
    //     new WW.Data.Units.AntiAir(3, 3, 'blue'),
    //     new WW.Data.Units.Artillery(4, 2, 'blue'),
    //     new WW.Data.Units.Rockets(4, 3, 'blue'),
    //     new WW.Data.Units.Missiles(5, 2, 'blue'),
    //     new WW.Data.Units.Fighter(5, 3, 'blue'),
    //     new WW.Data.Units.Bomber(6, 2, 'blue'),
    //     new WW.Data.Units.BCopter(6, 3, 'blue'),
    //     new WW.Data.Units.TCopter(7, 2, 'blue'),
    //     new WW.Data.Units.Battleship(7, 3, 'blue'),
    //     new WW.Data.Units.Cruiser(8, 2, 'blue'),
    //     new WW.Data.Units.Lander(8, 3, 'blue'),
    //     new WW.Data.Units.Submarine(9, 2, 'blue'),
    //   ]),
    //   new WW.Components.Team('yellow', [
    //     new WW.Data.Units.Infantry(0, 4, 'yellow'),
    //     new WW.Data.Units.Mech(0, 5, 'yellow'),
    //     new WW.Data.Units.APC(1, 4, 'yellow'),
    //     new WW.Data.Units.Recon(1, 5, 'yellow'),
    //     new WW.Data.Units.Tank(2, 4, 'yellow'),
    //     new WW.Data.Units.MediumTank(2, 5, 'yellow'),
    //     new WW.Data.Units.NeoTank(3, 4, 'yellow'),
    //     new WW.Data.Units.AntiAir(3, 5, 'yellow'),
    //     new WW.Data.Units.Artillery(4, 4, 'yellow'),
    //     new WW.Data.Units.Rockets(4, 5, 'yellow'),
    //     new WW.Data.Units.Missiles(5, 4, 'yellow'),
    //     new WW.Data.Units.Fighter(5, 5, 'yellow'),
    //     new WW.Data.Units.Bomber(6, 4, 'yellow'),
    //     new WW.Data.Units.BCopter(6, 5, 'yellow'),
    //     new WW.Data.Units.TCopter(7, 4, 'yellow'),
    //     new WW.Data.Units.Battleship(7, 5, 'yellow'),
    //     new WW.Data.Units.Cruiser(8, 4, 'yellow'),
    //     new WW.Data.Units.Lander(8, 5, 'yellow'),
    //     new WW.Data.Units.Submarine(9, 4, 'yellow'),
    //   ]),
    //   new WW.Components.Team('green', [
    //     new WW.Data.Units.Infantry(0, 6, 'green'),
    //     new WW.Data.Units.Mech(0, 7, 'green'),
    //     new WW.Data.Units.APC(1, 6, 'green'),
    //     new WW.Data.Units.Recon(1, 7, 'green'),
    //     new WW.Data.Units.Tank(2, 6, 'green'),
    //     new WW.Data.Units.MediumTank(2, 7, 'green'),
    //     new WW.Data.Units.NeoTank(3, 6, 'green'),
    //     new WW.Data.Units.AntiAir(3, 7, 'green'),
    //     new WW.Data.Units.Artillery(4, 6, 'green'),
    //     new WW.Data.Units.Rockets(4, 7, 'green'),
    //     new WW.Data.Units.Missiles(5, 6, 'green'),
    //     new WW.Data.Units.Fighter(5, 7, 'green'),
    //     new WW.Data.Units.Bomber(6, 6, 'green'),
    //     new WW.Data.Units.BCopter(6, 7, 'green'),
    //     new WW.Data.Units.TCopter(7, 6, 'green'),
    //     new WW.Data.Units.Battleship(7, 7, 'green'),
    //     new WW.Data.Units.Cruiser(8, 6, 'green'),
    //     new WW.Data.Units.Lander(8, 7, 'green'),
    //     new WW.Data.Units.Submarine(9, 6, 'green'),
    //   ]),
    //   new WW.Components.Team('black', [
    //     new WW.Data.Units.Infantry(0, 8, 'black'),
    //     new WW.Data.Units.Mech(0, 9, 'black'),
    //     new WW.Data.Units.APC(1, 8, 'black'),
    //     new WW.Data.Units.Recon(1, 9, 'black'),
    //     new WW.Data.Units.Tank(2, 8, 'black'),
    //     new WW.Data.Units.MediumTank(2, 9, 'black'),
    //     new WW.Data.Units.NeoTank(3, 8, 'black'),
    //     new WW.Data.Units.AntiAir(3, 9, 'black'),
    //     new WW.Data.Units.Artillery(4, 8, 'black'),
    //     new WW.Data.Units.Rockets(4, 9, 'black'),
    //     new WW.Data.Units.Missiles(5, 8, 'black'),
    //     new WW.Data.Units.Fighter(5, 9, 'black'),
    //     new WW.Data.Units.Bomber(6, 8, 'black'),
    //     new WW.Data.Units.BCopter(6, 9, 'black'),
    //     new WW.Data.Units.TCopter(7, 8, 'black'),
    //     new WW.Data.Units.Battleship(7, 9, 'black'),
    //     new WW.Data.Units.Cruiser(8, 8, 'black'),
    //     new WW.Data.Units.Lander(8, 9, 'black'),
    //     new WW.Data.Units.Submarine(9, 8, 'black'),
    //   ]),
    // ],
  }

};