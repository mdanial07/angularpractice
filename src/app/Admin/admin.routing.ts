import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    {
        path: '', component: AdminComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'about', component: AboutComponent },
        ]
    },
];

export const routing = RouterModule.forChild(routes);
