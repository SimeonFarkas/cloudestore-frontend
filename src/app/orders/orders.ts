import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService, Order } from '../services/order';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export class OrdersComponent {
  orders: Order[] = [];
  message = '';

  constructor(private orderService: OrderService, private cdr: ChangeDetectorRef) {}

  loadOrders() {
    this.orderService.getOrders().subscribe({
      next: (data) => { this.orders = data; this.cdr.detectChanges(); },
      error: () => { this.message = 'Could not fetch orders.'; this.cdr.detectChanges(); }
    });
  }
}