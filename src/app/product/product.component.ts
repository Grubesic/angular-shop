import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {IProduct} from "../interfaces";
import {ZeroOrTwoDecimalsPipe} from "../zero-or-two-decimals.pipe";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ZeroOrTwoDecimalsPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {


  @Input() product: IProduct | undefined;
  amount: number = 0;
  constructor(private cartService: CartService) {
    cartService.currentCart.subscribe(cart => {
      const cartItem = cart.find(x => x.id === this.product?.id);
      this.amount = cartItem?.amount ?? 0;
    });
  }

  adjustAmount(diff: number) {
    if (!this.product) {
      throw "Unexpected: no item";
    }
    this.cartService.adjustItem(this.product.id, diff);
  }
}
