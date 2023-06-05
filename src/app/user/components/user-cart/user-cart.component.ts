import { Component, OnInit } from '@angular/core';
import { Cart, cartResponse, OrderItem, Response } from 'src/app/core/models/data.model';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {
  cart: Cart;
  cartResponse: cartResponse;
  orderItemList: OrderItem[];
  isQuantityChange: boolean = false;


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCartDetails();
  }

  getCartDetails(){
    this.cartService.getCart().subscribe((data: Response) => {
      this.cartResponse = data.response;
      this.cart = this.cartResponse.cart;
      this.orderItemList = [...this.cartResponse.orderItems];
    });
  }

  onQuantityChange(foodItemId: number,event:any){
    let value = event.target.value;
    this.updateCart(foodItemId,value);
  }

  updateCart(foodItemId: number, quantity: number) {
    this.cartService.updateCart(foodItemId, quantity).subscribe((data) => {
      this.cart = data.response;
      this.cartService.setCartUpdated(true);
      this.getCartDetails();
    })
  }
}
