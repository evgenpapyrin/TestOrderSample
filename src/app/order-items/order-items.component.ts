import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderItem } from '../order-item';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  @Input() orderItems: OrderItem[];
  @Output() orderItemDelete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onDelete(id: number): void {
    this.orderItemDelete.emit(id);
  }

  isAvailable(orderItem: OrderItem): boolean {
    return orderItem.status === 'Available';
  }

}
