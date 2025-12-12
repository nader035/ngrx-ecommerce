import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ViewPanel } from '../../../../../core/directives/view-panel';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-payment-form',
  imports: [MatIcon, ViewPanel, MatRadioModule],
  templateUrl: './payment-form.html',
  styleUrl: './payment-form.css',
})
export class PaymentForm {}
