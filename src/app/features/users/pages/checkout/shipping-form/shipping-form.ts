import { Component, inject } from '@angular/core';
import { ViewPanel } from '../../../../../core/directives/view-panel';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatInput } from '@angular/material/input';
import { EcommerceStore } from '../../../../../ecommmerce-store';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-shipping-form',
  imports: [ViewPanel, MatIcon, MatFormField, MatInput],
  templateUrl: './shipping-form.html',
  styleUrl: './shipping-form.css',
})
export class ShippingForm {
  store = inject(EcommerceStore);
  fb = inject(NonNullableFormBuilder);

  shippingForm = this.fb.group({
    fullName: this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    }),
    address: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zipCode: ['', Validators.required],
  });
}
