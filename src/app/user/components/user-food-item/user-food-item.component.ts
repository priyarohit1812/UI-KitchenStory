import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { FoodItem, FoodCategory, Cart, Response } from 'src/app/core/models/data.model';
import { CartService } from '../../services/cart/cart.service';
import { UserFoodItemService } from '../../services/food-item/user-food-item.service';
import { CommonFoodItemService } from 'src/app/core/services/common/food-item/common-food-item.service';

@Component({
  selector: 'app-user-food-item',
  templateUrl: './user-food-item.component.html',
  styleUrls: ['./user-food-item.component.scss']
})
export class UserFoodItemComponent implements OnInit {

  foodItem: FoodItem = {
    foodItemId: 0,
    foodItemCode: "",
    foodItemName: "",
    brand: "",
    weight: "",
    image_url: "",
    price: 0,
    foodCategory: {
      foodCategoryId: 0,
      categoryName: "",
      foodItems: []
    }
  };

  foodCategory_list: FoodCategory[] = [];
  cart: Cart;


  image_file: File;
  constructor(private commonFoodItemService: CommonFoodItemService, private activeRoute: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((param: ParamMap) => {
      let foodItemId = param.get('foodItemId');
      if (foodItemId) {
        this.commonFoodItemService.getFoodItem(foodItemId).subscribe((data: Response) => {
          this.foodItem = data.response;
        });
      }
    });
  }

  addToCart(foodItemId: any) {
    this.cartService.addCart(foodItemId).subscribe((data: Response) => {
      this.cart = data.response
      this.cartService.setCartUpdated(true);
    })
  }
}
