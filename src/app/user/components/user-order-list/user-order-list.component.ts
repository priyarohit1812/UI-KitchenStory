import { Component, OnInit } from '@angular/core';
import { UserOrderService } from '../../services/order/user-order.service';
import { PurchaseOrder, Response } from 'src/app/core/models/data.model';

@Component({
  selector: 'app-user-order-list',
  templateUrl: './user-order-list.component.html',
  styleUrls: ['./user-order-list.component.scss']
})
export class UserOrderListComponent implements OnInit {
  orderList: PurchaseOrder[];
  p: number;

  constructor(private userOrderService: UserOrderService) { }

  ngOnInit(): void {
    this.fetchAllAddress();
  }

  fetchAllAddress(){
    this.userOrderService.getUserOrderList().subscribe((response:Response)=>{
      if (!response.isError) {
        this.orderList = response.response;
      }
    });
  }

}
