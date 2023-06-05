import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { FoodCategory } from 'src/app/core/models/data.model';
import { AdminFoodCategoryService } from '../../services/food-category/admin-food-category.service';

@Component({
  selector: 'app-admin-food-category',
  templateUrl: './admin-food-category.component.html',
  styleUrls: ['./admin-food-category.component.scss']
})
export class AdminFoodCategoryComponent implements OnInit {
  @Input() foodCategory: FoodCategory;
  @Output() deleteFoodCategory: any = new EventEmitter();
  foodCategoryUpdateForm = this.builder.group({
    categoryName: this.builder.control("", [Validators.required]),

  });
  enableEdit: boolean = false;
  initialValue: string;
  constructor(private builder: FormBuilder, private adminFoodCategoryService: AdminFoodCategoryService) { }

  ngOnInit(): void {
    this.initialValue = this.foodCategory.categoryName;
  }

  editCategory() {
    this.enableEdit = true;
    this.foodCategoryUpdateForm.controls.categoryName.patchValue(this.foodCategory.categoryName);
    this.foodCategoryUpdateForm.valueChanges.subscribe(frm => {
      this.foodCategory.categoryName = frm.categoryName ?? this.initialValue;
    });
  }

  deleteCategory() {
    this.deleteFoodCategory.emit();
  }

  saveCategory() {
    this.adminFoodCategoryService.saveFoodCategory(this.foodCategory).subscribe((data) => {
      this.initialValue = this.foodCategory.categoryName;
      this.enableEdit = false;
    });
  }

  cancelCategory() {
    this.foodCategory.categoryName = this.initialValue;
    this.enableEdit = false;
  }
}
