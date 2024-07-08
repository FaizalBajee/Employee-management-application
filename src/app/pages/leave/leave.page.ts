import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.page.html',
  styleUrls: ['./leave.page.scss'],
})
export class LeavePage {
  reason: any = ''
  DATE: string = ''
  constructor(private service: ServiceService, private toastController: ToastController) { }

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
  handleSave() {
    if (this.DATE.length === 0) {
      alert("Select Date")
      return;
    }
    if (this.reason.length === 0) {
      alert("Enter Reason")
      return
    }
    this.service.applyLeave(this.DATE, this.reason).subscribe(async (Response) => {
      if (Response.message === "Leave Updated") {
        const msg: any = Response.message
        const toast = await this.toastController.create({
          message: msg,
          duration: 2000,
          position: 'bottom',
        })
        await toast.present()
      }
      else {
        alert(Response.message)
      }
    })
  }

}
