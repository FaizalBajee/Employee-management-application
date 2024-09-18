import { Component, OnInit } from '@angular/core';
import { ViewDidEnter } from '@ionic/angular';
import { ServiceService } from 'src/app/service/service.service';
import { leaveDataModel } from 'src/app/model/leaveData.model';
import { ToastService } from 'src/app/service/toast-service';

@Component({
  selector: 'app-approve-leave',
  templateUrl: './approve-leave.page.html',
  styleUrls: ['./approve-leave.page.scss'],
})
export class ApproveLeavePage implements ViewDidEnter {

  constructor( private toastService: ToastService, private service: ServiceService) { }

  data: leaveDataModel[] = []

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
      this.toastService.toast(response.message)
    })
  }

  async handleApprove(Phone: string, LDate: string) {
    const status = 'Approved';
    this.service.approveLeave(status, Phone, LDate).subscribe(async response => {
      console.log(response.message);
      this.getData();
      this.toastService.toast(response.message)
    })
  }

}
