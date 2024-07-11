import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ServiceService } from 'src/app/service/service.service';
import { ViewDidEnter } from '@ionic/angular';
import { LeaveData } from 'src/app/model/model';

@Component({
  selector: 'app-leave-report',
  templateUrl: './leave-report.page.html',
  styleUrls: ['./leave-report.page.scss'],
})
export class LeaveReportPage implements ViewDidEnter {

  LeaveData: LeaveData[] = []

  constructor(private loadingController: LoadingController, private service: ServiceService) { }
  ionViewDidEnter(): void {
    this.leaveReport()
  }

  async leaveReport() {
    this.service.leaveReport().subscribe(Response => {
      this.LeaveData = Response
      // console.log(this.LeaveData)
    })
  }
}
