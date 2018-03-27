import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './features/home/containers/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  }
];

export const appRoutes = RouterModule.forRoot(routes,
  { enableTracing: true });
