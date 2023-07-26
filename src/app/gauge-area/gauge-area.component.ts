import { Component } from '@angular/core';
import {Chart, registerables} from 'node_modules/chart.js'
Chart.register(...registerables);

@Component({
  selector: 'app-gauge-area',
  templateUrl: './gauge-area.component.html',
  styleUrls: ['./gauge-area.component.css']
})
export class GaugeAreaComponent {
  constructor() {}
  ngOnInit() {
    this.RenderChart();
    let element = document.querySelector('#gaugeArea')
    const GaugeChart = require('gauge-chart')
// Properties of the gauge
let gaugeOptions = {
  hasNeedle: true,
  needleColor: 'gray',
  needleUpdateSpeed: 1000,
  arcColors: ['red', 'yellow', 'orange','lightgreen', 'green' ],
  arcDelimiters: [10, 25, 45, 70],
  arcLabels:[10, 25, 45, 70],
  rangeLabel: ['0','100'],
  centralLabel: '70%',
};

GaugeChart.gaugeChart(element, 300, gaugeOptions).updateNeedle(70);
  }
  RenderChart(){
    const termometro = new Chart("termometro", {
    type: 'bar',
    data: {
      labels: ['Termometro',],
      datasets: [{
        barThickness: 20,
        maxBarThickness: 80,
        minBarLength: 2,
        label: 'Temperatura',
        data: [72,],
        barPercentage: 0.1,
        borderWidth: 2,
        borderColor: [
          'rgb(255, 99, 132)',
        ],
        backgroundColor: [
          'rgb(255, 99, 132)',
        ],
        borderRadius: 15
      }]
    },
    options: {
      layout: {
        padding: {
          left: 140,
          right: 140,
          top: 0,
          bottom: 0
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 10,
            callback: function(value) {
              return value + '%'; // Adiciona o símbolo de porcentagem aos rótulos dos ticks
            }
          }
        },
        x: {
          position: 'top',
            grid: {
              offset: true
            },
            ticks: {
              autoSkipPadding: 10,
              stepSize: 5
              }

            
        }
    }
    }
  });
  }
}
