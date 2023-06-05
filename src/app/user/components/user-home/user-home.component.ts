import { Component, OnInit } from '@angular/core';
import { FoodItem, Response } from 'src/app/core/models/data.model';
import { UserFoodItemService } from '../../services/food-item/user-food-item.service';
import { CommonFoodItemService } from 'src/app/core/services/common/food-item/common-food-item.service';
import { CommonFoodCategoryService } from 'src/app/core/services/common/food-category/common-food-category.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  foodItem_list: FoodItem[] = [];
  category_list: any[] = [];
  brand_list: string[] = [];

  constructor(private commonFoodItemService: CommonFoodItemService, private userFoodItemService: UserFoodItemService, private commonFoodCategoryService: CommonFoodCategoryService) { }

  ngOnInit(): void {
    this.userFoodItemService.foodItemObservable.subscribe((foodItems: FoodItem[]) => {
      if (foodItems && foodItems.length > 0) {
        this.foodItem_list = [...foodItems];
      } else {
        this.fetchAllFoodItems();
      }
    });
    this.fetchAllFoodCategories()
    this.fetchAllFoodItems();
  }

  fetchAllFoodItems() {
    this.commonFoodItemService.getAllFoodItems().subscribe((data: Response) => {
      this.foodItem_list = [...data.response];
      this.brand_list = [...new Set(this.foodItem_list.map((fi => fi.brand)))];
    })
  }

  fetchAllFoodCategories() {
    this.commonFoodCategoryService.getAllFoodCategories().subscribe((data: Response) => {
      let foodCategory_list = [...data.response];
      this.category_list = [...new Set(foodCategory_list.map((cat => {
        return {id: cat.foodCategoryId, label: cat.categoryName};
      })))];
    })
  }

  searchByCategory(catId: number){
    this.userFoodItemService.getFoodItemByCategory(catId).subscribe((data: Response)=>{
      if (!data.isError) {
        this.foodItem_list = [...data.response];
      }
    });
    return false;
  }

  searchByBrand(brand: string){
    this.userFoodItemService.getFoodItemByBrand(brand).subscribe((data: Response)=>{
      if (!data.isError) {
        this.foodItem_list = [...data.response];
      }
    });
    return false;
  }
}
