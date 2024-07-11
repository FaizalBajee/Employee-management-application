//1F:3E:E5:DE:22:D1:30:70:56:2F:B6:16:C4:19:D8:0F:15:89:B8:9D
//AIzaSyA5UeXxqY61HwNlTECpJ7mlNmwZlHxtCt4

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { LoadingController, ToastController, ViewDidEnter } from '@ionic/angular';
import { environment } from 'src/environments/environment.prod';
import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType, CameraSource, Photo ,CameraPermissionState} from '@capacitor/camera';
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements ViewDidEnter {

  BlobImage: any = '';
  latitude: any = '';
  longitude: any = '';
  FileName: any = '';

  constructor(private service: ServiceService, private route: Router, private platform: Platform, private loadingController: LoadingController, private toastController: ToastController) { }

  ionViewDidEnter(): void {
    this.getMap()
    // this.createMap()
  }


  @ViewChild('map') mapRef!: ElementRef<HTMLElement>;
  newMap!: GoogleMap;
  //to get latitude and longitude
  async getMap() {
    const loading = await this.loadingController.create({
      message: 'Getting current location...',
    });
    await loading.present();

    try {
      const coordinates = await Geolocation.getCurrentPosition();
      this.latitude = coordinates.coords.latitude;
      this.longitude = coordinates.coords.longitude;
      //map funcation
      this.createMap()
    } catch (error) {
      console.error('Error getting location', error);
    } finally {
      await loading.dismiss();
    }
  }

  //Display Map function
  async createMap() {
    console.log("createMap is calling")
    const coordinates = await Geolocation.getCurrentPosition()
    this.newMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: this.mapRef.nativeElement,
      apiKey: environment.MapAPI,
      config: {
        center: {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude,
        },
        zoom: 17,
      },
    })
    this.addMarker()
  }
  //Marker in Map Function
  async addMarker() {
    const coordinates = await Geolocation.getCurrentPosition()
    const marker: Marker = {
      coordinate: {
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude
      }
    }
    await this.newMap.addMarker(marker)
  }
  //Camera Funcation
  async handleCamera() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    this.BlobImage = capturedPhoto.webPath
    this.FileName = this.BlobImage?.substring(this.BlobImage.lastIndexOf('/') + 1)
  }

  //Upload Details Function
  async handleUpload() {
    if (this.BlobImage.length === 0) {
      alert("Capture Image")
      return;
    }

    const loading = await this.loadingController.create({
      message: 'loading...',
    });
    await loading.present();
    try {
      const response = await fetch(this.BlobImage);
      const blob = await response.blob();
      this.service.handleAttendance(blob, this.FileName, this.latitude, this.longitude).subscribe(async res => {
        if (res) {
          const msg: any = res.message
          const toast = await this.toastController.create({
            message: msg,
            duration: 2000,
            position: 'bottom',
          })
          await toast.present()
  
          this.BlobImage = ''
          this.FileName = ''
          this.latitude = ''
          this.longitude = ''
          this.route.navigate(['home-screen'])
        }
      })
    } catch (error) {
      console.error('Error getting data', error);
    } finally {
      await loading.dismiss();
    }
  }

}
