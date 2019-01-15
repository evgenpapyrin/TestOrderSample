import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order-service';
import { OrderItem } from '../order-item';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderItems : OrderItem[];



  constructor(private orderService:OrderService) { }

  ngOnInit() {
    this.getOrderItems();
  }

  getOrderItems(): void {
     this.orderService.getItems().subscribe(items => this.orderItems = items);
  }

}
