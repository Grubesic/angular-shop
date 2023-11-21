import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartService} from '../cart.service';
import {BehaviorSubject} from "rxjs";
import {IProduct} from "../interfaces";

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {
  isVisible: boolean = false;
  products: IProduct[] = [];

  constructor(
    private cartService: CartService
  ) {
    cartService.currentIsVisible.subscribe(isVisible => {
      this.isVisible = isVisible;
    })
  }

  ngOnInit() {
    this.cartService.currentCart.subscribe({
      next: (cart: IProduct[]) => {
        this.products = cart;
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  hideCart() {
    this.cartService.changeVisibility(false);
  }

  totalPrice(){
    return this.cartService.totalPrice();
  }
}
