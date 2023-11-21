import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {IProduct} from "../interfaces";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input() product: IProduct | undefined;
}
