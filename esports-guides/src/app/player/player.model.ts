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
  public imageURL: string;

  constructor(name: string, game: string, team: string, mouse: string, keyboard: string, headset: string, monitor: string, sensitivity: string) {
    this.name = name;
    this.game = game;
    this.team = team;
    this.mouse = mouse;
    this.keyboard = keyboard;
    this.headset = headset;
    this.monitor = monitor;
    this.sensitivity = sensitivity;
    let imageMap = new Map();
    imageMap.set("KarmaJuney", "https://tiermaker.com/images/avatars/karmajuney/karmajuney.jpg");
    imageMap.set("Lovelace", "https://tiermaker.com/images/avatars/karmajuney/karmajuney.jpg");
    imageMap.set("Vengeancex3", "https://tiermaker.com/images/avatars/karmajuney/karmajuney.jpg");
    imageMap.set("Fudge", "https://esportspedia-lol.s3.amazonaws.com/2/24/C9A_Fudge_2020_Summer.png");
    imageMap.set("Blaber", "https://www.hotspawn.com/app/uploads/2021/05/Blaber-1.jpg");
    imageMap.set("Perkz", "https://img.redbull.com/images/c_crop,w_1200,h_800,x_0,y_0,f_auto,q_auto/c_scale,w_1500/redbullcom/2020/11/24/sfhdzj6cjzs3kxxdzl6y/luka-perkz-perkovic");
    imageMap.set("K1ng", "https://s3.amazonaws.com/media.trackingthepros.com/profile/p351.png");
    imageMap.set("Vulcan", "https://static.invenglobal.com/upload/image/2021/03/01/o1614557827228739.jpeg")
    this.imageURL = imageMap.get(name);
  }
}

export var playerList: Player[] = [
  new Player("KarmaJuney", "Rocket League", "DePaul University", "Korsair", "Korsair", "HyperXCloud", "HP OMEN", "4.0"),
  new Player("Lovelace", "Rocket League", "DePaul University", "Korsair", "Korsair", "HyperXCloud", "HP OMEN", "7.0"),
  new Player("Vengeancex3", "Rocket League", "DePaul University", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
  new Player("Fudge", "League of Legends", "Cloud9", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
  new Player("Blaber", "League of Legends", "Cloud9", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
  new Player("Perkz", "League of Legends", "Cloud9", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
  new Player("K1ng", "League of Legends", "Cloud9", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
  new Player("Vulcan", "League of Legends", "Cloud9", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
]
