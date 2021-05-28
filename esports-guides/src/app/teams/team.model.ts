import { Player } from '../player/player.model';
export class Team {
  public name: string;
  public players: Player[];
  public region: string;

  constructor(name: string, players: Player[], region: string) {
    this.name = name;
    this.players = players;
    this.region = region;
  }
}

export var teamList: Team[] = [
  new Team("DePaul University",
    [
      new Player("KarmaJuney", "Rocket League", "DePaul University", "Korsair", "Korsair", "HyperXCloud", "HP OMEN", "4.0"),
      new Player("Lovelace", "Rocket League", "DePaul University", "Korsair", "Korsair", "HyperXCloud", "HP OMEN", "7.0"),
      new Player("Vengeancex3", "Rocket League", "DePaul University", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0")
    ],
    "NA"),
  new Team("Cloud9",
    [
      new Player("KarmaJuney", "Rocket League", "DePaul University", "Korsair", "Korsair", "HyperXCloud", "HP OMEN", "4.0"),
      new Player("Lovelace", "Rocket League", "DePaul University", "Korsair", "Korsair", "HyperXCloud", "HP OMEN", "7.0"),
      new Player("Vengeancex3", "Rocket League", "DePaul University", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0")
    ],
    "NA")
]
