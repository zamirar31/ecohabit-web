import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ChallengesService } from '../../../ services/challenges.service';
import { Challenge } from '../../../models/challenge.model';

type TabKey = 'todos' | 'activos' | 'completados' | 'proximos';

@Component({
  selector: 'app-retos-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './retos-list.component.html',
  styleUrls: ['./retos-list.component.scss']
})
export class RetosListComponent implements OnInit {

  private service = inject(ChallengesService);

  retos: Challenge[] = [];
  filteredRetos: Challenge[] = [];

  // pestaña activa
  activeTab: 'todos' | 'activos' | 'completados' | 'proximos' = 'todos';

  ngOnInit(): void {
    this.service.list().subscribe(rows => {
      this.retos = rows;
      this.applyFilter();  // aplicar filtro al cargar
    });
  }

  async eliminar(id: string): Promise<void> {
    await this.service.remove(id);
    // quitar el reto de la lista local y volver a filtrar
    this.retos = this.retos.filter(r => r.id !== id);
    this.applyFilter();
  }

  // cuando el usuario cambia de tab
  setTab(tab: 'todos' | 'activos' | 'completados' | 'proximos'): void {
    this.activeTab = tab;
    this.applyFilter();
  }

  // aplica el filtro según la pestaña
  private applyFilter(): void {
    const now = new Date();

    switch (this.activeTab) {
      case 'activos':
        this.filteredRetos = this.retos.filter(r => r.active === true);
        break;

      case 'completados':
        this.filteredRetos = this.retos.filter(r => r.active === false);
        break;

      case 'proximos':
        // aquí asumo que startDate es un string de fecha; si es Timestamp habría que convertir
        this.filteredRetos = this.retos.filter(r => new Date(r.startDate) > now);
        break;

      default: // 'todos'
        this.filteredRetos = [...this.retos];
        break;
    }
  }

  getProgress(reto: Challenge): number {
    const start = new Date(reto.startDate).getTime();
    const end = new Date(reto.endDate).getTime();
    const now = new Date().getTime();

    const total = end - start;
    const elapsed = now - start;
    const progress = (elapsed / total) * 100;

    return Math.max(0, Math.min(100, Math.round(progress)));
  }
}
