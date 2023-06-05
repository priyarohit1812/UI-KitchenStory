import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { CoreModule } from '../core/core.module';
import { UserFoodItemComponent } from './components/user-food-item/user-food-item.component';
import { UserCartComponent } from './components/user-cart/user-cart.component';
import { UserCheckoutComponent } from './components/user-checkout/user-checkout.component';
import { UserPurchaseOrderComponent } from './components/user-purchase-order/user-purchase-order.component';
import { UserAddressComponent } from './components/user-address/user-address.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserAddressListComponent } from './components/user-address-list/user-address-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserDetailsComponent } from './components/user-details/user-details.component';


@NgModule({
  declarations: [
    UserLoginComponent,
    UserRegisterComponent,
    UserHomeComponent,
    UserFoodItemComponent,
    UserCartComponent,
    UserCheckoutComponent,
    UserPurchaseOrderComponent,
    UserAddressComponent,
    UserProfileComponent,
    UserAddressListComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    UserRoutingModule,
    ReactiveFormsModule,    
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class UserModule { }
