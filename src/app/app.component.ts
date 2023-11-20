import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NewsItemComponent} from "./news-item/news-item.component";
import {RecipeComponent} from "./recipe/recipe.component";
import {ThumbnailComponent} from "./thumbnail/thumbnail.component";
import {DisplayModeService} from "./display-mode.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewsItemComponent, RecipeComponent, ThumbnailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-shop';


  constructor(private displayModeService: DisplayModeService) {

  }

  isCompact(isCompact: boolean) {
    this.displayModeService.changeCompactStatus(isCompact);
  }
}
