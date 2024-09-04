import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform, private router: Router, private authService: AuthService) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.checkAuthentication();
    });
  }

  checkAuthentication() {
    if (!this.authService.isLogin()) {
      this.router.navigate(['/login-screen']);
    } else {
      this.router.navigate(['/home-screen']);
    }
  }
}
