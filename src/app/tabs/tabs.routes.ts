import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'Rest',
        loadComponent: () =>
          import('../Rest/Restaurant.page').then((m) => m.RestaurantPage),
      },
      {
        path: 'Food/:restId',
        loadComponent: () =>
          import('../Food/Food.page').then((m) => m.FoodPage),
      },
      {
        path: 'Login',
        loadComponent: () =>
          import('../Login/Login.page').then((m) => m.LoginPage),
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '', 
    redirectTo: 'tabs/Login',
    pathMatch: 'full',
  },
  {
    path: '**', 
    redirectTo: 'tabs/Login',
  },
  
];
