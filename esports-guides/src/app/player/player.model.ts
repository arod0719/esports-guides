export enum Game {RocketLeague, LeagueOfLegends, CSGO}
export enum Team {Cloud9, TSM, TeamLiquid}

export class Player {
  public name: string;
  public game: Game;
  public team: Team;
  public mouse: string;
  public keyboard: string;
  public headset: string;
  public monitor: string;

  constructor(name: string, game: Game, team: Team, mouse: string, keyboard: string, headset: string, monitor: string) {
    this.name = name;
    this.game = game;
    this.team = team;
    this.mouse = mouse;
    this.keyboard = keyboard;
    this.headset = headset;
    this.monitor = monitor;
  }
}
