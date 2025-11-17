import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit, OnDestroy {
  
  parallaxOffset = 0;
  scrollY = 0;

  stats = [
    { number: '2,500+', label: 'Usuarios Activos', icon: '👥' },
    { number: '15,000+', label: 'Acciones Realizadas', icon: '✨' },
    { number: '500+', label: 'Retos Completados', icon: '🏆' }
  ];

  features = [
    {
      icon: '🌱',
      title: 'Hábitos Sustentables',
      description: 'Aprende y cultiva hábitos ecológicos que harán la diferencia en tu vida diaria.'
    },
    {
      icon: '🏆',
      title: 'Retos Emocionantes',
      description: 'Participa en desafíos temáticos y gana puntos mientras ayudas al planeta.'
    },
    {
      icon: '👥',
      title: 'Comunidad Global',
      description: 'Conecta con otros usuarios comprometidos con la sostenibilidad ambiental.'
    },
    {
      icon: '📊',
      title: 'Seguimiento Detallado',
      description: 'Visualiza tu progreso y el impacto que generas en el medio ambiente.'
    },
    {
      icon: '💚',
      title: 'Educación Continua',
      description: 'Accede a contenido educativo sobre sostenibilidad y ecología.'
    },
    {
      icon: '🌍',
      title: 'Impacto Mensurable',
      description: 'Calcula exactamente cuánto estás contribuyendo a cuidar nuestro planeta.'
    }
  ];

  steps = [
    {
      number: 1,
      title: 'Registrate',
      description: 'Crea tu cuenta en segundos y únete a nuestra comunidad ecológica.',
      icon: '📝'
    },
    {
      number: 2,
      title: 'Elige Hábitos',
      description: 'Selecciona los hábitos sostenibles que quieres incorporar en tu rutina.',
      icon: '🌿'
    },
    {
      number: 3,
      title: 'Completa Retos',
      description: 'Realiza acciones diarias y obtén puntos por cada hábito completado.',
      icon: '✅'
    },
    {
      number: 4,
      title: 'Crece y Gana',
      description: 'Sube de nivel, desbloquea logros y ayuda a salvar el planeta.',
      icon: '🎯'
    }
  ];

  ngOnInit() {
    
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  ngOnDestroy() {
    
    window.removeEventListener('scroll', this.onScroll.bind(this));
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event?: Event) {
    this.scrollY = window.scrollY;
    this.parallaxOffset = this.scrollY * 0.5;
  }

  goToLogin() {
    
  }

  goToRegister() {
    
  }

  scrollToFeatures() {
    const element = document.querySelector('.features-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}

