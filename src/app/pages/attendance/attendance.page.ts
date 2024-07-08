//3F:43:15:04:5D:5C:75:41:54:D8:8D:FE:5B:7F:6E:8A:82:90:C0:79
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { LoadingController, ToastController, ViewDidEnter } from '@ionic/angular';
import { environment } from 'src/environments/environment.prod';
import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
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
    this.getCoord()
    this.createMap()
  }


  @ViewChild('map') mapRef!: ElementRef<HTMLElement>;
  newMap!: GoogleMap;
  //to get latitude and longitude
  async getCoord() {
    const loading = await this.loadingController.create({
      message: 'Getting current location...',
    });
    await loading.present();

    try {
      const coordinates = await Geolocation.getCurrentPosition();
      this.latitude = coordinates.coords.latitude;
      this.longitude = coordinates.coords.longitude;
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
        // alert(res)
        this.BlobImage = ''
        this.FileName = ''
        this.latitude = ''
        this.longitude = ''
        this.route.navigate(['home-screen'])
      }
    })
  }

}
