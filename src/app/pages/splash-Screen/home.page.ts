import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewDidEnter } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements ViewDidEnter {
  constructor(private route:Router) {}
  ionViewDidEnter(): void {
    setTimeout(()=>{
      this.checkFunction()
    },1500)
  }
  checkFunction(){
     const num =localStorage.getItem('Number')
     if(!num){
      this.route.navigate(['login-screen'])
     }
     else{
      this.route.navigate(['home-screen'])
     }
  } 
}
