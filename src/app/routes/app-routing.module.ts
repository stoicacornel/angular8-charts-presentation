import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from '../components/not-found/not-found.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/dashboard/overview' },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '404' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
