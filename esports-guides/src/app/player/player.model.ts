export enum Game {RocketLeague, LeagueOfLegends, CS:GO}
export enum Team {Cloud9, TSM, TeamLiquid}

export class Card {
  public name: Name;
  public game: Game;
  public team: Team;
  public mouse: Mouse;
  public keyboard: Keyboard;
  public headset: Headset;
  public monitor: Monitor;

  constructor(name: Name, game: Game, team: Team, mouse: Mouse, keyboard: Keyboard, headset: Headset, monitor: Monitor) {
    this.name = name;
    this.game = game;
    this.team = team;
    this.mouse = mouse;
    this.keyboard = keyboard;
    this.headset = headset;
    this.monitor = monitor;
  }
}
