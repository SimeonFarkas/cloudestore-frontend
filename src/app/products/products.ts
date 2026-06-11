import { Component, ChangeDetectorRef } from '@angular/core';
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

  constructor(private productService: ProductService, private orderService: OrderService, private cdr: ChangeDetectorRef) {}

  loadProducts() {
    this.productService.getProducts().subscribe({
      next: (data) => { this.products = data; this.cdr.detectChanges(); },
      error: () => { this.message = 'Could not fetch products.'; this.cdr.detectChanges(); }
    });
  }

  order(productId: number) {
    this.orderService.createOrder(productId).subscribe({
      next: () => { this.message = 'Order created!'; this.cdr.detectChanges(); },
      error: () => { this.message = 'Could not create order.'; this.cdr.detectChanges(); }
    });
  }
}