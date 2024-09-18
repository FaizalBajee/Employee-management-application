import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { ServiceService } from 'src/app/service/service.service';
import { ViewDidEnter } from '@ionic/angular';
import { ToastService } from 'src/app/service/toast-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplyLeaveService } from 'src/app/service/applyLeave.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.page.html',
  styleUrls: ['./leave.page.scss'],
})
export class LeavePage implements ViewDidEnter {
  tomorrow: any = ''
  leaveForm!: FormGroup;

  constructor(private service: ServiceService, private leaveService: ApplyLeaveService, private fb: FormBuilder, private toastService: ToastService, private route: Router, private toastController: ToastController, private loadingController: LoadingController) {
    this.leaveForm = this.fb.group({
      date: ['', Validators.required],
      reason: ['', Validators.required]
    })
  }

  ionViewDidEnter(): void {
    this.getTomorrowDate();
  }
  isSunday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();
    return utcDay !== 0;
  };
  getTomorrowDate() {
    const today = new Date();
    const tomorrowDate = new Date(today);
    tomorrowDate.setDate(today.getDate() + 1);
    this.tomorrow = tomorrowDate.toISOString().split('T')[0];
  }
  onDateChange(event: any) {
    console.log(event)
    this.leaveForm.patchValue({ date: event.detail.value })
  }
  async handleSave() {
    if (this.leaveForm.value.date.length === 0) {
      this.toastService.toast("Select Date")
      return;
    }
    if (this.leaveForm.value.reason.length === 0) {
      this.toastService.toast("Enter Reason")
      return;
    }
    try {
      this.leaveService.applyLeave(this.leaveForm.value.date, this.leaveForm.value.reason).subscribe((Response) => {
        if (Response.message === "Leave Updated") {
          const msg: any = Response.message
          this.toastService.toast(msg)
          this.leaveForm.reset();
        }
        else {
          this.toastService.toast(Response.message)
        }
      })
    } catch (error) {
      console.error('Error getting data', error);
    }
  }

}
