import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ThankYou } from './pages/thank-you/thank-you';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'gracias',
    component: ThankYou,
  },
  {
    path: '**',
    component: NotFound,
    title: 'Página no encontrada | Hey Talent',
  },
];