import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddressListComponent } from './components/user-address-list/user-address-list.component';
import { UserAddressComponent } from './components/user-address/user-address.component';
import { UserCartComponent } from './components/user-cart/user-cart.component';
import { UserCheckoutComponent } from './components/user-checkout/user-checkout.component';
import { UserFoodItemComponent } from './components/user-food-item/user-food-item.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserOrderDetailComponent } from './components/user-order-detail/user-order-detail.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user/login',
    pathMatch: 'full'
  },
  {
    path: 'user/login',
    component: UserLoginComponent
  },
  {
    path: 'user/register',
    component: UserRegisterComponent
  },
  {
    path: 'user/home',
    component: UserHomeComponent
  },  
  {
    path: 'user/profile',
    component: UserProfileComponent
  },  
  {
    path: 'user/profile/:screen',
    component: UserProfileComponent
  },
  {
    path: 'user/home/food-item-details/:foodItemId',
    component: UserFoodItemComponent
  },
  {
    path: 'user/address/list',
    component: UserAddressListComponent
  },
  {
    path: 'user/address',
    component: UserAddressComponent
  },
  {
    path: 'user/address/:addressId',
    component: UserAddressComponent
  },
  {
    path: 'user/cart',
    component: UserCartComponent
  },
  {
    path: 'user/checkout',
    component: UserCheckoutComponent
  },
  {
    path: 'user/order',
    component: UserOrderDetailComponent
  },
  {
    path: 'user/order/:orderId',
    component: UserOrderDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
