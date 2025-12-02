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
  selectedTab: TabKey = 'todos';

  ngOnInit(): void {
    this.service.list().subscribe({
      next: (rows: Challenge[]) => {
        console.log('Retos desde Firestore:', rows);
        this.retos = rows;
      },
      error: (err: any) => console.error('Error list() retos', err)
    });
  }

  setTab(tab: TabKey): void {
    this.selectedTab = tab;
  }

  /** Lista filtrada según la pestaña seleccionada */
  get retosFiltrados(): Challenge[] {
    const hoy = new Date();

    return this.retos.filter((r) => {
      const start = this.parseDate(r.startDate);

      switch (this.selectedTab) {
        case 'activos':
          return !!r.active;

        case 'completados':
          return !r.active;

        case 'proximos':
          return !!r.active && start > hoy;

        case 'todos':
        default:
          return true;
      }
    });
  }

  async eliminar(id: string): Promise<void> {
    try {
      await this.service.remove(id);
    } catch (e) {
      console.error('Error remove() reto', e);
    }
  }

  /** Normaliza la fecha (string, Date o Timestamp de Firestore) */
  private parseDate(value: any): Date {
    if (!value) return new Date(0);

    // Si viene como Timestamp de Firestore (tiene método toDate)
    if (value?.toDate && typeof value.toDate === 'function') {
      return value.toDate();
    }

    // Si ya es Date
    if (value instanceof Date) return value;

    // Si es string "YYYY-MM-DD"
    return new Date(value);
  }

  /** Calcula el % de progreso de un reto */
  getProgress(r: Challenge): number {
    // Si está inactivo lo consideramos 100% completado
    if (!r.active) {
      return 100;
    }

    const hoy = new Date();
    const start = this.parseDate(r.startDate);
    const end = this.parseDate(r.endDate);

    // Si todavía no inicia
    if (hoy <= start) {
      return 0;
    }

    // Si ya terminó
    if (hoy >= end) {
      return 100;
    }

    const totalMs = end.getTime() - start.getTime();
    const elapsedMs = hoy.getTime() - start.getTime();

    if (totalMs <= 0) {
      return 0;
    }

    const pct = Math.round((elapsedMs / totalMs) * 100);
    // Aseguramos rango 0–100
    return Math.min(100, Math.max(0, pct));
  }
}
