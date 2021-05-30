import { Component, OnInit } from '@angular/core';

let baseSense = new Map<string, number>();
baseSense.set("csgo", 1);
baseSense.set("val", 3.18);
baseSense.set("r6", 0.25);

let baseName = new Map<string, String>();
baseName.set("csgo", "Counter Strike - Global Offensive");
baseName.set("val", "Valorant");
baseName.set("r6", "Rainbow 6 Siege");

@Component({
  selector: 'app-sense-converter',
  templateUrl: './sense-converter.component.html',
  styleUrls: ['./sense-converter.component.css']
})

export class SenseConverterComponent implements OnInit {

  showAnswer:boolean = false;
  sensitivity:string;
  game1:string;
  game2:string;
  answer:string;

  constructor() { }

  ngOnInit(): void {
  }

  submitSense() {
    this.showAnswer = true;
    if (this.game1 == null || this.game2 == null || this.sensitivity == null){
      this.answer = "Please select two valid games and enter a sensitivity."
    }
    else if (this.game1 == this.game2){
      this.answer = "Please select two seperate games."
    }
    else{
      this.calculateSense();
    }
 }

 calculateSense(){
   let game1Sense: number = Number(this.sensitivity);
   if (isNaN(game1Sense)){
     this.answer = "Please enter a valid number as a sensitivity"
     return;
   }
   game1Sense = game1Sense * baseSense.get(this.game1);
   
   let senseAnswer: number = game1Sense / baseSense.get(this.game2);
   this.answer = "Set your " + baseName.get(this.game2) + " sensitivity to " + senseAnswer.toFixed(3) + "."
 }
}
