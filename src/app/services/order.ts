import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth';
import { environment } from '../../environments/environment';

export interface OrderItem {
  productId: number;
  quantity: number;
}

export interface Order {
  id: number;
  status: string;
  items: { productTitle: string; quantity: number }[];
}

@Injectable({ providedIn: 'root' })
export class OrderService {
  private apiUrl = `${environment.shopUserUrl}/api/orders`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`
    });
  }

  createOrder(productId: number) {
    return this.http.post(this.apiUrl, {
      items: [{ productId, quantity: 1 }]
    }, { headers: this.getHeaders() });
  }

  getOrders() {
    return this.http.get<Order[]>(this.apiUrl, { headers: this.getHeaders() });
  }
}