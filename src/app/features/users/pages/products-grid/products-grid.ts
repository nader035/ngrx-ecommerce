import { Component, computed, inject, input, signal } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { IProduct } from '../../../../core/models/iproduct';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatNavList, MatList, MatListItem, MatListItemTitle } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { EcommerceStore } from '../../../../ecommmerce-store';
import { ToggleWishlistButton } from '../../shared/toggle-wishlist-button/toggle-wishlist-button';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-products-grid',
  imports: [
    ProductCard,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatNavList,
    MatListItem,
    MatListItemTitle,
    RouterLink,
    TitleCasePipe,
    ToggleWishlistButton,
  ],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.css',
})
export class ProductsGrid {
  breakpointObserver = inject(BreakpointObserver);
  category = input('all');
  categories = signal(['all', 'electronics', 'clothing', 'accessories', 'home']);
  isSmallScreen = signal<boolean>(false);
  store = inject(EcommerceStore);
  constructor() {
    this.store.setCategory(this.category);
    this.breakpointObserver.observe(['(max-width: 992px)']).subscribe((result) => {
      this.isSmallScreen.set(result.matches);
      if (result.matches) {
        this.store.setSidenavState(false);
      } else {
        this.store.setSidenavState(true);
      }
    });
  }
}
