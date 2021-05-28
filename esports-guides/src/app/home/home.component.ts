import { Component, OnInit } from '@angular/core';
import { Game, gameList } from '../game/game.model';
import { Team } from '../teams/team.model';
import { Player } from '../player/player.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  games: Game[];
  /*games: Game[] = [
    new Game("Rocket League", "This is rocket league. I guess some people still play this competitively...",
      [
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
    ),
    new Game("League of Legends", "The biggest esports game ever. Not that I know whats happening half the time...",
      [
        new Team("DePaul University",
          [
            new Player("KarmaJuney", "Rocket League", "DePaul University", "Korsair", "Korsair", "HyperXCloud", "HP OMEN", "4.0"),
            new Player("Lovelace", "Rocket League", "DePaul University", "Korsair", "Korsair", "HyperXCloud", "HP OMEN", "7.0"),
            new Player("Vengeancex3", "Rocket League", "DePaul University", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0")
          ],
          "NA")
      ]
    )
  ];*/

  constructor() {
    this.games = gameList;
  }

  ngOnInit(): void {
  }

}

/*var games: Game[] = [
  new Game("Rocket League", "This is rocket league. I guess some people still play this competitively...",
    [
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
  ),
  new Game("League of Legends", "The biggest esports game ever. Not that I know whats happening half the time...",
    [
      new Team("DePaul University",
        [
          new Player("KarmaJuney", "Rocket League", "DePaul University", "Korsair", "Korsair", "HyperXCloud", "HP OMEN", "4.0"),
          new Player("Lovelace", "Rocket League", "DePaul University", "Korsair", "Korsair", "HyperXCloud", "HP OMEN", "7.0"),
          new Player("Vengeancex3", "Rocket League", "DePaul University", "Logitech", "Royal Kludge", "HyperXCloud", "HP OMEN", "5.0")
        ],
        "NA")
    ]
  )
];

export { games };*/

