import {Component, OnInit} from '@angular/core';
import {SingleDataSet, Label} from 'ng2-charts';
import {ChartType} from 'chart.js';
import {Color} from 'ng2-charts/lib/color';

import polar_chart from 'src/assets/json-data/charts/polar_chart.json';

@Component({
  selector: 'app-polar-chart',
  templateUrl: './polar-chart.component.html',
  styleUrls: ['./polar-chart.component.css']
})
export class PolarChartComponent implements OnInit {
  public polarAreaChartLabels: Label[] = [];
  public polarAreaChartData: SingleDataSet = [];
  public polarAreaLegend = polar_chart.legend;
  public polarAreaColors: Color[] = [];

  // @ts-ignore
  public polarAreaChartType: ChartType = polar_chart.type;

  constructor() {
    this.polarAreaColors = [
      {
        backgroundColor: []
      }
    ];
  }

  ngOnInit() {
    for (const entry of polar_chart.entries) {
      this.polarAreaChartLabels.push(entry.label);
      this.polarAreaChartData.push(entry.data);
      // @ts-ignore
      this.polarAreaColors[0].backgroundColor.push(entry.backgroundColor || this.randomColorGenerator());

    }

    console.log(this.polarAreaColors);

    this.randomizeSeries();
  }

  addSet() {
    this.polarAreaChartLabels.push('Set ' + (this.polarAreaChartLabels.length + 1));
    this.polarAreaChartData.push(Math.round(Math.random() * 100));

    if (typeof this.polarAreaColors[0].backgroundColor !== 'string') {
      this.polarAreaColors[0].backgroundColor.push(this.randomColorGenerator());
    }
  }

  removeSet() {
    this.polarAreaChartLabels.pop();
    this.polarAreaChartData.pop();
  }

  public randomizeSeries(): void {
    this.polarAreaChartData = this.randomizeData();
  }

  public randomizeData(): number[] {
    const randomizedData = [];

    for (const item of this.polarAreaChartData) {
      randomizedData.push(Math.round(Math.random() * 100));
    }

    return randomizedData;
  }

  randomColorGenerator() {
    const color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
}
