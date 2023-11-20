import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-item.component.html',
  styleUrl: './news-item.component.css'
})
export class NewsItemComponent {

  @Input() header = "";
  @Input() content = "";

  detailsVisible = true;
  headerVisible = true;


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
