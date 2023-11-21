import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {IProduct} from "../interfaces";
import {ProductComponent} from "../product/product.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  @Input() products: IProduct[] = [];

}
