import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController, ViewDidEnter } from '@ionic/angular';
import { PermissionHours, PermissionReason } from 'src/app/model/model';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-apply-permission',
  templateUrl: './apply-permission.page.html',
  styleUrls: ['./apply-permission.page.scss'],
})
export class ApplyPermissionPage implements ViewDidEnter {

  selectedTime: any = '';
  selectedHours: any = '';
  selectReason: any = '';
  permissionReason: PermissionReason[] = []
  permissionHours: PermissionHours[] = []

  constructor(private loadingController: LoadingController, private service: ServiceService, private route: Router, private toastcontroller: ToastController) { }

  ionViewDidEnter(): void {
    this.getReason();
    this.getHours();
  }
  //to get permission reason
  async getReason() {
    this.service.permissionReason().subscribe(Response => {
      this.permissionReason = Response
    })

  }
  //to get permission hours
  async getHours() {
    this.service.permissionHours().subscribe(Response => {
      this.permissionHours = Response
    })

  }

  formatTime(isoString: string): string {
    const date = new Date(isoString);
    let hours = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    return `${hours}:${minutes} ${ampm}`;
  }

  onTimeChange(event: any) {
    const time = event.detail.value
    this.selectedTime = this.formatTime(time)
  }
  handleHours(event: any) {
    this.selectedHours = event.detail.value
  }
  handleReason(event: any) {
    this.selectReason = event.detail.value
  }

  async handleSave() {
    if (this.selectedTime.length === 0) {
      alert("Select Time")
      return;
    }
    if (this.selectedHours.length === 0) {
      alert("Select Hours")
      return;
    }
    if (this.selectReason.length === 0) {
      alert("Select Reason")
      return;
    }
    const loading = await this.loadingController.create({
      message: 'loading...',
    });
    await loading.present();
    try {
      this.service.applyPermission(this.selectedTime, this.selectedHours, this.selectReason).subscribe(async Response => {
        if (Response.message === "Permission uploaded successfully") {
          const toast = await this.toastcontroller.create({
            message: Response.message,
            duration: 2000,
            position: "bottom"
          })
          await toast.present()

          this.route.navigate(['permission'])
        } else {
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
