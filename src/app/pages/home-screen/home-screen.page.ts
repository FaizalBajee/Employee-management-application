import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewDidEnter } from '@ionic/angular';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.page.html',
  styleUrls: ['./home-screen.page.scss'],
})
export class HomeScreenPage implements ViewDidEnter {
  Name: any = '';
  constructor(private route: Router, private service: ServiceService) { }
  ionViewDidEnter(): void {
    const phone = localStorage.getItem('Number')
    const name = localStorage.getItem('Name')
    this.Name = name
    // alert("Name : " + name + "  Phone : " + phone)
  }

  handleAttendance() {
    this.service.attendanceCheck().subscribe(Response => {
      if (Response.message === "Data exist") {
        alert("Attendance for today has already been recorded.")
      } else {
        this.route.navigate(['attendance'])
      }
    })
  }
  handleLog() {
    this.route.navigate(['attendance-log'])
  }
  handlePermission() {
    this.service.permissionCheck().subscribe(Response => {
      if (Response.message === "Data exist") {
        this.route.navigate(['permission'])
      }
      else {
        alert("You have not recorded your attendance for today")
      }
    })
  }
  handleLeave(){
    this.route.navigate(['leave'])
  }

}
