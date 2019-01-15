import { Injectable } from '@angular/core';
import { OrderItem } from './order-item';
import { Observable, of } from 'rxjs';
import {ORDER_ITEMS_DATA } from './order-items-data';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  getItems(): Observable<OrderItem[]>{
    return of(ORDER_ITEMS_DATA);
  }
}
