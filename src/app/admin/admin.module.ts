import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminFoodCategoryComponent } from './components/admin-food-category/admin-food-category.component';
import { AdminFoodCategoryListComponent } from './components/admin-food-category-list/admin-food-category-list.component';
import { AdminFoodItemListComponent } from './components/admin-food-item-list/admin-food-item-list.component';
import { AdminFoodItemComponent } from './components/admin-food-item/admin-food-item.component';
import { CoreModule } from '../core/core.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminHomeComponent,
    AdminFoodCategoryComponent,
    AdminFoodCategoryListComponent,
    AdminFoodItemListComponent,
    AdminFoodItemComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class AdminModule { }
