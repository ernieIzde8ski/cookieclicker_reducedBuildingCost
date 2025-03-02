// vim: colorcolumn=70,90
/**
 *
 *  It is my opinion that Cookie Clicker is a good game with poor
 *  gameplay, being too slow for "active" playstyles while the player
 *  misses out on many things (minigames, golden cookies, ...) by idling.
 *
 *
 *  The intention of this mod is to better support the active playstyle,
 *  by providing more frequent interaction opportunities, and to better
 *  support the inactive playstyle, by providing more chances to idle.
 *
 *  TODO: After experimenting with priceIncrease and HCfactor
 *        to figure out what feels "fair", implement a slider, so
 *        the player can decide for themselves if they want
 *        a faster game.
 *
 *        We'll pro8a8ly want CCSE to do this.
 *
 *  TODO: when this mod is more broad, rename. I think "Rebalancing
 *        Act" would be a nice one.
 *
 *  TODO: Rebalance upgrade prices.
 *      - A very rough implementation could simply adjust their base
 *        prices relative to the change in `Game.priceIncrease`.
 *      - A nicer implementation could then "round" it to numbers
 *        matching patterns like `[123456789]+|[15]0+`
 *
 *  TODO: Adjust sugar lump growth rate. Slightly shorter harvest time,
 *        much faster maturation & ripen time.
 *
 *  TODO: Adjust minigames. Minigames could be great to expand the lifespan of the game!
 *        If only they weren't so goddamn useless and/or inconvenient.
 *
 *  TODO: Adjust default priceIncrease and HCfactor back, may8e?
 *        Once the rest of the game is balanced in such a way
 *        that this feels fair.
 *
 *  TODO: Move all of these TODOs to GitHub issues.
 **/
class ReducedBuildingCost implements Mod {
  dir!: string;

  init() {
    // Values:
    // - 1.075: uncomfortably fast
    // - 1.09: reasonably fast
    // - 1.15: slow; default value.
    Game.priceIncrease = 1.09;

    // Values:
    // - 1.5: EXTREMELY fast. Do not use.
    //        At this value, I beat the game in about three days.
    // - 2.0: fast. Needs testing.
    // - 3.0: slow; default value.
    Game.HCfactor = 2.0;
  }
}

Game.registerMod("reducedBuildingCost", new ReducedBuildingCost());
