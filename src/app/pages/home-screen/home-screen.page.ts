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
  
  @ViewChild(IonRouterOutlet, { static: true })
  routerOutlet!: IonRouterOutlet;
  private lastBackPressTime = 0;
  private backPressInterval = 2000;

  Name: any = '';

  constructor(private route: Router, private service: ServiceService, private loadingController: LoadingController, private platform: Platform, private toastController: ToastController) { this.initializeApp(); }
  async ionViewDidEnter() {
    const phone = localStorage.getItem('Number')
    const name = localStorage.getItem('Name')
    this.Name = name
  }
  //to exit app
  initializeApp() {
    this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority(10, () => {
        this.handleBackButton();
      });
    });
  }


  async handleBackButton() {
    if (this.routerOutlet && this.routerOutlet.canGoBack()) {
      this.routerOutlet.pop();
    } else if (this.route.url === '/home-screen') {
      const currentTime = new Date().getTime();
      if (currentTime - this.lastBackPressTime < this.backPressInterval) {
        App.exitApp();
      } else {
        this.showToast();
        this.lastBackPressTime = currentTime;
      }
    } else {
      this.route.navigate(['/home-screen']);
    }
  }

  async showToast() {
    const toast = await this.toastController.create({
      message: 'Press back again to exit',
      duration: 2000,
    });
    await toast.present();
  }

  //Attendance option
  async handleAttendance() {
    this.service.attendanceCheck().subscribe(Response => {
      if (Response.message === "Data exist") {
        alert("Attendance for today has already been recorded.")
      } else {
        this.route.navigate(['attendance'])
      }
    })
  }
  //Attendance Log option
  handleLog() {
    this.route.navigate(['attendance-log'])
  }
  //permission Option
  async handlePermission() {
    this.service.permissionCheck().subscribe(Response => {
      if (Response.message === "Data exist") {
        this.route.navigate(['permission'])
      }
      else {
        alert("You have not recorded your attendance for today")
      }
    })
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
  }

}
