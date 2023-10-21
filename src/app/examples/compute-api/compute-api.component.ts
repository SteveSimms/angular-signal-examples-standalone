import {
  Component,
  WritableSignal,
  inject,
  signal,
  computed,
  Signal,
} from '@angular/core';
import { ComputeService } from './compute.service';
import { Product } from './client.interface';

@Component({
  selector: 'app-compute-api',
  templateUrl: './compute-api.component.html',
  styleUrls: ['./compute-api.component.css'],
})
export class ComputeApiComponent {
  computeService = inject(ComputeService);
  products: WritableSignal<Product[]> = signal([]);
  cartItems: WritableSignal<Product[]> = signal([]);

  totalCartPrice: Signal<number> = computed(() => {
    let totalPrice = 0;
    this.cartItems().forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  });

  constructor() {
    this.getProducts();
  }

  getProducts() {
    this.computeService
      .getProducts()
      .subscribe((products) => this.products.set(products));
  }

  addToCart(product: Product) {
    this.cartItems.update((items) => {
      items.push(product);
      return items;
    });
  }
}
