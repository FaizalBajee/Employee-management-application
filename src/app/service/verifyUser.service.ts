import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ServerResponse } from '../model/model';
@Injectable({
    providedIn: 'root'
})
export class VerifyUserService {
    constructor(private http: HttpClient) { }
    verifyUser(num: any): Observable<ServerResponse> {
        let params = new HttpParams().set("num", num);
        return this.http.get<ServerResponse>(environment.BaseUrl + "/number", { params });
    }
}