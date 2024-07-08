import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { ViewDidEnter } from '@ionic/angular';
import { PermissionData } from 'src/app/model/model';

@Component({
  selector: 'app-permission-report',
  templateUrl: './permission-report.page.html',
  styleUrls: ['./permission-report.page.scss'],
})
export class PermissionReportPage implements ViewDidEnter {

  permissionData: PermissionData[] = [];

  constructor(private service: ServiceService) { }

  ionViewDidEnter(): void {
    this.getData()
  }

  getData() {
    this.service.permissionReport().subscribe(Response => {
      this.permissionData=Response
      console.log(this.permissionData)
    })
  }
}
