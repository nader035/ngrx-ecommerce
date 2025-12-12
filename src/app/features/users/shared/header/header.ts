import { Component, inject } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { HeaderActions } from './header-actions/header-actions';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { EcommerceStore } from '../../../../ecommmerce-store';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, HeaderActions, RouterLink, MatIconButton, MatIcon],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  store = inject(EcommerceStore);
}
