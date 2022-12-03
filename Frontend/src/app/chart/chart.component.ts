import {Component, Input, OnInit} from '@angular/core';
import {LocationStats} from "../classes/location-stats";
import {Chart} from "chart.js";

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {


  @Input() locationStats: LocationStats = new LocationStats();
  @Input() totalCasesPreviousDay: number;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.renderChart();

  }


  renderChart() {
    var myChart = new Chart(`${this.locationStats.country}`, {
      type: 'pie',
      data: {
        labels: [
          'Nombre total de cas  signalés depuis hier',
          'Nombre de cas signalés à ce jour',
          'Nombre de cas signalés hier'
        ],
        datasets: [{
          label: `${this.locationStats.country} | ${this.locationStats.state}`,
          data: [this.totalCasesPreviousDay, this.locationStats.latestTotalCases, this.locationStats.diffFromPreviousDay],
          backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 99, 132)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      }
    });
  }


}
