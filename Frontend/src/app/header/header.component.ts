import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Input() totalCases: number;
    @Input() totalCasesPreviousDay: number;

    constructor() {
    }

    ngOnInit(): void {
    }

}
