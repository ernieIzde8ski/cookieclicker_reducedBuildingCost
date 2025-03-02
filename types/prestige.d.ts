declare namespace Game {
  /**
   * Determines the relationship between prestige and cookies.
   * If HCfactor goes up, heavenly cookies become valuable, but harder to obtain.
   *
   * @defaultValue 3
   * */
  let HCfactor: number;

  /** How much prestige [cookies] should land you.
   *
   * See `Game.HowManyCookiesReset` for more details.*/
  function HowMuchPrestige(cookies: number): number;

  /** How many cookies [chips] are worth.
   *
   * This function is the inverse of `Game.HowMuchPrestige`; that is,
   * if `cookies=chips**2`, then `chips=cookies**0.5`.*/
  function HowManyCookiesReset(chips: number): number;
}
