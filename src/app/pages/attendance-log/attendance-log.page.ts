import { Component, OnInit } from '@angular/core';
import { ViewDidEnter } from '@ionic/angular';
import { ServiceService } from 'src/app/service/service.service';
import { LogData } from 'src/app/model/model';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-attendance-log',
  templateUrl: './attendance-log.page.html',
  styleUrls: ['./attendance-log.page.scss'],
})

export class AttendanceLogPage implements ViewDidEnter {

  constructor(private service: ServiceService, private loadingController: LoadingController) { }

  LogData: LogData[] = [];

  ionViewDidEnter(): void {
    this.getAttendanceLog()
  }
  //get data funtion
  async getAttendanceLog() {
    const loading = await this.loadingController.create({
      message: 'Getting Attendance Log...',
    });
    await loading.present();
    try {
      this.service.getAttendanceLog().subscribe(res => {
        console.log(res)
        this.LogData = res
      })
    } catch (error) {
      console.error('Error getting data', error);
    } finally {
      await loading.dismiss();
    }

  }

}
