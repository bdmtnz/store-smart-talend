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
        loadComponent: () => import('./user/layout/layout.component').then(c => c.LayoutComponent)
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/layout/layout.routes').then(m => m.AdminLayoutRoutesModule)
    }
];
