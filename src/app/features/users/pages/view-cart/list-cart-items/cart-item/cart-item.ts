import { Component, computed, inject, input } from '@angular/core';
import { Icart } from '../../../../../../core/models/icart';
import { CurrencyPipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { EcommerceStore } from '../../../../../../ecommmerce-store';

@Component({
  selector: 'app-cart-item',
  imports: [CurrencyPipe, MatIcon, MatIconButton],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.css',
})
export class CartItem {
  store = inject(EcommerceStore);
  item = input.required<Icart>();
  total = computed(() => (this.item().product.price * this.item().quantity).toFixed(2));
}
