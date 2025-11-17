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
    this.service.list().subscribe(rows => this.retos = rows);
  }

  async eliminar(id: string): Promise<void> {
    await this.service.remove(id);
  }
}
