import { Player } from '../player/player.model';
export class Team {
  public name: string;
  public players: Player[];
  public region: string;
  public imageURL: string;


  constructor(name: string, players: Player[], region: string) {
    this.name = name;
    this.players = players;
    this.region = region;
    let imageMap = new Map();
    imageMap.set("DePaul University", "https://res.cloudinary.com/scalefunder/image/upload/c_crop,h_343,w_606,x_0,y_0/c_scale,h_343,w_606/f_auto,fl_lossy,q_auto/v1/DePaul_University/veb3d0xedx8vvj6u02qr");
    imageMap.set("Cloud9", "https://media.esportsedition.com/wp-content/uploads/2017/01/Cloud9-1068x601.jpg");
    this.imageURL = imageMap.get(name);
  }
}

export var teamList: Team[] = [
  new Team("DePaul University",
    [
      new Player("KarmaJuney", "Rocket League", "DePaul University", "Korsair", "Korsair", "HyperXCloud", "HP OMEN", "4.0"),
      new Player("BlackWraith", "Rocket League", "DePaul University", "Korsair", "Korsair", "HyperXCloud", "HP OMEN", "7.0"),
      new Player("Jaco", "Rocket League", "DePaul University", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
      new Player("Shacookie", "Rocket League", "DePaul University", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
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
      new Player("Vulcan", "League of Legends", "Cloud9", "Korsair", "Korsair", "HyperXCloud", "HP OMEN", "4.0"),
      new Player("Gimmick", "Rocket League", "Cloud9", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
      new Player("Fireburner", "Rocket League", "Cloud9", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
      new Player("SquishyMuffinz", "Rocket League", "Cloud9", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
    ],
    "")
]
