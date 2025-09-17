

import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { LayoutsComponent } from './layouts.component';


export const layoutRoutes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
      children:[
         {
        path: '',
        component: HomeComponent
      },
       {
        path: 'home',
        loadComponent: () => import('../pages/home/home.component').then(m => m.HomeComponent)
      },
      ]

  }
]
