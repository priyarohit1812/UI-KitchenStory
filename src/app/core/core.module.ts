import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InterceptorService } from './services/interceptor.service';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';



@NgModule({
  declarations: [
    NavbarComponent,
    OrderDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    OrderDetailComponent
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }]
})
export class CoreModule { }
