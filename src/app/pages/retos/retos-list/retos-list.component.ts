// src/app/pages/retos/retos-list/retos-list.component.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ChallengesService } from '../../../ services/challenges.service';
import { Challenge } from '../../../models/challenge.model';

@Component({
  selector: 'app-retos-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="wrap">
      <h2>Retos</h2>
      <a routerLink="/retos/nuevo">+ Nuevo reto</a>
      <ul>
        <li *ngFor="let r of retos">
          <b>{{ r.name }}</b> - {{ r.points }} pts
          <span> | {{ r.startDate }} → {{ r.endDate }}</span>
          <span> | Estado: {{ r.active ? 'Activo' : 'Inactivo' }}</span>
          <div>Descripción: {{ r.description || '-' }}</div>
          <a [routerLink]="['/retos/editar', r.id]">Editar</a>
          <button (click)="eliminar(r.id!)">Eliminar</button>
        </li>
      </ul>
    </div>
  `
})
export class RetosListComponent {
  private service = inject(ChallengesService);
  retos: Challenge[] = [];

  ngOnInit(): void {
    this.service.list().subscribe(rows => this.retos = rows);
  }

  async eliminar(id: string): Promise<void> {
    await this.service.remove(id);
  }
}
