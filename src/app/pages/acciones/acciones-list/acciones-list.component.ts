import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ActionsService } from '../../../ services/actions.service';
import { Action } from '../../../models/action.model';

@Component({
  selector: 'app-acciones-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="wrap">
      <h2>Acciones registradas</h2>
      <a routerLink="/acciones/nuevo">+ Nueva acción</a>

      <ul>
        <li *ngFor="let a of acciones">
          <b>{{ a.type }}</b> - {{ a.points }} pts - {{ a.date }}
          <div><small>Usuario: {{ a.userId }}</small></div>
          <a [routerLink]="['/acciones/editar', a.id]">Editar</a>
          <button (click)="eliminar(a.id!)">Eliminar</button>
        </li>
      </ul>
    </div>
  `
})
export class AccionesListComponent {
  private service = inject(ActionsService);
  acciones: Action[] = [];

  ngOnInit(): void {
    this.service.list().subscribe({
      next: (rows) => {
        console.log('Datos de Firestore:', rows);
        this.acciones = rows;
      },
      error: (err) => console.error('Error list()', err)
    });
  }

  async eliminar(id: string): Promise<void> {
    try {
      await this.service.remove(id);
    } catch (e) {
      console.error('Error remove()', e);
    }
  }
}
