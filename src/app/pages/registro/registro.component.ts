import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../ services/auth.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  registroForm: FormGroup;
  loading = false;
  error = '';
  successMessage = '';
  step = 1;
  showPassword = false;
  passwordStrength = '';

  constructor() {
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      bio: [''],
      terms: [false, Validators.requiredTrue],
      newsletter: [false]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }

  onPasswordChange(): void {
    const password = this.registroForm.get('password')?.value;
    if (!password) {
      this.passwordStrength = '';
      return;
    }

    if (password.length < 8) {
      this.passwordStrength = 'débil';
    } else if (/^[a-z0-9]+$/.test(password)) {
      this.passwordStrength = 'regular';
    } else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]+$/.test(password)) {
      this.passwordStrength = 'fuerte';
    } else {
      this.passwordStrength = 'medio';
    }
  }

  async onSubmit(): Promise<void> {
    if (this.registroForm.invalid) {
      return;
    }

    this.loading = true;
    this.error = '';
    this.successMessage = '';

    try {
      const { email, password, nombre } = this.registroForm.value;
      await this.authService.register(email, password, nombre);
      this.successMessage = '¡Cuenta creada exitosamente!';
    } catch (err: any) {
      this.error = err.message || 'Error al crear la cuenta';
    } finally {
      this.loading = false;
    }
  }

  nextStep(): void {
    if (this.step < 2) {
      this.step++;
    }
  }

  prevStep(): void {
    if (this.step > 1) {
      this.step--;
    }
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
}
