import { NgModule } from "@angular/core";
import { RouterModule, RouterOutlet, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { AppComponent } from "../../app.component";
import { CommonModule } from "@angular/common";

export const adminLayoutRoutes: Routes = [
    {
        path: '',
        // loadComponent: () => import('./layout.component').then(c => c.LayoutComponent),
        component: LayoutComponent,
        children: [   
            {
                path: '',
                loadComponent: () => import('./pages/admin-start/admin-start.component').then(c => c.AdminStartComponent)
            },      
            {
                path: 'stock',
                loadComponent: () => import('./pages/admin-stock/admin-stock.component').then(c => c.AdminStockComponent)
            }
        ]
    }
]

@NgModule({
    declarations: [ LayoutComponent ],
    imports: [
        CommonModule,        
        RouterOutlet,
        RouterModule.forChild(adminLayoutRoutes)
    ]
})
export class AdminLayoutRoutesModule { }