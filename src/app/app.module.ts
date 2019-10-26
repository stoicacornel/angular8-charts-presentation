import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routes/app-routing.module';
import { DashboardRoutingModule } from './routes/dashboard-routing.module';

import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChartsComponent } from './components/charts/charts.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RootComponent } from './components/root/root.component';
import { OverviewComponent } from './components/overview/overview.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ChartsComponent,
    FooterComponent,
    TopBarComponent,
    SideBarComponent,
    NotFoundComponent,
    RootComponent,
    OverviewComponent,
  ],
  imports: [
    BrowserModule,
    DashboardRoutingModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [ RootComponent ]
})
export class AppModule { }
