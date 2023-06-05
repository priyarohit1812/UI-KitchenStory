import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminFoodCategoryComponent } from './components/admin-food-category/admin-food-category.component';
import { AdminFoodItemComponent } from './components/admin-food-item/admin-food-item.component';
import { AdminFoodItemListComponent } from './components/admin-food-item-list/admin-food-item-list.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminFoodCategoryListComponent } from './components/admin-food-category-list/admin-food-category-list.component';
import { OrderDetailComponent } from '../core/components/order-detail/order-detail.component';

const routes: Routes = [
  {
    path: 'admin/login',
    component: AdminLoginComponent
  },
  {
    path: 'admin/home',
    component: AdminHomeComponent
  },
  {
    path: 'admin/food-categories',
    component: AdminFoodCategoryListComponent
  },

  {
    path: 'admin/food-item/:foodItemId',
    component: AdminFoodItemComponent
  },

  {
    path: 'admin/food-item',
    component: AdminFoodItemComponent
  },

  {
    path: 'admin/food-items',
    component: AdminFoodItemListComponent
  },
  {
    path: 'admin/order/:orderId',
    component: OrderDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
