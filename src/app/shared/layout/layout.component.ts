// src/app/shared/layout/layout.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './layout.component.html',   // 👈 YA NO navbar.component.html
  styleUrls: ['./layout.component.scss']    // puede existir vacío, no hay problema
})
export class LayoutComponent { }
