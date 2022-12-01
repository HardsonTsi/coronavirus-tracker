import {Component, OnInit} from '@angular/core';
import {LocationStats} from "./classes/location-stats";
import {CoronaVirusDataService} from "./services/corona-virus-data.service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    newStats: LocationStats[];
    totalCases: number;
    totalCasesPreviousDay: number;

    constructor(private coronavirusDataService: CoronaVirusDataService) {
    }

    ngOnInit(): void {
        this.getNewStats();
    }

    getNewStats() {
        this.coronavirusDataService.getNewStats()
            .subscribe(datas => {
                    this.newStats = datas;
                    this.totalCases = this.newStats.map(stat => stat.latestTotalCases)
                        .reduce((acc, stat) => acc + stat);
                    this.totalCasesPreviousDay = this.newStats.map(stat => stat.diffFromPreviousDay)
                        .reduce((acc, stat) => acc + stat);
                },
                err => console.log(err))
    }

}
