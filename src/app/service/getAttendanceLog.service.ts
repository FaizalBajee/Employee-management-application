import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LogData, ServerResponse } from "../model/model";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn: 'root'
})
export class GetAttendanceLogService {
    constructor(private http: HttpClient) { }
    getAttendanceLog(): Observable<LogData[]> {
        const Number: any = localStorage.getItem('Number')
        const params = new HttpParams().set("num", Number)
        return this.http.get<LogData[]>(environment.BaseUrl + "/attendanceLog", { params })
    }
}