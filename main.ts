class ReducedBuildingCost implements Mod {
  dir!: string;

  init() {
    // This value determines the exponential growth in building cost.
    // Its original value was 1.15;
    Game.priceIncrease = 1.09;

    // This value determines the cost of heavenly cookies.
    // Its original value was 3.
    Game.HCfactor = 1.5;
  }
}

Game.registerMod("reducedBuildingCost", new ReducedBuildingCost());
