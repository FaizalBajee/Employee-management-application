import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { ServiceService } from 'src/app/service/service.service';
import { ViewDidEnter } from '@ionic/angular';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.page.html',
  styleUrls: ['./leave.page.scss'],
})
export class LeavePage implements ViewDidEnter{
  reason: any = ''
  DATE: string = ''
  tomorrow:any=''
 isSunday = (dateString: string) => {
  const date = new Date(dateString);
  const utcDay = date.getUTCDay();
  return utcDay !== 0;
  };
  constructor(private service: ServiceService, private route: Router, private toastController: ToastController, private loadingController: LoadingController) { }

    ionViewDidEnter(): void {
      const today = new Date();
      const tomorrowDate = new Date(today);
      tomorrowDate.setDate(today.getDate() + 1);
      this.tomorrow = tomorrowDate.toISOString().split('T')[0];
    }

  onDateChange(event: any) {
    const isoString = event.detail.value;
    const formattedDate = this.formatDate(isoString);
    this.DATE = formattedDate;
  }

  formatDate(isoString: string): string {
    const date = new Date(isoString);
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  async handleSave() {
    if (this.DATE.length === 0) {
      alert("Select Date")
      return;
    }
    if (this.reason.length === 0) {
      alert("Enter Reason")
      return
    }

    const loading = await this.loadingController.create({
      message: 'loading...',
    });
    await loading.present();
    try {
      this.service.applyLeave(this.DATE, this.reason).subscribe(async (Response) => {
        if (Response.message === "Leave Updated") {
          const msg: any = Response.message
          const toast = await this.toastController.create({
            message: msg,
            duration: 2000,
            position: 'bottom',
          })
          await toast.present()
          this.route.navigate(['leave-page'])
        }
        else {
          alert(Response.message)
        }
      })
    } catch (error) {
      console.error('Error getting data', error);
    } finally {
      await loading.dismiss();
    }

  }

}
