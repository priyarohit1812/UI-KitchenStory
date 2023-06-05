import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { OrderItem, PurchaseOrderResponse, Response } from 'src/app/core/models/data.model';
import { UserOrderService } from '../../services/order/user-order.service';

@Component({
  selector: 'app-user-order-detail',
  templateUrl: './user-order-detail.component.html',
  styleUrls: ['./user-order-detail.component.scss']
})
export class UserOrderDetailComponent implements OnInit {
  orderDetails: PurchaseOrderResponse;
  orderItemList: OrderItem[];
  constructor(private activeRoute: ActivatedRoute, private userOrderService: UserOrderService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((param: ParamMap) => {
      let orderId = param.get('orderId');
      if (orderId) {
        this.userOrderService.getOrder(orderId).subscribe((response:Response)=>{
          if(!response.isError){
            this.orderDetails = response.response;            
          }
        });
      } else {
        this.orderDetails = history.state;
      }
      if (this.orderDetails) {
        this.orderItemList = this.orderDetails.orderItems;
      }
    });
  }

  getOrderDetials(){
    return JSON.stringify(this.orderDetails);
  }

}
