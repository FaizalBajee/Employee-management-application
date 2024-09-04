import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LogData, PermissionReason, ServerResponse } from "../model/model";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn: 'root'
})
export class PermissionReasonMasterService {
    constructor(private http: HttpClient) { }
    ReasonMaster(): Observable<PermissionReason[]> {//want to add in serverresponseModel content
        return this.http.get<PermissionReason[]>(environment.BaseUrl + "/permissionReason");
      }
}