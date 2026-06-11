import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../services/product';
import { OrderService } from '../services/order';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsComponent {
  products: Product[] = [];
  message = '';

  constructor(private productService: ProductService, private orderService: OrderService) {}

  loadProducts() {
    this.productService.getProducts().subscribe({
      next: (data) => this.products = data,
      error: () => this.message = 'Kunde inte hämta produkter.'
    });
  }

  order(productId: number) {
    this.orderService.createOrder(productId).subscribe({
      next: () => this.message = 'Order skapad!',
      error: () => this.message = 'Kunde inte skapa order.'
    });
  }
}