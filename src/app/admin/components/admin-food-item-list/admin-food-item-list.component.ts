import { Component, OnInit } from '@angular/core';
import { FoodItem, Response } from 'src/app/core/models/data.model';
import { AdminFoodItemService } from '../../services/food-item/admin-food-item.service';
import { CommonFoodItemService } from 'src/app/core/services/common/food-item/common-food-item.service';

@Component({
  selector: 'app-admin-food-item-list',
  templateUrl: './admin-food-item-list.component.html',
  styleUrls: ['./admin-food-item-list.component.scss']
})
export class AdminFoodItemListComponent implements OnInit {
  foodItem_list: FoodItem[] = [];
  filteredFoodItem_list: FoodItem[] = [];
  is_admin: boolean;
  p: number;
  foodItemName: string;

  constructor(private adminFoodItemService: AdminFoodItemService, private commonFoodItemService: CommonFoodItemService) { }

  ngOnInit(): void {
    this.fetchAllFoodItems();
  }

  fetchAllFoodItems() {
    this.commonFoodItemService.getAllFoodItems().subscribe((data: Response) => {
      this.foodItem_list = [...data.response];
      this.filteredFoodItem_list = this.foodItem_list;
    })
  }

  deleteFoodItem(foodItemId: number) {
    this.adminFoodItemService.deleteFoodItem(foodItemId).subscribe((data) => {
      this.fetchAllFoodItems();
    });
  }

  SearchFoodItems() {
    if (this.foodItemName == "") {
      this.fetchAllFoodItems();
    }
    else {
      console.log(this.foodItemName);
      this.filteredFoodItem_list = this.foodItem_list.filter(foodItem => {
        return foodItem.foodItemName.toLocaleLowerCase().match(this.foodItemName.toLocaleLowerCase());
      });
    }
  }
}
