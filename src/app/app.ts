import { Component } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { AuthComponent } from './auth/auth';
import { ProductsComponent } from './products/products';
import { OrdersComponent } from './orders/orders';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AuthComponent, ProductsComponent, OrdersComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}