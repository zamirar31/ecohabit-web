import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PanelComponent } from './pages/panel/panel.component';
import { LayoutComponent } from './shared/layout/layout.component';

export const routes: Routes = [
  
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },

  {
    path: 'app',
    component: LayoutComponent,
    children: [
      { path: 'panel', component: PanelComponent },
      { path: '', redirectTo: 'panel', pathMatch: 'full' },

      {
        path: 'acciones',
        loadComponent: () =>
          import('./pages/acciones/acciones-list/acciones-list.component')
            .then(m => m.AccionesListComponent)
      },
      {
        path: 'acciones/nuevo',
        loadComponent: () =>
          import('./pages/acciones/acciones-form/acciones-form.component')
            .then(m => m.AccionesFormComponent)
      },
      {
        path: 'acciones/editar/:id',
        loadComponent: () =>
          import('./pages/acciones/acciones-form/acciones-form.component')
            .then(m => m.AccionesFormComponent)
      },

      {
        path: 'retos',
        loadComponent: () =>
          import('./pages/retos/retos-list/retos-list.component')
            .then(m => m.RetosListComponent)
      },
      {
        path: 'retos/nuevo',
        loadComponent: () =>
          import('./pages/retos/retos-form/retos-form.component')
            .then(m => m.RetosFormComponent)
      },
      {
        path: 'retos/editar/:id',
        loadComponent: () =>
          import('./pages/retos/retos-form/retos-form.component')
            .then(m => m.RetosFormComponent)
      },
    ]
  },

  { path: '**', redirectTo: '' }
];

