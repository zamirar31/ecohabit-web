import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ActionsService } from '../../../ services/actions.service';
import { Action } from '../../../models/action.model';

@Component({
  selector: 'app-acciones-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './acciones-list.component.html',
  styleUrls: ['./acciones-list.component.scss']
})
export class AccionesListComponent implements OnInit {
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
