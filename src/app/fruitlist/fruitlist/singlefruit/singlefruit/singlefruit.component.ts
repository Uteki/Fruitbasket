import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NgClass} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-singlefruit',
  standalone: true,
  imports: [
    NgClass,
    FormsModule
  ],
  templateUrl: './singlefruit.component.html',
  styleUrl: './singlefruit.component.scss'
})
export class SinglefruitComponent {
  inputData:string = "";

  @Input()fruit = {
    name: "Apfel",
    img:"apple.png",
    description: "Äpfel sind aufgrund ihres hohen Wassergehalts kalorienarm und enthalten nur Spuren von Fett und Eiweiß, dafür aber rund zwei Prozent Ballaststoffe und etwa elf Prozent Kohlenhydrate. Äpfel enthalten auch viele Vitamine und Mineralstoffe und sind daher eine wichtige Quelle für uns - zum Beispiel für Vitamin C.",
    genus: "Kernobstgewächsen innerhalb der Familie der Rosengewächse",
    stars: 2.3,
    reviews:[{name: "Kevin W.", text: "ist lecker"},{name: "Arne P.", text: "nicht so meins"}]
  }

  @Output()fruitName = new EventEmitter<string>();

  sendInputData() {
    this.fruitName.emit(this.inputData);
    this.inputData = "";
  }
}
