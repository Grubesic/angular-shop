import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DisplayModeService} from "../display-mode.service";
import {CutTextPipe} from "../cut-text.pipe";

@Component({
  selector: 'app-news-item',
  standalone: true,
  imports: [CommonModule, CutTextPipe],
  templateUrl: './news-item.component.html',
  styleUrl: './news-item.component.css'
})
export class NewsItemComponent {

  @Input() header = "";
  @Input() content = "";

  detailsVisible = true;
  headerVisible = true;


  constructor(private displayModeService: DisplayModeService) {
    this.displayModeService.currentCompactStatus.subscribe({
      next: (isCompact: boolean) => {
        this.headerVisible = !isCompact;
        this.detailsVisible = !isCompact;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  changeText() {
    this.header = "Header changed";
    this.content = "Content changed";
  }

  compactView(showDetails: boolean) {
    this.detailsVisible = showDetails;
  }

  showHeader(b: boolean) {
    this.headerVisible = b
  }
}
