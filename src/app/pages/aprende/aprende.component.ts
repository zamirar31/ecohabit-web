import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aprende',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aprende.component.html',
  styleUrls: ['./aprende.component.scss']
})
export class AprendeComponent {
  tips = [
    {
      icon: '💧',
      title: 'Ahorra agua en casa',
      text: 'Cierra el grifo mientras te cepillas los dientes y repara fugas lo antes posible.'
    },
    {
      icon: '⚡',
      title: 'Reduce tu consumo de energía',
      text: 'Desconecta dispositivos que no utilices y prefiere focos LED.'
    },
    {
      icon: '♻️',
      title: 'Recicla y reutiliza',
      text: 'Separa tus residuos y reutiliza envases cuando sea posible.'
    },
    {
      icon: '🚶‍♀️',
      title: 'Transporte sostenible',
      text: 'Camina, usa bicicleta o comparte vehículo para reducir emisiones.'
    }
  ];
}
