import {Component, Input, OnInit} from '@angular/core';
import {LocationStats} from "../classes/locationStats";

@Component({
  selector: 'stats-table',
  templateUrl: './stats-table.component.html',
  styleUrls: ['./stats-table.component.css']
})
export class StatsTableComponent implements OnInit {
    @Input() newStats: LocationStats[];
    @Input() totalCases: number;
    @Input() totalCasesPreviousDay: number;

  constructor() { }

  ngOnInit(): void {
  }

}
