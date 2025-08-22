import {CommonModule} from '@angular/common';
import { Component, inject } from '@angular/core';

import { SinglefruitComponent } from "./singlefruit/singlefruit/singlefruit.component";
import { FruitlistdataService} from "../../fruitlistdata.service";

@Component({
  selector: 'app-fruitlist',
  standalone: true,
  imports: [CommonModule, SinglefruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {
  fruitlistdata = inject(FruitlistdataService);

  fontGood = "green";
  fontBad = "red"

  floorNum(zahl: number) {
    return Math.floor(zahl);
  }

  addComment(comment:string, index:number){
    this.fruitlistdata.addCommentToFruit(comment, index);
  }

  nameLog(name:string) {
    console.log(name);
  }
}
