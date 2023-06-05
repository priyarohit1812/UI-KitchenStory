import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FoodCategory, FoodItem, Response } from 'src/app/core/models/data.model';
import { CommonFoodCategoryService } from 'src/app/core/services/common/food-category/common-food-category.service';
import { CommonFoodItemService } from 'src/app/core/services/common/food-item/common-food-item.service';
import { AdminFoodItemService } from '../../services/food-item/admin-food-item.service';

@Component({
  selector: 'app-admin-food-item',
  templateUrl: './admin-food-item.component.html',
  styleUrls: ['./admin-food-item.component.scss']
})
export class AdminFoodItemComponent implements OnInit {
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

  foodItemForm: FormGroup;

  image_file: File;


  constructor(private adminFoodItemService: AdminFoodItemService, private commonFoodItemService: CommonFoodItemService, private commonFoodCategoryService: CommonFoodCategoryService, private builder: FormBuilder,
    private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.commonFoodCategoryService.getAllFoodCategories().subscribe((data: Response) => {
      this.foodCategory_list = [...data.response];
    });

    this.foodItemForm = this.builder.group({
      code: this.builder.control("", [Validators.required]),
      category: this.builder.control("", [Validators.required]),
      name: this.builder.control("",[Validators.required]) ,
      brand: this.builder.control("", [Validators.required]),
      weight: this.builder.control("", [Validators.required]),
      price: this.builder.control("", [Validators.required])     
    });

    this.foodItemForm.valueChanges.subscribe((data) => {
      this.foodItem.foodItemCode = data.code;
      this.foodItem.foodCategory = this.foodCategory_list.filter(fcl => fcl.foodCategoryId == data.category)[0];
      this.foodItem.foodItemName = data.name;
      this.foodItem.brand = data.brand;
      this.foodItem.weight = data.weight;
      this.foodItem.price = data.price;
    });

    this.activeRoute.paramMap.subscribe((param: ParamMap) => {
      let foodItemId = param.get('foodItemId');
      if (foodItemId) {
        this.commonFoodItemService.getFoodItem(foodItemId).subscribe((data: Response) => {
          this.loadFoodItem(data.response);
        });
      }
    });
  }

  loadFoodItem(data: FoodItem) {
    this.foodItem = data;
    this.foodItemForm.patchValue({
      code: data.foodItemCode,
      category: data.foodCategory.foodCategoryId,
      name: data.foodItemName,
      brand: data.brand,
      weight: data.weight,
      price: data.price
    });
  }

  onImageChange(event: any) {
    this.image_file = event.target.files[0];
  }

  saveItem() {
    this.adminFoodItemService.saveFoodItem(this.foodItem).subscribe((data: Response) => {
      if (!data.isError) {
        let savedFoodItem: FoodItem = data.response;
        if (savedFoodItem && savedFoodItem.foodItemId > 0) {
          if (this.image_file) {
            this.adminFoodItemService.uploadImage(this.image_file, savedFoodItem.foodItemId).subscribe((data) => {
              this.router.navigateByUrl("admin/food-item");
            });
          }
        }
      }
    });
  }
}
