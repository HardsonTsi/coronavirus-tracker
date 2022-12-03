import {Component, OnInit} from '@angular/core';
import {LocationStats} from "./classes/location-stats";
import {CoronaVirusDataService} from "./services/corona-virus-data.service";
import {Chart, registerables} from "chart.js";

Chart.register(...registerables)


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    newStats: LocationStats[];
    locationStats: LocationStats = new LocationStats();
    totalCases: number;
    totalCasesPreviousDay: number;


    constructor(private coronavirusDataService: CoronaVirusDataService) {
    }

    ngOnInit(): void {
      //  this.getNewStats();
        //this.renderChart();
    }

    getNewStats() {
        // @ts-ignore
        this.newStats =  JSON.parse(localStorage.getItem('newStats'));
        /*this.coronavirusDataService.getNewStats()
            .subscribe(datas => {
                    this.newStats = datas;
                    this.totalCases = this.newStats.map(stat => stat.latestTotalCases)
                        .reduce((acc, stat) => acc + stat);
                    // @ts-ignore
                    localStorage.setItem('newStats', JSON.stringify(this.newStats));
                    this.totalCasesPreviousDay = this.newStats.map(stat => stat.diffFromPreviousDay)
                        .reduce((acc, stat) => acc + stat);
                    // this.renderChart();
                },
                err => console.log(err))*/
    }

    renderChart(locationStats: LocationStats) {

        var myChart = new Chart(locationStats.country, {
            type: 'pie',
            data: {
                labels: [
                    'Nombre total de cas  signalés depuis hier',
                    'Nombre de cas signalés à ce jour',
                    'Nombre de cas signalés hier'
                ],
                datasets: [{
                    label: `${locationStats.country} | ${locationStats.state}`,
                    data: [this.totalCasesPreviousDay, locationStats.latestTotalCases, locationStats.diffFromPreviousDay],
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
