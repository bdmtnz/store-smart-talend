import { Routes } from '@angular/router';
import { AdminLayoutRoutesModule, adminLayoutRoutes } from './admin/layout/layout.routes';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./shared/pages/start/start.component').then(c => c.StartComponent)
    },
    {
        path: 'user',
        loadChildren: () => import('./user/layout/layout.routes').then(c => c.UserLayoutRoutesModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/layout/layout.routes').then(m => m.AdminLayoutRoutesModule)
    }
];
