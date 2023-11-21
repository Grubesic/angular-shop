import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartService} from "../cart.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  constructor(private cartService: CartService) {
  }

  totalPrice(){
    return this.cartService.totalPrice();
  }

  showCart(){
    return this.cartService.changeVisibility(true);
  }
}
