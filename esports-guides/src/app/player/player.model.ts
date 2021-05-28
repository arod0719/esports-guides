//export enum Game {RocketLeague, LeagueOfLegends, CSGO}
//export enum Team {Cloud9, TSM, TeamLiquid}

export class Player {
  public name: string;
  public game: string;
  public team: string;
  public mouse: string;
  public keyboard: string;
  public headset: string;
  public monitor: string;
  public sensitivity: string;

  constructor(name: string, game: string, team: string, mouse: string, keyboard: string, headset: string, monitor: string, sensitivity: string) {
    this.name = name;
    this.game = game;
    this.team = team;
    this.mouse = mouse;
    this.keyboard = keyboard;
    this.headset = headset;
    this.monitor = monitor;
    this.sensitivity = sensitivity;
  }
}

export var playerList: Player[] = [
  new Player("KarmaJuney", "Rocket League", "DePaul University", "Korsair", "Korsair", "HyperXCloud", "HP OMEN", "4.0"),
  new Player("Lovelace", "Rocket League", "DePaul University", "Korsair", "Korsair", "HyperXCloud", "HP OMEN", "7.0"),
  new Player("Vengeancex3", "Rocket League", "DePaul University", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0") 
]
