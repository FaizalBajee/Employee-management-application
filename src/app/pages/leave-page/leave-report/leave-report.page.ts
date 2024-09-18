import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ServiceService } from 'src/app/service/service.service';
import { ViewDidEnter } from '@ionic/angular';
import { LeaveData } from 'src/app/model/model';
import { leaveDataModel } from 'src/app/model/leaveData.model';
import { GetLeaveReportService } from 'src/app/service/getLeaveReport.service';

@Component({
  selector: 'app-leave-report',
  templateUrl: './leave-report.page.html',
  styleUrls: ['./leave-report.page.scss'],
})
export class LeaveReportPage implements ViewDidEnter {
  LeaveData: leaveDataModel[] = []

  constructor(private leaveReportService: GetLeaveReportService) { }
  ionViewDidEnter(): void {
    this.leaveReport()
  }

  async leaveReport() {
    this.leaveReportService.leaveReport().subscribe(Response => {
      this.LeaveData = Response
      // console.log(this.LeaveData)
    })
  }
}
