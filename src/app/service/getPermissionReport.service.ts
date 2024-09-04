import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PermissionData } from "../model/model";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn: 'root'
})
export class getPermissionReportService {
    constructor(private http: HttpClient) { }
    permissionReport(): Observable<PermissionData[]> {
        const num: any = localStorage.getItem('Number')
        let params = new HttpParams().set("num", num)
        return this.http.get<PermissionData[]>(environment.BaseUrl + "/PermissionReport", { params })
    }
}