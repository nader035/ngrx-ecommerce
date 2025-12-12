import { RouterModule, Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products/all',
      },
      {
        path: 'products',
        pathMatch: 'full',
        redirectTo: 'products/all',
      },
      {
        path: 'products/:category',
        loadComponent: () =>
          import('../users/pages/products-grid/products-grid').then((m) => m.ProductsGrid),
      },
      {
        path: 'product/:productId',
        loadComponent: () =>
          import('../users/pages/view-product-details/view-product-details').then(
            (m) => m.ViewProductDetails
          ),
      },
      {
        path: 'wishlist',
        loadComponent: () =>
          import('../users/pages/my-wishlist/my-wishlist').then((m) => m.MyWishlist),
      },
      {
        path: 'cart',
        loadComponent: () => import('../users/pages/view-cart/view-cart').then((m) => m.ViewCart),
      },
      {
        path: 'checkout',
        loadComponent: () => import('../users/pages/checkout/checkout').then((m) => m.Checkout),
      },
      {
        path: 'order-success',
        loadComponent: () =>
          import('../users/pages/order-success/order-success').then((m) => m.OrderSuccess),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersModule {}
