import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LogData, PermissionReason, ServerResponse } from "../model/model";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn: 'root'
})
export class OutPunchService {
    constructor(private http: HttpClient) { }
    outPunch(): Observable<ServerResponse> {
        const num: any = localStorage.getItem('Number')
        let params = new HttpParams().set("num", num)
        return this.http.put<ServerResponse>(environment.BaseUrl + "/outPunch", {}, { params })
      }
}