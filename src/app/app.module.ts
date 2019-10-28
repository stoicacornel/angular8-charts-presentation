import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

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
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/charts/line-chart/line-chart.component';
import { DoughnutChartComponent } from './components/charts/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './components/charts/radar-chart/radar-chart.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { PolarChartComponent } from './components/charts/polar-chart/polar-chart.component';

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
    BarChartComponent,
    LineChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    PolarChartComponent,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    DashboardRoutingModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [ RootComponent ]
})
export class AppModule { }
