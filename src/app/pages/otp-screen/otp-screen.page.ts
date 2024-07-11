import { Component, ElementRef, OnInit, AfterViewInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput, LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/service/authencation.service';
import { ViewDidEnter } from '@ionic/angular';

@Component({
  selector: 'app-otp-screen',
  templateUrl: './otp-screen.page.html',
  styleUrls: ['./otp-screen.page.scss'],
})
export class OtpScreenPage implements ViewDidEnter {
  @ViewChildren(IonInput)
  inputs!: QueryList<IonInput>;

  OTP = ['', '', '', '', '', ''];


  constructor(private AuthService: AuthenticationService, private route: Router, private loadingController: LoadingController) { }

  ionViewDidEnter() {
    this.inputs.first.setFocus();
  }

  otpController(event: KeyboardEvent, index: number): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (value && index < this.inputs.length - 1) {
      setTimeout(() => {
        this.inputs.toArray()[index + 1].setFocus();
      }, 10);
    } else if (event.key === 'Backspace' && index > 0) {
      setTimeout(() => {
        this.inputs.toArray()[index - 1].setFocus();
      }, 10);
    }
  }

  async handleVerify() {
    let otp = this.OTP.join("")
    const loading = await this.loadingController.create({
      message: 'Getting Attendance Log...',
    });
    await loading.present();
    try {
      this.AuthService.verifyOTP(otp).subscribe(Response => {
        if (Response.message === "OTP is Verified") {
          console.log("go to home page")
          this.route.navigate(['home-screen'])
        } else {
          console.log(Response.message)
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
//

