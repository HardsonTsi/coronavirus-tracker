import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CoronaVirusDataService} from "./services/corona-virus-data.service";
import { ChartComponent } from './chart/chart.component';


@NgModule({
    declarations: [
        AppComponent,
        ChartComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule

    ],
    providers: [CoronaVirusDataService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
