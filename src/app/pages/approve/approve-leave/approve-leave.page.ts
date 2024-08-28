import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, ViewDidEnter } from '@ionic/angular';
import { LeaveData } from 'src/app/model/model';
import { ServiceService } from 'src/app/service/service.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approve-leave',
  templateUrl: './approve-leave.page.html',
  styleUrls: ['./approve-leave.page.scss'],
})
export class ApproveLeavePage implements ViewDidEnter {

  constructor(private route: Router, private toastController: ToastController, private service: ServiceService, private loadingController: LoadingController, private navCtrl: NavController) { }

  data: LeaveData[] = []

  ionViewDidEnter(): void {
    this.getData()
  }
  //Leave Data
  getData() {
    this.service.leaveDataForApprove().subscribe(Response => {
      this.data = Response
      console.log(Response)
    })
  }

  handleReject(Phone: string, LDate: string) {
    const status = 'Rejected';
    this.service.approveLeave(status, Phone, LDate).subscribe(async response => {
      console.log(response.message);
      this.getData();
      const toast = await this.toastController.create({
        message: response.message,
        duration: 400
      })
      await toast.present()
    })
}

  async handleApprove(Phone: string, LDate: string) {
  const status = 'Approved';
  this.service.approveLeave(status, Phone, LDate).subscribe(async response => {
    console.log(response.message);
    this.getData();
    const toast = await this.toastController.create({
      message: response.message,
      duration: 400
    })
    await toast.present()
  })
}

}
