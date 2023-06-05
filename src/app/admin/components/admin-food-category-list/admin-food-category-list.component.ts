import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { FoodCategory, Response } from 'src/app/core/models/data.model';
import { AdminFoodCategoryService } from '../../services/food-category/admin-food-category.service';
import { CommonFoodCategoryService } from 'src/app/core/services/common/food-category/common-food-category.service';

@Component({
  selector: 'app-admin-food-category-list',
  templateUrl: './admin-food-category-list.component.html',
  styleUrls: ['./admin-food-category-list.component.scss']
})
export class AdminFoodCategoryListComponent implements OnInit {
  msg: string = "";
  p: number;
  foodCategory_list: FoodCategory[] = [];
  filteredFoodCategory_list: FoodCategory[] = [];
  categoryName: string;

  foodCategoryForm = this.builder.group({
    categoryName: this.builder.control("", [Validators.required]),

  });

  foodCategory: FoodCategory = {
    foodCategoryId: 0,
    categoryName: "",
    foodItems: []
  };
  config: any;


  constructor(private builder: FormBuilder, private adminFoodCategoryService: AdminFoodCategoryService, private commonFoodCategoryService: CommonFoodCategoryService) { }

  ngOnInit(): void {
    this.foodCategoryForm.valueChanges.subscribe((add: any) => {
      this.foodCategory.categoryName = add.categoryName;
    })

    this.fetchAllFoodCategories();

  }

  fetchAllFoodCategories() {
    this.commonFoodCategoryService.getAllFoodCategories().subscribe((data: Response) => {
      this.foodCategory_list = [...data.response]
      this.filteredFoodCategory_list = this.foodCategory_list;
    })
  }

  saveCategory() {
    this.adminFoodCategoryService.saveFoodCategory(this.foodCategory).subscribe((data) => {
      this.fetchAllFoodCategories();
    });
  }

  deleteCategory(id: number) {
    this.adminFoodCategoryService.deleteFoodCategory(id).subscribe((data) => {
      this.fetchAllFoodCategories();
    })
  }

  SearchCategory() {
    if (this.categoryName == "") {
      this.fetchAllFoodCategories();
    }
    else {
      console.log(this.categoryName);
      this.filteredFoodCategory_list = this.foodCategory_list.filter(category => {
        return category.categoryName.toLocaleLowerCase().match(this.categoryName);
      });
    }
  }
}
