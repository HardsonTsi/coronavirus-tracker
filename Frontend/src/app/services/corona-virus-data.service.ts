import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {LocationStats} from "../classes/locationStats";

@Injectable({
    providedIn: 'root'
})
export class CoronaVirusDataService {

    private url: string = environment.API_URL;

    constructor(private http: HttpClient) {
    }

    getNewStats(): Observable<LocationStats[]> {
        return this.http.get<LocationStats[]>(`${this.url}`);
    }

}
