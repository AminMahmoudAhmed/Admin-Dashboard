import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [

     { path: '', redirectTo: '/login', pathMatch: 'full' },


  {
    path: '',
   
 
    children: [
      { path: 'login', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent), title: 'Login',
       
       },
]
  },


  {
    path: '',
    component: LayoutComponent,
    
    children: [
      { path: 'dashboard1', loadComponent: () => import('./components/dashborad1/dashborad1.component').then(m => m.Dashborad1Component), title: 'dashboard1'
       },
      { path: 'dashboard2', loadComponent: () => import('./components/dashborad2/dashborad2.component').then(m => m.Dashborad2Component), title: 'dashboard2'
       },
      { path: 'dashboard3', loadComponent: () => import('./components/dashborad3/dashborad3.component').then(m => m.Dashborad3Component), title: 'dashboard3'
       },
   
    ]
  }





];
