import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'lazy',
    loadComponent: () =>
      import('./lazy/lazy.component').then((c) => c.LazyComponent),
  },
];
