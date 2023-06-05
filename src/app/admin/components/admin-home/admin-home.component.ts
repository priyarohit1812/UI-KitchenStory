import { Component, OnInit } from '@angular/core';
import { AdminOrdersService } from '../../services/orders/admin-orders.service';
import { PurchaseOrder, Response } from 'src/app/core/models/data.model';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  orderList: PurchaseOrder[];
  p: number;

  constructor(private adminOrderService: AdminOrdersService) { }

  ngOnInit(): void {
    this.fetchAllAddress();
  }

  fetchAllAddress(){
    this.adminOrderService.getOrderList().subscribe((response:Response)=>{
      if (!response.isError) {
        this.orderList = response.response;
      }
    });
  }

}
