import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController, ViewDidEnter } from '@ionic/angular';
import { PermissionHours, PermissionReason } from 'src/app/model/model';
import { permissionDataModel } from 'src/app/model/permissionData.model';
import { applyPermissionService } from 'src/app/service/applyPermission.service';
import { ServiceService } from 'src/app/service/service.service';
import { ToastService } from 'src/app/service/toast-service';

@Component({
  selector: 'app-apply-permission',
  templateUrl: './apply-permission.page.html',
  styleUrls: ['./apply-permission.page.scss'],
})
export class ApplyPermissionPage implements ViewDidEnter {
  permissionForm!: FormGroup;
  minTime?: string;
  permissionReason: permissionDataModel[] = []
  permissionHours: permissionDataModel[] = []

  constructor(private loadingController: LoadingController, private permissionService: applyPermissionService, private toastService: ToastService, private fb: FormBuilder, private service: ServiceService) {
    this.permissionForm = this.fb.group({
      time: ['', Validators.required],
      hours: ['', Validators.required],
      reason: ['', Validators.required]
    })
    this.minTimeFun()
  }

  ionViewDidEnter(): void {
    this.getReason();
    this.getHours();
  }
  async getReason() {
    this.service.permissionReason().subscribe(Response => {
      this.permissionReason = Response;
    })
  }
  async getHours() {
    this.service.permissionHours().subscribe(Response => {
      this.permissionHours = Response
    })
  }
  minTimeFun() {
    const now = new Date();
    const minTimeDate = new Date(now.getTime());
    const year = minTimeDate.getFullYear();
    const month = ('0' + (minTimeDate.getMonth() + 1)).slice(-2);
    const day = ('0' + minTimeDate.getDate()).slice(-2);
    const hours = ('0' + minTimeDate.getHours()).slice(-2);
    const minutes = ('0' + minTimeDate.getMinutes()).slice(-2);
    this.minTime = `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  onTimeChange(event: any) {
    this.permissionForm.patchValue({ time: event.detail.value })
  }

  handleHours(event: any) {
    this.permissionForm.patchValue({ hours: event.detail.value })
  }
  handleReason(event: any) {
    this.permissionForm.patchValue({ reason: event.detail.value })
  }

  async handleSave() {
    if (this.permissionForm.value.time.length === 0) {
      this.toastService.toast("Select Time")
      return;
    }
    if (this.permissionForm.value.hours.length === 0) {
      this.toastService.toast("Select Hours")
      return;
    }
    if (this.permissionForm.value.reason.length === 0) {
      this.toastService.toast("Select Reason")
      return;
    }
    const loading = await this.loadingController.create({
      message: 'loading...',
    });
    await loading.present();
    try {
      this.permissionService.applyPermission(this.permissionForm.value.time, this.permissionForm.value.hours, this.permissionForm.value.reason).subscribe(async Response => {
        if (Response.message === "Permission uploaded successfully") {
          this.toastService.toast(Response.message)
          this.permissionForm.reset();
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
