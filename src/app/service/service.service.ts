import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Data } from '@angular/router';
import { getFance, LeaveData, LogData, PermissionData, PermissionHours, PermissionReason, ServerResponse } from '../model/model';

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
    const name: any = localStorage.getItem('Name')
    const num: any = localStorage.getItem("Number")
    let payload = new HttpParams()
    payload = payload.append("name", name)
    payload = payload.append("num", num)
    payload = payload.append("Ldate", date)
    payload = payload.append("Lreason", reason)
    return this.http.post<ServerResponse>(environment.BaseUrl + "/applyLeave", payload)
  }
  //leave data(report)
  leaveReport(): Observable<LeaveData[]> {
    const num: any = localStorage.getItem('Number')
    let params = new HttpParams().set("num", num)
    return this.http.get<LeaveData[]>(environment.BaseUrl + "/leaveReport", { params })
  }
  //insert out punch
  OutPunch(): Observable<ServerResponse> {
    const num: any = localStorage.getItem('Number')
    let params = new HttpParams().set("num", num)
    return this.http.put<ServerResponse>(environment.BaseUrl + "/outPunch", {}, { params })
  }
  //checking the user is punch in or not for outPunch
  CheckOutPunch(): Observable<ServerResponse> {
    const num: any = localStorage.getItem('Number')
    let params = new HttpParams().set("num", num)
    return this.http.get<ServerResponse>(environment.BaseUrl + "/checkOutPunch", { params })
  }
  //permission data for approve page
  permissionDataForApprove(): Observable<PermissionData[]> {
    const name: any = localStorage.getItem('Name')
    const params = new HttpParams().set("name", name)
    return this.http.get<PermissionData[]>(environment.BaseUrl + "/permissionApproveData", { params })
  }
  //Leave Data For Approve
  leaveDataForApprove(): Observable<LeaveData[]> {
    const name: any = localStorage.getItem('Name')
    const params = new HttpParams().set("name", name)
    return this.http.get<LeaveData[]>(environment.BaseUrl + "/leaveApproveData", { params })
  }
  //To approve or reject leave
  approveLeave(sts: string, num: string, date: string): Observable<ServerResponse> {
    let payload = new HttpParams()
    payload = payload.append("status", sts)
    let params = new HttpParams().set("num", num).set("LDate", date)
    return this.http.put<ServerResponse>(environment.BaseUrl + "/approveLeave", payload, { params })
  }
  //to approve or reject permission
  approvePermission(sts: string, num: string, id: string) {
    let payload = new HttpParams()
    payload = payload.append("status", sts)
    let params = new HttpParams().set("num", num).set("id", id)
    return this.http.put<ServerResponse>(environment.BaseUrl + "/approvePermission", payload, { params })
  }
  //get max min lat and lng
  getFance(): Observable<getFance[]> {
    let location: any = localStorage.getItem("Location")
    console.log(location)
    let params = new HttpParams().set("location", location)
    return this.http.get<getFance[]>(environment.BaseUrl + "/getFance", { params })
  }
}
