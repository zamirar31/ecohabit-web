import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ActionsService } from '../../../ services/actions.service';
import { Action } from '../../../models/action.model';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-acciones-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="wrap">
      <h2>{{ id ? 'Editar' : 'Nueva' }} acción</h2>

      <form (ngSubmit)="guardar()">
        <label>Usuario
          <input [(ngModel)]="model.userId" name="userId" required />
        </label>

        <label>Tipo
          <select [(ngModel)]="model.type" name="type" required>
            <option value="reciclaje">Reciclaje</option>
            <option value="energia">Ahorro de energía</option>
            <option value="transporte">Transporte sostenible</option>
            <option value="agua">Ahorro de agua</option>
            <option value="otro">Otro</option>
          </select>
        </label>

        <label>Puntos
          <input type="number" [(ngModel)]="model.points" name="points" required />
        </label>

        <label>Fecha
          <input type="date" [(ngModel)]="model.date" name="date" required />
        </label>

        <label>Notas
          <textarea [(ngModel)]="model.notes" name="notes"></textarea>
        </label>

        <button type="submit">Guardar</button>
        <a routerLink="/acciones">Cancelar</a>
      </form>
    </div>
  `
})
export class AccionesFormComponent {
  private service = inject(ActionsService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  id: string | null = this.route.snapshot.paramMap.get('id');

  model: Action = {
    userId: '',
    type: 'reciclaje',
    points: 0,
    date: new Date().toISOString().slice(0, 10),
    notes: ''
  };

  async ngOnInit() {
    if (this.id) {
      try {
        const data = await firstValueFrom(this.service.getById(this.id));
        if (data) this.model = { ...this.model, ...data };
      } catch (e) {
        console.error('Error getById()', e);
      }
    }
  }

  async guardar() {
    try {
      if (this.id) {
        await this.service.update(this.id, this.model);
      } else {
        await this.service.create(this.model);
      }
      this.router.navigateByUrl('/acciones');
    } catch (e) {
      console.error('Error guardar()', e);
    }
  }
}
