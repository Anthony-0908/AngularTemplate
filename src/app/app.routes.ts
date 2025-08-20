import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
export const routes: Routes = [
  {
    path:'dashboard',
    loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard)
  }
];
