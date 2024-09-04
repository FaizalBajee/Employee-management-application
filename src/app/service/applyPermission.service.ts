import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LogData, ServerResponse } from "../model/model";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn: 'root'
})
export class applyPermissionService {
    constructor(private http: HttpClient) { }
    applyPermission(time: any, hours: any, reason: any): Observable<ServerResponse> {
        const name: any = localStorage.getItem('Name')
        const num: any = localStorage.getItem('Number')
        let payload = new HttpParams()
        payload = payload.append("name", name)
        payload = payload.append("num", num)
        payload = payload.append("time", time)
        payload = payload.append("hours", hours)
        payload = payload.append("reason", reason)
        return this.http.post<ServerResponse>(environment.BaseUrl + "/permission", payload)
      }
}