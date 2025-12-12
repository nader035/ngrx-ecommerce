import { Component, inject, signal } from '@angular/core';
import { MatIconButton, MatAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialog, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatInput, MatSuffix, MatPrefix } from '@angular/material/input';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { of } from 'rxjs';
import { EcommerceStore } from '../../../../ecommmerce-store';
import { SignUpParams } from '../../../../core/models/iuser';
import { SignInDialog } from '../sign-in-dialog/sign-in-dialog';

function equalValues(controlName1: string, controlName2: string) {
  return (control: AbstractControl) => {
    const val1 = control.get(controlName1)?.value;
    const val2 = control.get(controlName2)?.value;
    if (val1 === val2) {
      return null;
    }
    return of({
      isNotEqualValues: true,
    });
  };
}

@Component({
  selector: 'app-sign-up-dialog',
  imports: [
    MatIcon,
    MatIconButton,
    MatDialogClose,
    MatFormField,
    MatInput,
    MatSuffix,
    MatPrefix,
    ReactiveFormsModule,
    MatAnchor,
  ],
  templateUrl: './sign-up-dialog.html',
  styleUrl: './sign-up-dialog.css',
})
export class SignUpDialog {
  matDialog = inject(MatDialog);

  store = inject(EcommerceStore);
  fb = inject(NonNullableFormBuilder);
  data = inject(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef);
  passwordVisible = signal(false);
  confirmPasswordVisible = signal(false);

  signUpForm = this.fb.group({
    name: [
      'Nader Mohammed',
      {
        validators: [Validators.required],
      },
    ],
    email: [
      'nader@n.a',
      {
        validators: [Validators.required, Validators.email],
      },
    ],
    passwords: this.fb.group(
      {
        password: [
          'nader123',
          {
            validators: [Validators.required, Validators.minLength(6)],
          },
        ],
        confirmPassword: [
          'nader123',
          {
            validators: [Validators.required, Validators.minLength(6)],
          },
        ],
      },
      {
        validators: [equalValues('password', 'confirmPassword')],
      }
    ),
  });

  signUp() {
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      return;
    }

    const { name, email, passwords } = this.signUpForm.value;
    this.store.signUp({
      name,
      email,
      password: passwords?.password,
      checkout: this.data?.checkout,
      dialogId: this.dialogRef.id,
    } as SignUpParams);
  }

  openSignInDialog() {
    this.matDialog.getDialogById(this.dialogRef.id)?.close();
    this.matDialog.open(SignInDialog, {
      disableClose: true,
      data: {
        checkout: this.data?.checkout,
      },
    });
  }
}
