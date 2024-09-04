import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LogData, PermissionReason, ServerResponse } from "../model/model";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn: 'root'
})
export class ApplyLeaveService {
    constructor(private http: HttpClient) { }
    applyLeave(date: any, reason: string): Observable<ServerResponse> {
        const name: any = localStorage.getItem('Name')
        const num: any = localStorage.getItem("Number")
        let payload = new HttpParams()
        payload = payload.append("name", name)
        payload = payload.append("num", num)
        payload = payload.append("Ldate", date)
        payload = payload.append("Lreason", reason)
        return this.http.post<ServerResponse>(environment.BaseUrl + "/applyLeave", payload)
      }
}