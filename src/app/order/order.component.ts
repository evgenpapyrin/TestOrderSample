import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order-service';
import { OrderItem } from '../order-item';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public orderItems: OrderItem[];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getOrderItems();
  }

  private getOrderItems(): void {
     this.orderService.getItems().subscribe(items => this.orderItems = items);
  }

  public deleteOrderItem(id: number): void {
    this.orderItems = this.orderItems.filter(item => item.id !== id);
  }

}
