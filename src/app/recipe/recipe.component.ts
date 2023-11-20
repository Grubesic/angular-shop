import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThumbnailComponent} from "../thumbnail/thumbnail.component";

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule, ThumbnailComponent],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {

  @Input() name = "";
  @Input() description = "";
  @Input() filename = "missing-image.webp";
}
