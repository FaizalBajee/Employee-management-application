import { Component, OnInit } from '@angular/core';
import { ViewDidEnter } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetAttendanceLogService } from 'src/app/service/getAttendanceLog.service';
import { attendanceLogModel } from 'src/app/model/attendanceLog.model';
@Component({
  selector: 'app-attendance-log',
  templateUrl: './attendance-log.page.html',
  styleUrls: ['./attendance-log.page.scss'],
})

export class AttendanceLogPage implements ViewDidEnter {
  LogData: attendanceLogModel[] = [];
  dateForm!: FormGroup;
  constructor(private getAttendanceLogService: GetAttendanceLogService, private fb: FormBuilder, private loadingController: LoadingController) {
    this.dateForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required]
    })
  }

  ionViewDidEnter(): void {
    this.getAttendanceLog()
  }
  async getAttendanceLog() {
    const loading = await this.loadingController.create({
      message: 'Getting Attendance Log...',
    });
    await loading.present();
    try {
      this.getAttendanceLogService.getAttendanceLog().subscribe(res => {
        console.log(res)
        this.LogData = res
      })
    } catch (error) {
      console.error('Error getting data', error);
    } finally {
      await loading.dismiss();
    }
  }
  fromDatePicker(event: any) {
    this.dateForm.patchValue({ from: event.detail.value })
  }
  toDatePicker(event: any) {
    this.dateForm.patchValue({ to: event.detail.value })
  }
  handleShow() {
    if (this.dateForm.valid) {
      console.log('from :' + this.dateForm.value.from)
    }
  }

}
