import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { OrderItem } from '../order-item';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class OrderInfoComponent implements OnInit, OnChanges {

  public countItems: number;
  public sumItems: number;
  @Input() orderItems: OrderItem[];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.countItems = this.orderItems.length;
    this.sumItems = this.orderItems.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
  }

}
