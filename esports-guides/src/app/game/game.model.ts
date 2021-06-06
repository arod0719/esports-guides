import { Team } from '../teams/team.model';
import { Player } from '../player/player.model';
export class Game {
  name: string;
  description: string;
  teams: Team[];
  imageURL: string;

  constructor(name: string, description: string, teams: Team[]) {
    this.name = name;
    this.description = description;
    this.teams = teams;
    let imageMap = new Map();
    imageMap.set("Rocket League", "https://rocketleague.media.zestyio.com/rl_home_f2p-launch_shop_10367.jpg");
    imageMap.set("League of Legends", "https://wallpaperaccess.com/full/217097.jpg");
    this.imageURL = imageMap.get(name);
  }

  }

export var gameList: Game[] = [
  new Game("Rocket League", "This is rocket league. I guess some people still play this competitively...",
    [
      new Team("DePaul University",
        [
          new Player("KarmaJuney", "Rocket League", "DePaul University", "Korsair", "Korsair", "HyperXCloud", "HP OMEN", "4.0"),
          new Player("BlackWraith", "Rocket League", "DePaul University", "Korsair", "Korsair", "HyperXCloud", "HP OMEN", "7.0"),
          new Player("Jaco", "Rocket League", "DePaul University", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
          new Player("Shacookie", "Rocket League", "DePaul University", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
        ],
        ""),
      new Team("Cloud9",
        [
          new Player("Gimmick", "Rocket League", "Cloud9", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
          new Player("Fireburner", "Rocket League", "Cloud9", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
          new Player("SquishyMuffinz", "Rocket League", "Cloud9", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
        ],
        "")
    ]
  ),
  new Game("League of Legends", "The biggest esports game ever. Not that I know whats happening half the time...",
    [
      new Team("DePaul University",
        [
          new Player("Lovelace", "League of Legends", "DePaul University", "Razer Basilisk Ultimate", "Corsair k95 Platinum XT", "Bose QC35 II", "Alienware AW2518H", "25"),
          new Player("Kamcha", "League of Legends", "DePaul University", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
          new Player("Kingamazin", "League of Legends", "DePaul University", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
          new Player("AspiringDropout", "League of Legends", "DePaul University", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
          new Player("Rzayers", "League of Legends", "DePaul University", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
        ],
        ""),
      new Team("Cloud9",
        [
          new Player("Fudge", "League of Legends", "Cloud9", "Korsair", "Korsair", "HyperXCloud", "HP OMEN", "4.0"),
          new Player("Blaber", "League of Legends", "Cloud9", "Korsair", "Korsair", "HyperXCloud", "HP OMEN", "4.0"),
          new Player("Perkz", "League of Legends", "Cloud9", "Korsair", "Korsair", "HyperXCloud", "HP OMEN", "4.0"),
          new Player("K1ng", "League of Legends", "Cloud9", "Korsair", "Korsair", "HyperXCloud", "HP OMEN", "4.0"),
          new Player("Vulcan", "League of Legends", "Cloud9", "Korsair", "Korsair", "HyperXCloud", "HP OMEN", "4.0")
        ],
        "")
    ]
  )
];
