import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Data } from '@angular/router';
import { LogData, PermissionData, PermissionHours, PermissionReason, ServerResponse } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  //Attendance Page Service (Upload)
  handleAttendance(img: any, FileName: any, lat: any, lng: any): Observable<ServerResponse> {
    const Number: any = localStorage.getItem('Number')
    let payload = new FormData()
    payload.append("num", Number)
    payload.append('image', img, FileName)
    payload.append('lat', lat)
    payload.append('lng', lng)
    return this.http.post<ServerResponse>(environment.BaseUrl + "/attendance", payload)
  }
  //Attendance Log page service 
  getAttendanceLog(): Observable<LogData[]> {
    const Number: any = localStorage.getItem('Number')
    const params = new HttpParams().set("num", Number)
    return this.http.get<LogData[]>(environment.BaseUrl + "/attendanceLog", { params })
  }
  //Attendance Check if the attendance is punched once a day
  attendanceCheck(): Observable<ServerResponse> {
    const num: any = localStorage.getItem('Number')
    const params = new HttpParams().set("num", num)
    return this.http.get<ServerResponse>(environment.BaseUrl + "/attendanceCheck", { params })
  }
  //Apply permission page service(upload)
  applyPermission(time: any, hours: any, reason: any): Observable<ServerResponse> {
    const num: any = localStorage.getItem('Number')
    let payload = new HttpParams()
    payload = payload.append("num", num)
    payload = payload.append("time", time)
    payload = payload.append("hours", hours)
    payload = payload.append("reason", reason)
    return this.http.post<ServerResponse>(environment.BaseUrl + "/permission", payload)
  }
  //get Permission Details
  permissionReport(): Observable<PermissionData[]> {
    const num: any = localStorage.getItem('Number')
    let params = new HttpParams().set("num", num)
    return this.http.get<PermissionData[]>(environment.BaseUrl + "/PermissionReport", { params })
  }
  //get Permission Reason
  permissionReason(): Observable<PermissionReason[]> {
    return this.http.get<PermissionReason[]>(environment.BaseUrl + "/permissionReason");
  }
  //get permissiom Hours
  permissionHours(): Observable<PermissionHours[]> {
    return this.http.get<PermissionHours[]>(environment.BaseUrl + "/permissionHours")
  }
  //permission check if the attendance is punched or not
  permissionCheck(): Observable<ServerResponse> {
    const num: any = localStorage.getItem('Number')
    const params = new HttpParams().set("num", num)
    return this.http.get<ServerResponse>(environment.BaseUrl + "/permissionCheck", { params })
  }
  //Apply Leave service
  applyLeave(date: any, reason: string): Observable<ServerResponse> {
    const num: any = localStorage.getItem("Number")
    let payload = new HttpParams()
    payload = payload.append("num", num)
    payload = payload.append("Ldate", date)
    payload = payload.append("Lreason", reason)
    return this.http.post<ServerResponse>(environment.BaseUrl + "/applyLeave", payload)
  }
}
