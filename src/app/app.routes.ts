import { Routes } from '@angular/router';
import {HomeComponent} from '@features/home/home.component';
import {AboutMeComponent} from '@features/about-me/about-me.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => HomeComponent,
  },
  {
    path: 'about-me',
    loadComponent: () => AboutMeComponent,
  },
];
