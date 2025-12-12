import { Component, computed, inject, signal } from '@angular/core';
import { ViewPanel } from '../../../../../core/directives/view-panel';
import { EcommerceStore } from '../../../../../ecommmerce-store';
import { MatButton } from '@angular/material/button';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-summerize-order',
  imports: [ViewPanel, MatButton, CurrencyPipe],
  templateUrl: './summerize-order.html',
  styleUrl: './summerize-order.css',
})
export class SummerizeOrder {
  store = inject(EcommerceStore);
  subtotal = computed(() => {
    return this.store.cartItems().reduce((acc, i) => acc + i.product.price * i.quantity, 0);
  });
  tax = computed(() => this.subtotal() * 0.05);
  total = computed(() => this.subtotal() + this.tax());
}
