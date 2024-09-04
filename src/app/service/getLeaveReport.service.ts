import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LeaveData, LogData, PermissionReason, ServerResponse } from "../model/model";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn: 'root'
})
export class GetLeaveReportService {
    constructor(private http: HttpClient) { }
    leaveReport(): Observable<LeaveData[]> {
        const num: any = localStorage.getItem('Number')
        let params = new HttpParams().set("num", num)
        return this.http.get<LeaveData[]>(environment.BaseUrl + "/leaveReport", { params })
      }
}