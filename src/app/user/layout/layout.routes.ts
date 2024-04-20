import { NgModule } from "@angular/core";
import { RouterModule, RouterOutlet, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { AppComponent } from "../../app.component";
import { CommonModule } from "@angular/common";
import { UserHeaderComponent } from "../shared/components/user-header/user-header.component";

export const userLayoutRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [   
            {
                path: '',
                loadComponent: () => import('./pages/user-start/user-start.component').then(c => c.UserStartComponent)
            },      
            {
                path: 'orders',
                loadComponent: () => import('./pages/user-orders/user-orders.component').then(c => c.UserOrdersComponent)
            },      
            {
                path: 'cart',
                loadComponent: () => import('./pages/user-cart/user-cart.component').then(c => c.UserCartComponent)
            }
        ]
    }
]

@NgModule({
    declarations: [ LayoutComponent ],
    imports: [
        CommonModule,        
        RouterOutlet,
        RouterModule.forChild(userLayoutRoutes),
        UserHeaderComponent
    ]
})
export class UserLayoutRoutesModule { }