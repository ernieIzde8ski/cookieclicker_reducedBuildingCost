declare interface Mod {
  dir: string;
  init?(): void;
  save?(): string;
  // TODO: check if this is _really_ ever undefined
  load?(data?: string): void;
}

type numbool = 0 | 1;
type Icon = [number, number];

declare namespace Game {
  class Achievement {
    baseDesc: string;
    buildingTie: object;
    click: Function;
    ddesc: string;
    desc: string;
    disabled: numbool;
    dname: string;
    icon: [number, number];
    id: number;
    name: string;
    order: number;
    pool: string;
    threshold: any;
    tier: any;
    vanilla: any;
    won: any;

    constructor(name: string, desc: string, icon: [number, number]);
  }

  function AddToLog(what: any): any;
  function Ascend(bypass: any): any;
  function Notify(
    message: string,
    sarg0: string,
    narg1: number,
    narg2: number,
  ): any;
  function registerMod(modID: string, mod: ReducedBuildingCost): any;

  let Achievements: Record<string, Achievement>;
  let AchievementsById: Record<number, Achievement>;
  let AchievementsN: number;
  let AchievementsOwned: number;

  let AllBGs: Array<Record<never, never>>;
  let AllMilks: Array<Record<never, never>>;

  let AscendBreakpoint: number;
  let AscendDragX: number;
  let AscendDragY: number;
  let AscendDragging: number;
  let AscendDuration: number;
  let AscendOffX: number;
  let AscendOffXT: number;
  let AscendOffY: number;
  let AscendOffYT: number;
  let AscendRefocus: Function;
  let AscendTimer: number;
  let AscendZoom: number;
  let AscendZoomT: number;

  let storeToRefresh: number;
  /** Rate of exponential growth in building prices.
   *
   * @defaultValue 1.15;
   **/
  let priceIncrease: number;
  let buyBulk: number;
  /** 1 for buy, -1 for sell. */
  let buyMode: -1 | 1;
  /** Used to undo changes from holding Shift or Ctrl. */
  let buyBulkOld: -1 | 1;
  /** Are we pressing Shift or Ctrl? */
  let buyBulkShortcut: number; //

  let effs: Record<string, numbool>;
  /**
   * Return the matching coefficient for variable with type `name`.
   * */
  function eff(name: string, def?: numbool): numbool;
}

declare const l: typeof document.getElementById;
declare function PlaySound(path: string, duration: number): void;
