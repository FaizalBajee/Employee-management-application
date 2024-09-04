import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ServerResponse } from "../model/model";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn:'root'
})
export class PunchAttendanceService{
    constructor(private http: HttpClient) { }
    punchAttendance(img: any, FileName: any, lat: any, lng: any): Observable<ServerResponse> {
        const Number: any = localStorage.getItem('Number')
        let payload = new FormData()
        payload.append("num", Number)
        payload.append('image', img, FileName)
        payload.append('lat', lat)
        payload.append('lng', lng)
        return this.http.post<ServerResponse>(environment.BaseUrl + "/attendance", payload)
      }
}