import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <nav style="background:#0a3; color:#fff; padding:4px">
      <a routerLink="/" style="margin-right:12px">EcoHabit</a>
      <a routerLink="/login" style="margin-right:12px">Login</a>
      <a routerLink="/registro" style="margin-right:12px">Registro</a>
      <a routerLink="/panel" style="margin-right:12px">Panel</a>
      <a routerLink="/acciones" style="color:#fff">Acciones</a>
      <a routerLink="/retos" style="margin-right:12px">Retos</a>
    </nav>

    <!-- 🔴 IMPORTANTE: aquí se renderizan las páginas -->
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
