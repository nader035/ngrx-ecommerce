import { Component, inject } from '@angular/core';
import { BackButton } from '../../shared/back-button/back-button';
import { ViewPanel } from '../../../../core/directives/view-panel';
import { ShippingForm } from './shipping-form/shipping-form';
import { PaymentForm } from './payment-form/payment-form';
import { SummerizeOrder } from '../view-cart/summerize-order/summerize-order';
import { EcommerceStore } from '../../../../ecommmerce-store';
import { CurrencyPipe } from '@angular/common';
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-checkout',
  imports: [BackButton, ViewPanel, ShippingForm, PaymentForm, SummerizeOrder, CurrencyPipe, MatAnchor],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  store = inject(EcommerceStore);
}
