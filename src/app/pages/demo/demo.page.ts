import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.page.html',
  styleUrls: ['./demo.page.scss'],
})
export class DEMOPage {
  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    if (this.platform.is('hybrid')) {
      alert('Running on a hybrid platform (Cordova or Capacitor)');
    } else if (this.platform.is('android')) {
      alert('Running on Android');
    } else if (this.platform.is('ios')) {
      console.log('Running on iOS');
    } else if (this.platform.is('desktop')) {
      alert('Running on a desktop browser');
    } else if (this.platform.is('mobileweb')) {
      alert('Running on a mobile browser');
    } else {
      alert('Platform not identified');
    }
  }
}