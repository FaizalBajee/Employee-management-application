import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authencation.service';
import { ToastService } from 'src/app/service/toast-service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.page.html',
  styleUrls: ['./login-screen.page.scss'],
})
export class LoginScreenPage {
  phoneNumber: any = "";
  constructor(private AuthService: AuthenticationService, private toastService: ToastService, private router: Router) { }

  async handleSendOTP() {
    if (this.phoneNumber.length < 10 || this.phoneNumber.length > 10) {
      this.toastService.toast("Please enter the valid number")
      return;
    }
    try {
      this.AuthService.checkNumber(this.phoneNumber).subscribe(res => {
        if (res.message === "user exist") {
          const Number = this.phoneNumber;
          this.router.navigate(['otp-screen'], { state: { Number } });
        } else {
          this.toastService.toast("server error :" + res.message)
        }
      })
    } catch (error) {
      this.toastService.toast('Error getting data'+ error);
    }
  }

}
