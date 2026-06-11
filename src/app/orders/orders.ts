import { Component } from '@angular/core';
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

  constructor(private orderService: OrderService) {}

  loadOrders() {
    this.orderService.getOrders().subscribe({
      next: (data) => this.orders = data,
      error: () => this.message = 'Kunde inte hämta ordrar.'
    });
  }
}