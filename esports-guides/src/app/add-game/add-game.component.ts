import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})

export class AddGameComponent implements OnInit {
  title: string;
  info: string;
  
  constructor() { 
  }

  ngOnInit(): void {
  }

  submitGame() {
    if (this.title == null || this.info == null){
      window.alert("Please enter both a Game Title and reason for wanting this game included in Esports Guides");
    }
    else{
      window.alert("Thank you - We have received your request for " + this.title + ". We will review and potentially add the game soon!");
      this.title = null;
      this.info = null;
    }
 }

}
