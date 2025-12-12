import { Component, inject } from '@angular/core';
import { BackButton } from '../../shared/back-button/back-button';
import { MatIcon } from '@angular/material/icon';
import { MatAnchor } from '@angular/material/button';
import { EcommerceStore } from '../../../../ecommmerce-store';
import { RouterLink } from '@angular/router';
import { ViewPanel } from '../../../../core/directives/view-panel';
import { ListCartItems } from './list-cart-items/list-cart-items';
import { SummerizeOrder } from './summerize-order/summerize-order';

@Component({
  selector: 'app-view-cart',
  imports: [BackButton, MatIcon, MatAnchor, RouterLink, ViewPanel, ListCartItems, SummerizeOrder],
  templateUrl: './view-cart.html',
  styleUrl: './view-cart.css',
})
export class ViewCart {
  store = inject(EcommerceStore);
}
