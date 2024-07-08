import { Component, ElementRef, OnInit, AfterViewInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { AuthenticationService } from 'src/app/service/authencation.service';

@Component({
  selector: 'app-otp-screen',
  templateUrl: './otp-screen.page.html',
  styleUrls: ['./otp-screen.page.scss'],
})
export class OtpScreenPage implements AfterViewInit {
  @ViewChildren(IonInput)
  inputs!: QueryList<IonInput>;

  OTP = ['', '', '', '', '', ''];


  constructor(private AuthService: AuthenticationService, private route: Router) { }

  ngAfterViewInit() {
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
    this.AuthService.verifyOTP(otp).subscribe(Response => {
      if (Response.message === "OTP is Verified") {
        console.log("go to home page")
        this.route.navigate(['home-screen'])
      }else{
        console.log(Response.message)
        alert(Response.message)
      }
    })
  }

}
