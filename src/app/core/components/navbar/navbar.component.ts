import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodItem, Response } from '../../models/data.model';
import { CommonFoodItemService } from '../../services/common/food-item/common-food-item.service';
import { CartService } from 'src/app/user/services/cart/cart.service';
import { UserFoodItemService } from 'src/app/user/services/food-item/user-food-item.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() showSearch: boolean = false;
  food_list: FoodItem[] = [];

  filteredFoodItem_list: FoodItem[] = [];
  is_admin: boolean = false;
  sessionStorage: Storage | undefined;
  item_list: string[] = [];
  number: any;
  cart_item_count: number = 0;

  constructor(private router: Router, private commonFoodItemService: CommonFoodItemService, private userFoodItemService: UserFoodItemService, private cartService: CartService) { }

  ngOnInit(): void {
    this.is_admin = JSON.parse(sessionStorage.getItem("is_admin") || "false");

    if (!this.is_admin) {
      this.cartService.cartObservable.subscribe((isUpdate: boolean) => {
        if (isUpdate) {
          this.cartService.getCart().subscribe((data: Response) => {
            if (!data.isError && data.response) {
              let cartResponse = data.response;
              let cart = cartResponse.cart;
              this.cart_item_count = cart.noOfItems;
            } else {
              this.cart_item_count = 0;
            }
          });
        }
      });

      this.fetchAllFoodItems();
    }
  }

  fetchAllFoodItems() {
    this.commonFoodItemService.getAllFoodItems().subscribe((data: Response) => {
      let foodItem_list = [...data.response];
      this.item_list = [...new Set(foodItem_list.map((fi => fi.key)))];
    })
  }

  searchFoodItem(event: any) {
    let key = event.target.value;
    if (key) {
      this.userFoodItemService.searchFoodItem(event.target.value).subscribe((data: Response) => {
        if (!data.isError) {
          this.food_list = [...data.response];
          this.userFoodItemService.passFoodItems(this.food_list);
        }
      });
    } else {
      this.userFoodItemService.passFoodItems([]);
    }
    return false;
  }

  clearSessionData() {
    sessionStorage.clear();
    if (this.is_admin) {
      this.router.navigateByUrl("admin/login");
    } else {
      this.router.navigateByUrl("user/login");
    }
  }
}
