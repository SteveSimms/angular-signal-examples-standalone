import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './client.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComputeService {
  private httpService = inject(HttpClient);

  getProducts(): Observable<Product[]> {
    return this.httpService.get<Product[]>('https://fakestoreapi.com/products');
  }
}
