import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/service/authencation.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.page.html',
  styleUrls: ['./login-screen.page.scss'],
})
export class LoginScreenPage {

  Number: any = "";

  constructor(private AuthService: AuthenticationService, private route: Router, private loadingController: LoadingController) { }

  async handleSendOTP() {
    let len = this.Number
    if (len.length > 10) {
      alert("Enter the Valid Number")
      return;
    }
    if (len.length < 10) {
      alert("Enter the Valid Number")
      return;
    }

    const loading = await this.loadingController.create({
      message: 'Getting User Data...',
    });
    await loading.present();
    try {
      this.AuthService.checkNumber(this.Number).subscribe(res => {
        if (res.message === "user exist") {
          this.route.navigate(['otp-screen'])
        } else {
          alert("server error :" + res.message)
        }
      })
    } catch (error) {
      console.error('Error getting data', error);
    } finally {
      await loading.dismiss();
    }


  }

}
