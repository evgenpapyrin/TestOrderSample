import { Component, OnInit, Input } from '@angular/core';
import { OrderItem } from '../order-item';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  @Input() orderItems : OrderItem[];

  constructor() { }

  ngOnInit() {
  }

  onDelete(item:OrderItem): void{
    const index = this.orderItems.indexOf(item, 0);
    if (index > -1) {
      this.orderItems.splice(index, 1);
    }
  }

}
