import {Component, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';

import bar_chart from 'src/assets/json-data/charts/bar_chart.json';


@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
    public barChartOptions: ChartOptions = {
        responsive: true,
        scales: {xAxes: [{}], yAxes: [{}]},
        plugins: {
            datalabels: {
                anchor: 'end',
                align: 'end',
            }
        }
    };
    public barChartLabels: Label[] = bar_chart.chartLabels;
    // @ts-ignore
    public barChartType: ChartType = bar_chart.type;
    public barChartLegend = bar_chart.legend;

    public barChartData: ChartDataSets[] = bar_chart.entries;

    constructor() {
    }

    ngOnInit() {
        this.randomizeSeries();
    }

    randomColorGenerator() {
        const color = Math.floor(0x1000000 * Math.random()).toString(16);
        return '#' + ('000000' + color).slice(-6);
    }

    addSet() {
        const data = [];
        console.log(this.barChartLabels.length);
        for (const label of this.barChartLabels) {
            data.push(1);
        }

        console.log(data);
        this.barChartData.push(
            {
                data: this.randomizeData(data),
                label: 'Set ' + (this.barChartData.length + 1),
                backgroundColor: this.randomColorGenerator(),
            }
        );
    }

    removeSet() {
        this.barChartData.pop();
    }

    public randomizeSeries(): void {
        // tslint:disable-next-line:prefer-for-of
        for (let index = 0; index < this.barChartData.length; index++) {
            this.barChartData[index].data = JSON.parse(JSON.stringify(this.randomizeData(this.barChartData[index].data)));
        }
    }

    public randomizeData(data): number[] {
        const randomizedData = [];

        for (const item of data) {
            randomizedData.push(Math.round(Math.random() * 100));
        }

        return randomizedData;
    }
}
