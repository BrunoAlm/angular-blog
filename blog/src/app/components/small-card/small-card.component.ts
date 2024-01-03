import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input()
  photoCover: string = "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
  @Input()
  cardTitle: string = "Vazio"
}
