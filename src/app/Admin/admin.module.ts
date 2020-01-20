import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from "./admin.routing";
import { AdminComponent } from "./admin.component";
import { DrawerComponent } from './drawer/drawer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';

@NgModule({
    imports: [
        CommonModule,
        routing,
    ],
    declarations: [
        AdminComponent,
        DrawerComponent,
        DashboardComponent,
        HeaderComponent,
        AboutComponent
    ],
})
export class AdminModules { }

