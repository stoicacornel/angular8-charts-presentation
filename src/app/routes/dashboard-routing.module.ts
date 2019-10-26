import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartsComponent } from '../components/charts/charts.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { OverviewComponent } from '../components/overview/overview.component';

const dashboardRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {
                path: '',
                redirectTo: 'overview',
                pathMatch: 'full',
            },
            {
                path: 'overview',
                component: OverviewComponent,
            },
            {
                path: 'charts',
                component: ChartsComponent,
            },
            {
                path: '**',
                redirectTo: 'overview'
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
