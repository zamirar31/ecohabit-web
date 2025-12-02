// src/app/pages/retos/retos-form/retos-form.component.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ChallengesService } from '../../../ services/challenges.service';
import { Challenge } from '../../../models/challenge.model';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-retos-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="wrap">
      <h2>{{ id ? 'Editar' : 'Nuevo' }} reto</h2>

      <form (ngSubmit)="guardar()">
        <label>Nombre del reto
          <input
            type="text"
            name="name"
            [(ngModel)]="model.name"
            required />
        </label>

        <label>Descripción
          <textarea
            name="description"
            [(ngModel)]="model.description"
            rows="3">
          </textarea>
        </label>

        <label>Puntos
          <input
            type="number"
            name="points"
            [(ngModel)]="model.points"
            required />
        </label>

        <label>Fecha de inicio
          <input
            type="date"
            name="startDate"
            [(ngModel)]="model.startDate"
            required />
        </label>

        <label>Fecha de fin
          <input
            type="date"
            name="endDate"
            [(ngModel)]="model.endDate"
            required />
        </label>

        <label class="chk-inline">
          <input
            type="checkbox"
            name="active"
            [(ngModel)]="model.active" />
          Activo
        </label>

        <button type="submit">Guardar</button>
        <a routerLink="/app/retos">Cancelar</a>
      </form>
    </div>
  `,
  styleUrls: ['./retos-form.component.scss']
})
export class RetosFormComponent {
  private service = inject(ChallengesService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  id: string | null = this.route.snapshot.paramMap.get('id');

  model: Challenge = {
    name: '',
    description: '',
    points: 0,
    startDate: new Date().toISOString().slice(0, 10),
    endDate: new Date().toISOString().slice(0, 10),
    active: true
  };

  async ngOnInit() {
    if (this.id) {
      try {
        const data = await firstValueFrom<Challenge | undefined>(
          this.service.getById(this.id)
        );
        if (data) {
          this.model = { ...this.model, ...data };
        }
      } catch (e) {
        console.error('Error getById() reto', e);
      }
    }
  }

  async guardar(): Promise<void> {
    try {
      if (this.id) {
        await this.service.update(this.id, this.model);
      } else {
        await this.service.create(this.model);
      }

      // Volver al listado de retos dentro de /app
      this.router.navigateByUrl('/app/retos');
    } catch (e) {
      console.error('Error guardar() reto', e);
    }
  }
}

