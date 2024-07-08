import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authencation.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.page.html',
  styleUrls: ['./login-screen.page.scss'],
})
export class LoginScreenPage {

  Number: any = "";

  constructor(private AuthService: AuthenticationService, private route: Router) { }

  handleSendOTP() {
    let len = this.Number
    if (len.length > 10) {
      alert("Enter the Valid Number")
      return;
    }
    if (len.length < 10) {
      alert("Enter the Valid Number")
      return;
    }
    this.AuthService.checkNumber(this.Number).subscribe(res => {
      if (res.message === "user exist") {
        let Number: any = res.Phone;
        let Name: any = res.Name;
        // console.log(Number)
        localStorage.setItem('Name', Name)
        localStorage.setItem('Number', Number);
        this.route.navigate(['otp-screen'])
      } else {
        alert("server error :" + res.message)
      }
    })

  }

}
