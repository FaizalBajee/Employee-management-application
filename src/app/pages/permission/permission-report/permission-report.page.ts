import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { LoadingController, ViewDidEnter } from '@ionic/angular';
import { PermissionData } from 'src/app/model/model';

@Component({
  selector: 'app-permission-report',
  templateUrl: './permission-report.page.html',
  styleUrls: ['./permission-report.page.scss'],
})
export class PermissionReportPage implements ViewDidEnter {

  permissionData: PermissionData[] = [];

  constructor(private service: ServiceService, private loadingController: LoadingController) { }

  ionViewDidEnter(): void {
    this.getData()
  }

  async getData() {

    const loading = await this.loadingController.create({
      message: 'loading...',
    });
    await loading.present();
    try {
      this.service.permissionReport().subscribe(Response => {
        this.permissionData = Response
        console.log(this.permissionData)
      })
    } catch (error) {
      console.error('Error getting data', error);
    } finally {
      await loading.dismiss();
    }
  }
}
