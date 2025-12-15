import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  userStats = {
    points: 2450,
    challengesCompleted: 12,
    level: 'Oro',
    streak: 7
  };

  recentActivity = [
    {
      icon: '♻️',
      title: 'Reciclaste 5kg de plástico',
      time: 'Hace 2 horas',
      points: 25
    },
    {
      icon: '🌱',
      title: 'Completaste reto: Agua Limpia',
      time: 'Hace 1 día',
      points: 100
    },
    {
      icon: '🚴',
      title: 'Usaste transporte sostenible',
      time: 'Hace 2 días',
      points: 15
    }
  ];

  impact = {
    trees: 24,
    water: '450L',
    waste: '125kg',
    energy: '85kWh'
  };

  ngOnInit(): void {
    console.log('Panel inicializado');
  }
}
