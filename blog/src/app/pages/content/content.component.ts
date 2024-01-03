import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover: string = "https://www.adrenaline.com.br/wp-content/plugins/seox-image-magick/imagick_convert.php?width=910&height=568&format=.jpg&quality=91&imagick=uploads.adrenaline.com.br/2024/01/a_plague-tale-innocence-912x569.jpg"
  contentTitle: string = "A Plague Tale: Innocence é o jogo grátis do dia na Epic Games Store; resgate até amanhã"
  contentDescription: string = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias temporibus est, aperiam soluta, nulla nobis quaerat iusto molestias in accusamus blanditiis dolores tempora. Veniam in unde delectus soluta, rerum non."
}
