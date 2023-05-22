import { Component, OnInit } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  series: ApexAxisChartSeries = [];
  chart!: ApexChart;
  dataLabels!: ApexDataLabels;
  plotOptions!: ApexPlotOptions;
  yaxis!: ApexYAxis;
  xaxis!: ApexXAxis;
  fill!: ApexFill;
  title!: ApexTitleSubtitle;


  private initializeChartOptions() : void {
    this.series = [
      {
        name: "Entregas",
        data: [245, 310, 470, 101, 400, 360, 327, 233, 164, 890, 500, 200, 159, 89]
      }
    ]

    this.chart = {
      height: 350,
      type: "bar"
    }

    this.plotOptions= {
      bar: {
        dataLabels: {
          position: "top" // top, center, bottom
        }
      }
    }

     this.dataLabels = {
      enabled: true,
      // formatter: function(val) {
      //   return val + "%";
      // },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"]
      }
    }
    this.xaxis = {
      categories: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14"
      ],
      position: "top",
      labels: {
        offsetY: -18
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5
          }
        }
      },
      tooltip: {
        enabled: true,
        offsetY: -35
      }
    }
    this.fill = {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [50, 0, 100, 100]
      }
    }
    this.yaxis= {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,

      }
    }

    this.title = {
      text: "Total de entregas, Maio",
      floating: true,
      offsetY: 320,
      align: "center",
      style: {
        color: "#444"
      }
    }
  }

  constructor() { this.initializeChartOptions() }

  ngOnInit(): void {
  }

}
