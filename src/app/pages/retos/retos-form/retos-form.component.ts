
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ChallengesService } from '../../../ services/challenges.service';
import { Challenge } from '../../../models/challenge.model';

@Component({
  selector: 'app-retos-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="wrap">
      <h2>{{ id ? 'Editar' : 'Nuevo' }} reto</h2>

      <form (ngSubmit)="guardar()">
        <label>Nombre
          <input [(ngModel)]="model.name" name="name" required />
        </label>

        <label>Descripción
          <textarea [(ngModel)]="model.description" name="description"></textarea>
        </label>

        <label>Puntos
          <input type="number" [(ngModel)]="model.points" name="points" required />
        </label>

        <label>Fecha inicio
          <input type="date" [(ngModel)]="model.startDate" name="startDate" required />
        </label>

        <label>Fecha fin
          <input type="date" [(ngModel)]="model.endDate" name="endDate" required />
        </label>

        <label>Activo
          <input type="checkbox" [(ngModel)]="model.active" name="active" />
        </label>

        <button type="submit">Guardar</button>
        <a routerLink="/retos">Cancelar</a>
      </form>
    </div>
  `
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

  ngOnInit(): void {
    if (this.id) {
      this.service.getById(this.id).subscribe(r => {
        if (r) this.model = r;
      });
    }
  }

  async guardar(): Promise<void> {
    if (this.id) {
      await this.service.update(this.id, this.model);
    } else {
      await this.service.create(this.model);
    }
    this.router.navigateByUrl('/retos');
  }
}

