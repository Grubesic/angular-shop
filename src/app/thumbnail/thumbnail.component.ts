import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DisplayModeService} from "../display-mode.service";

@Component({
  selector: 'app-thumbnail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thumbnail.component.html',
  styleUrl: './thumbnail.component.css'
})
export class ThumbnailComponent {
  @Input() fullWidth: boolean = false;

  @Input() hasBorder: boolean = false;

  @Input() filename = "missing-image.webp";


  constructor(private displayModeService: DisplayModeService) {
    this.displayModeService.currentCompactStatus.subscribe({
      next: (isCompact) => {
        this.fullWidth = !isCompact;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
