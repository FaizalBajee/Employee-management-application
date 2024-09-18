import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, Platform, ToastController } from '@ionic/angular';
import { AuthService } from './service/auth.service';
import { App } from '@capacitor/app';
import { ToastService } from './service/toast-service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonRouterOutlet, { static: true })
  routerOutlet!: IonRouterOutlet;
  private lastBackPressTime = 0;
  private backPressInterval = 2000;
  constructor(private platform: Platform, private toastService: ToastService, private router: Router, private authService: AuthService) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.checkAuthentication();
      this.platform.backButton.subscribeWithPriority(10, () => {
        this.handleBackButton();
      });
    });
  }
  async handleBackButton() {
    if (this.router.url === '/home-screen' || this.router.url === '/login-screen' || this.router.url === '/otp-screen') {
      const currentTime = new Date().getTime();
      if (currentTime - this.lastBackPressTime < this.backPressInterval) {
        App.exitApp();
      } else {
        this.toastService.toast('Press back again to exit');
        this.lastBackPressTime = currentTime;
      }
    } else {
      this.routerOutlet.pop();
    }
  }
  checkAuthentication() {
    if (!this.authService.isLogin()) {
      this.router.navigate(['/login-screen']);
    } else {
      this.router.navigate(['/home-screen']);
    }
  }
}
