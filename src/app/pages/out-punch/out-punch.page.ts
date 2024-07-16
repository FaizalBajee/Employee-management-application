import { Component, ElementRef, OnInit } from '@angular/core';
import { LoadingController, ToastController, ViewDidEnter } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment.prod';
import { Geolocation } from '@capacitor/geolocation';
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-out-punch',
  templateUrl: './out-punch.page.html',
  styleUrls: ['./out-punch.page.scss'],
})
export class OutPunchPage implements ViewDidEnter {

  latitude: any = ''
  longitude: any = ''

  constructor(private route: Router, private loadingController: LoadingController, private toastController: ToastController, private service: ServiceService) { }
  @ViewChild('map')
  mapRef!: ElementRef<HTMLElement>;
  newMap!: GoogleMap;

  ionViewDidEnter(): void {
    this.locationPermission()

  }
  //location permission
  async locationPermission() {
    try {
      const status = await Geolocation.requestPermissions()
      if (status.location === 'granted') {
        //map function
        this.getMap();
      } else {
        alert('location permission denied')
      }
    } catch (error) {
      console.log("error handling :", error)
      alert("error handling :" + error)
    }

  }

  async getMap() {
    const loading = await this.loadingController.create({
      message: "getting data"
    })
    await loading.present()
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      this.latitude = coordinates.coords.latitude
      this.longitude = coordinates.coords.longitude
      //display map function
      this.createMap()
    } catch (err) {
      console.log("error handling :", err)
    } finally {
      await loading.dismiss()
    }

  }
  //display map function
  async createMap() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.newMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: this.mapRef.nativeElement,
      apiKey: environment.MapAPI,
      config: {
        center: {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude,
        },
        zoom: 18,
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
  //logic to insert out time 
  async outPunch() {
    const loading = await this.loadingController.create({
      message: "loading",
    })
    await loading.present()
    //
    try {
      this.service.OutPunch().subscribe(async (Response) => {
        if (Response.message === "Out punched successfully") {
          const toast = await this.toastController.create({
            message: "Out Punched Successfully!",
            duration: 2000
          })
          await toast.present()
          this.route.navigate(['home-screen'])
        } else {
          alert(Response.message)
        }
      })
    } catch (error) {
      console.log("error handling :", error)
    } finally {
      await loading.dismiss()
    }

  }
  //alert box to confirm
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'Yes',
      role: 'confirm',
      //logic for Punch Out
      handler: () => {
        this.outPunch()
      },
    },
  ];

  setResult(ev: any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }

}
