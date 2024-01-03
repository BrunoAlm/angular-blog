import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input()
  photoCover: string = "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
  @Input()
  cardTitle: string = "Vazio"
  @Input()
  cardDescription: string = "Vazio"


}
