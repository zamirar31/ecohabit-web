// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  Auth,
  authState,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  UserCredential
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private auth: Auth,
    private router: Router
  ) {
    authState(this.auth).subscribe(user => {
      this.isAuthenticatedSubject.next(!!user);
      this.currentUserSubject.next(user);
    });
  }

  /** observable booleando para el navbar */
  getAuthState(): Observable<boolean> {
    return this.isAuthenticated$;
  }

  /** usuario actual (para mostrar nombre, etc.) */
  getCurrentUser(): any {
    return this.currentUserSubject.value;
  }

  /** login */
  async login(email: string, password: string): Promise<UserCredential> {
    try {
      const result = await signInWithEmailAndPassword(this.auth, email, password);
      this.router.navigate(['/app/panel']);
      return result;
    } catch (error: any) {
      throw this.handleAuthError(error);
    }
  }

  /** registro */
  async register(
    email: string,
    password: string,
    nombre: string
  ): Promise<UserCredential> {
    try {
      const result = await createUserWithEmailAndPassword(this.auth, email, password);

      if (result.user) {
        await updateProfile(result.user, {
          displayName: nombre
        });
      }

      this.router.navigate(['/app/panel']);
      return result;
    } catch (error: any) {
      throw this.handleAuthError(error);
    }
  }

  /** logout */
  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
      this.router.navigate(['/']);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }

  /** mapeo de errores de Firebase a mensajes amigables */
  private handleAuthError(error: any): Error {
    console.error('Firebase Auth Error:', error);
    const errorCode = error.code || error.message;

    const errorMessages: { [key: string]: string } = {
      'auth/user-not-found': 'Usuario no encontrado. Verifica tu email.',
      'auth/wrong-password': 'Contraseña incorrecta. Intenta de nuevo.',
      'auth/invalid-credential': 'Email o contraseña inválidos. Si es tu primer intento, asegúrate de estar registrado.',
      'auth/invalid-email': 'El email no es válido.',
      'auth/email-already-in-use': 'Este email ya está registrado.',
      'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres.',
      'auth/user-disabled': 'Esta cuenta ha sido deshabilitada.',
      'auth/operation-not-allowed': 'Este tipo de inicio de sesión no está habilitado en Firebase Console → Authentication → Sign-in methods.',
      'auth/too-many-requests': 'Demasiados intentos. Intenta más tarde.'
    };

    const message =
      errorMessages[errorCode] ||
      `Error de autenticación: ${error.message || 'Intenta de nuevo.'}`;
    return new Error(message);
  }
}
