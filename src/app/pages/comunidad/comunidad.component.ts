import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comunidad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.scss']
})
export class ComunidadComponent {
  ideas = [
    {
      autor: 'Iris',
      titulo: 'Campaña de reciclaje en CEUTEC',
      descripcion: 'Propuesta para instalar puntos verdes en el campus y registrar acciones en EcoHabit.',
      fecha: 'Hace 2 horas'
    },
    {
      autor: 'Test User',
      titulo: 'Huerto comunitario',
      descripcion: 'Organizar un pequeño huerto urbano para estudiantes y docentes.',
      fecha: 'Ayer'
    },
    {
      autor: 'Equipo EcoHabit',
      titulo: 'Semana Eco',
      descripcion: 'Reto de 7 días con acciones diarias para reducir nuestra huella ecológica.',
      fecha: 'Hace 3 días'
    }
  ];
}
