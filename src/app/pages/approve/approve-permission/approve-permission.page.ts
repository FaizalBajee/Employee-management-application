import { Component, OnInit } from '@angular/core';
import { ToastController, ViewDidEnter } from '@ionic/angular';
import { PermissionData } from 'src/app/model/model';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-approve-permission',
  templateUrl: './approve-permission.page.html',
  styleUrls: ['./approve-permission.page.scss'],
})
export class ApprovePermissionPage implements ViewDidEnter {
  data: PermissionData[] = []

  constructor(private service: ServiceService, private toastController: ToastController) { }

  ionViewDidEnter(): void {
    this.getData()
  }

  //get data
  getData() {
    this.service.permissionDataForApprove().subscribe(Response => {
      this.data = Response
      console.log(Response)
    })
  }

  handleReject(Phone: string, id: string) {
    const status = "Rejected"
    this.service.approvePermission(status, Phone, id).subscribe(async Response => {
      console.log(Response.message);
      this.getData();
      const toast = await this.toastController.create({
        message: Response.message,
        duration: 400
      })
      await toast.present()
    })
  }

  async handleApprove(Phone: string, id: string) {
    const status = "Approved"
    this.service.approvePermission(status, Phone, id).subscribe(async Response => {
      console.log(Response.message);
      this.getData();
      const toast = await this.toastController.create({
        message: Response.message,
        duration: 400
      })
      await toast.present()
    })
  }


}
