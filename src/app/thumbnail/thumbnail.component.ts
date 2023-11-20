import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

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

}
