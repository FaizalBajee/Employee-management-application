import { Component,QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput, LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/service/authencation.service';
import { ViewDidEnter } from '@ionic/angular';
import { ToastService } from 'src/app/service/toast-service';

@Component({
  selector: 'app-otp-screen',
  templateUrl: './otp-screen.page.html',
  styleUrls: ['./otp-screen.page.scss'],
})
export class OtpScreenPage implements ViewDidEnter {
  @ViewChildren(IonInput)
  inputs!: QueryList<IonInput>;
  phoneNumber?: number;
  OTP = ['', '', '', '', '', ''];

  constructor(private AuthService: AuthenticationService, private toastService: ToastService, private route: Router, private loadingController: LoadingController) {
    const navigation = this.route.getCurrentNavigation();
    const state = navigation?.extras.state as { Number: any }
    this.phoneNumber = state?.Number
    console.log(this.phoneNumber)
  }

  ionViewDidEnter() {
    this.inputs.first.setFocus();
  }

  otpController(event: KeyboardEvent, index: number) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    console.log(value)

    if (value.length === 1 && index < this.OTP.length - 1) {
      this.inputs.toArray()[index + 1].setFocus();
    } else if (value.length === 0 && index > 0) {
      this.inputs.toArray()[index - 1].setFocus();
    }
  }

  async handleVerify() {
    // this.route.navigate(['home-screen'])//testing purpuse
    let otp = this.OTP.join("")
    try {
      this.AuthService.verifyOTP(otp, this.phoneNumber).subscribe(Response => {
        if (Response.message === "OTP is Verified") {
          console.log("go to home page")
          let Number: any = Response.Phone;
          let Name: any = Response.Name;
          let Location: any = Response.Location
          localStorage.setItem('Name', Name)
          localStorage.setItem('Number', Number);
          localStorage.setItem("Location", Location)
          this.route.navigate(['home-screen'])
        } else {
          console.log(Response.message)
          this.toastService.toast(Response.message)
        }
      })
    } catch (error) {
      console.error('error handling : ', error);
      this.toastService.toast('error handling : ' + error);
    }
  }

}

