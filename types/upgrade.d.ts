declare namespace Game {
  class Upgrade {
    id: number;
    name: string;
    dname: string;
    desc: string;
    baseDesc: string;
    basePrice: number;
    priceLumps: number;
    icon: Icon;
    iconFunction: number;
    buyFunction: Function;
    unlocked: number;
    bought: number;
    order: number;
    pool:
      | ""
      | "cookie"
      | "toggle"
      | "debug"
      | "prestige"
      | "prestigeDecor"
      | "tech"
      | "unused";
    power: number;
    vanilla: unknown;
    unlockAt: number;
    techUnlock: unknown[];
    parents: unknown[];
    type: "upgrade";
    tier: number;
    buildingTie: number;

    constructor(
      name: string,
      desc: string,
      price: number,
      icon: [number, number],
      buyFunction: Function,
    );

    priceFunc?(upgrade: typeof this): number;
  }

  /** Recalculates the upgrades you can buy. */
  function RebuildUpgrades(): any;

  let UpgradesN: number;
}
