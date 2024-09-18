import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ViewDidEnter } from '@ionic/angular';
import { ServiceService } from 'src/app/service/service.service';
import { App } from '@capacitor/app';
import { Platform, ToastController, IonRouterOutlet } from '@ionic/angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.page.html',
  styleUrls: ['./home-screen.page.scss'],
})
export class HomeScreenPage implements ViewDidEnter {
  Name: any = '';
  constructor(private route: Router, private service: ServiceService) {
  }
  ionViewDidEnter() {
    const phone = localStorage.getItem('Number')
    const name = localStorage.getItem('Name')
    this.Name = name
  }
  //Attendance option
  handleAttendance() {
    this.route.navigate(['attendance'])
    // this.service.attendanceCheck().subscribe(Response => {
    //   if (Response.message === "Data exist") {
    //     alert("Attendance for today has already been recorded.")
    //   } else {
    //     this.route.navigate(['attendance'])
    //   }
    // })
  }
  //Attendance Log option
  handleLog() {
    this.route.navigate(['attendance-log'])
  }
  //permission Option
  handlePermission() {
    this.route.navigate(['permission'])
    // this.service.permissionCheck().subscribe(Response => {
    //   if (Response.message === "Data exist") {
    //     this.route.navigate(['permission'])
    //   }
    //   else {
    //     alert("You have not recorded your attendance for today")
    //   }
    // })
  }
  //Leave option
  handleLeave() {
    this.route.navigate(['leave-page'])
  }
  //Out Punch Option
  handleOutPunch() {
    this.service.CheckOutPunch().subscribe(Response => {
      if (Response.message === "Attendance Exist") {
        this.route.navigate(['out-punch'])
      } else {
        alert(Response.message)
      }
    })
  }
  //late attendance
  handleLate() {
    this.route.navigate(["attendance"])
  }
  //Approve Option
  handleApprove() {
    this.route.navigate(['approve'])
  }
  handleDelete() {
    localStorage.removeItem("Name")
    localStorage.removeItem("Number")
    localStorage.removeItem("Location")
    alert("logout")
    this.route.navigate(['login-screen'])
  }

}
