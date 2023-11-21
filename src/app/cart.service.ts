import { Injectable } from '@angular/core';
import { ICartItemExtended } from './interfaces';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from './product.service';
import { IProduct } from './interfaces';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  // 1) Fields

  private cart = new BehaviorSubject<ICartItemExtended[]>([]);
  currentCart = this.cart.asObservable() // detail: this is public

  private isVisible = new BehaviorSubject<boolean>(false);
  currentIsVisible = this.isVisible.asObservable();

  private products: IProduct[] | undefined;

  // 2) Constructors

  constructor(productService: ProductService) {
    productService.getProducts().subscribe(products => this.products = products)
  }

  // 3) Methods

  changeVisibility(status: boolean): void {
    this.isVisible.next(status);
  }

  adjustItem(productId: number, diff: number): void {

    const cartItem = this.cart.value.find(c => c.id === productId)
    if (!cartItem)
      this.adjustItemTo(productId, diff)
    else
      this.adjustItemTo(productId, cartItem.amount + diff)
  }

  totalPrice(): number {
    if (!this.products) {
      // Products isn't loaded yet, so we start with 0
      return 0
    }
    let total = 0
    for (let item of this.cart.value) {

      const product = this.products.find(p => p.id === item.id)
      if (product === undefined) {
        throw `Unexpected: product in cart with id=${item.id} not found in product list`
      }

      total += product.price * item.amount
    }
    return total
  }

  private adjustItemTo(productId: number, amount: number): void {

    if (amount <0)
      amount = 0

    if (!this.products) {
      throw "Unexpected: products isn't loaded yet"
    }

    const product = this.products.find(p => p.id === productId)

    if (product === undefined) {
      throw `Unexpected: product with id=${productId} not found in product list`
    }

    console.log('adjustItemTo', amount)
    const newCart = [...this.cart.value]

    const productIndex = newCart.findIndex(item => item.id === productId);

    const productExistInCart = productIndex > -1

    if (amount === 0) {
      if (productExistInCart) {
        // Amount is 0, so remove the item from the cart
        newCart.splice(productIndex, 1);
      }

    } else {

      if (productExistInCart) {
        // Change the amount
        newCart[productIndex].amount = amount;
      } else {

        // Add the product to the end of the cart
        const extendedItem: ICartItemExtended = { amount: amount, ...product }
        newCart.push(extendedItem);
      }

    }
    this.cart.next(newCart)
  }
}
