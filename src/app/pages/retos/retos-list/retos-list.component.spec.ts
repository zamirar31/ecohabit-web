// src/app/pages/retos/retos-list/retos-list.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ChallengesService } from '../../../ services/challenges.service';
import { Challenge } from '../../../models/challenge.model';

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

  ngOnInit(): void {
    this.service.list().subscribe({
      next: (rows: Challenge[]) => {
        console.log('Retos desde Firestore:', rows);
        this.retos = rows;
      },
      error: (err: any) => console.error('Error list() retos', err)
    });
  }

  async eliminar(id: string): Promise<void> {
    try {
      await this.service.remove(id);
    } catch (e) {
      console.error('Error remove() reto', e);
    }
  }
}
