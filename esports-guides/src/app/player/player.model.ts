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
    imageMap.set("KarmaJuney", "https://resources.depaul.edu/esports/gaming-organizations/PublishingImages/rocketleague/Alex_Rodriguez.jpg");
    imageMap.set("BlackWraith", "https://resources.depaul.edu/esports/gaming-organizations/PublishingImages/rocketleague/David_Adeyemi.jpg");
    imageMap.set("Jaco", "https://resources.depaul.edu/esports/gaming-organizations/PublishingImages/rocketleague/Linas_Savickas.jpg");
    imageMap.set("Shacookie", "https://resources.depaul.edu/esports/gaming-organizations/PublishingImages/rocketleague/Sam_Rumzis.jpg");
    imageMap.set("Fudge", "https://esportspedia-lol.s3.amazonaws.com/2/24/C9A_Fudge_2020_Summer.png");
    imageMap.set("Blaber", "https://www.hotspawn.com/app/uploads/2021/05/Blaber-1.jpg");
    imageMap.set("Perkz", "https://img.redbull.com/images/c_crop,w_1200,h_800,x_0,y_0,f_auto,q_auto/c_scale,w_1500/redbullcom/2020/11/24/sfhdzj6cjzs3kxxdzl6y/luka-perkz-perkovic");
    imageMap.set("K1ng", "https://s3.amazonaws.com/media.trackingthepros.com/profile/p351.png");
    imageMap.set("Vulcan", "https://static.invenglobal.com/upload/image/2021/03/01/o1614557827228739.jpeg");
    imageMap.set("Gimmick", "data:image/jpeg;base64,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");
    imageMap.set("Fireburner", "https://rocketeers.gg/wp-content/uploads/2019/12/torment-dreamhack.jpg");
    imageMap.set("SquishyMuffinz", "https://i.pinimg.com/736x/7a/cc/e1/7acce1783351cff95b4e5a919b984034.jpg");
    imageMap.set("Lovelace", "https://resources.depaul.edu/esports/gaming-organizations/PublishingImages/lol/Alex_Haase.png");
    imageMap.set("Kamcha", "https://resources.depaul.edu/esports/gaming-organizations/PublishingImages/lol/Kamil_Gebis.png");
    imageMap.set("Kingamazin", "https://resources.depaul.edu/esports/gaming-organizations/PublishingImages/lol/Tyler_Kujawa.png");
    imageMap.set("AspiringDropout", "https://resources.depaul.edu/esports/gaming-organizations/PublishingImages/lol/Angel_Vargas.png");
    imageMap.set("Rzayers", "https://resources.depaul.edu/esports/gaming-organizations/PublishingImages/lol/Ryan_Ayers.png");
    this.imageURL = imageMap.get(name);
  }
}

export var playerList: Player[] = [
  new Player("KarmaJuney", "Rocket League", "DePaul University", "Korsair", "Korsair", "HyperXCloud", "HP OMEN", "4.0"),
  new Player("BlackWraith", "Rocket League", "DePaul University", "Korsair", "Korsair", "HyperXCloud", "HP OMEN", "7.0"),
  new Player("Jaco", "Rocket League", "DePaul University", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
  new Player("Shacookie", "Rocket League", "DePaul University", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
  new Player("Fudge", "League of Legends", "Cloud9", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
  new Player("Blaber", "League of Legends", "Cloud9", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
  new Player("Perkz", "League of Legends", "Cloud9", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
  new Player("K1ng", "League of Legends", "Cloud9", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
  new Player("Vulcan", "League of Legends", "Cloud9", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
  new Player("Gimmick", "Rocket League", "Cloud9", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
  new Player("Fireburner", "Rocket League", "Cloud9", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
  new Player("SquishyMuffinz", "Rocket League", "Cloud9", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
  new Player("Lovelace", "League of Legends", "DePaul University", "Razer Basilisk Ultimate", "Corsair k95 Platinum XT", "Bose QC35 II", "Alienware AW2518H", "25"),
  new Player("Kamcha", "League of Legends", "DePaul University", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
  new Player("Kingamazin", "League of Legends", "DePaul University", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
  new Player("AspiringDropout", "League of Legends", "DePaul University", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
  new Player("Rzayers", "League of Legends", "DePaul University", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0"),
]
