import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LogData, PermissionHours, PermissionReason, ServerResponse } from "../model/model";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn: 'root'
})
export class PermissionHoursMasterService {
    constructor(private http: HttpClient) { }
    permissionHours(): Observable<PermissionHours[]> {
        return this.http.get<PermissionHours[]>(environment.BaseUrl + "/permissionHours")
      }
}