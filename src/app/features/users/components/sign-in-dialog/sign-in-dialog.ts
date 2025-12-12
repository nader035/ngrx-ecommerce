import { Component, inject, signal } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EcommerceStore } from '../../../../ecommmerce-store';
import { SignInParams } from '../../../../core/models/iuser';
import { SignUpDialog } from '../sign-up-dialog/sign-up-dialog';
@Component({
  selector: 'app-sign-in-dialog',
  imports: [
    ReactiveFormsModule,
    MatButton,
    MatDialogClose,
    MatIcon,
    MatIconButton,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './sign-in-dialog.html',
  styleUrl: './sign-in-dialog.css',
})
export class SignInDialog {
  store = inject(EcommerceStore);
  fb = inject(NonNullableFormBuilder);
  data = inject<{ checkout: boolean }>(MAT_DIALOG_DATA);
  matDialog = inject(MatDialog);
  dialogRef = inject(MatDialogRef);
  passwordVisible = signal(false);
  signInForm = this.fb.group({
    email: [
      'nader@n.a',
      {
        validators: [Validators.email, Validators.required],
      },
    ],
    password: [
      'nader123',
      {
        validators: [Validators.required, Validators.minLength(6)],
      },
    ],
  });
  signIn() {
    if (this.signInForm.invalid) {
      this.signInForm.markAllAsTouched();
      return;
    }
    const { email, password } = this.signInForm.value;
    this.store.signIn({
      email,
      password,
      checkout: this.data?.checkout,
      dialogId: this.dialogRef.id,
    } as SignInParams);
  }

  openSignUpDialog() {
    this.matDialog.getDialogById(this.dialogRef.id)?.close();
    this.matDialog.open(SignUpDialog, {
      disableClose: true,
      data: {
        checkout: this.data?.checkout,
      },
    });
  }
}
