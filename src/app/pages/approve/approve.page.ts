import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.page.html',
  styleUrls: ['./approve.page.scss'],
})
export class ApprovePage {

  constructor(private route: Router) { }

  handlePermission() {
    this.route.navigate(['approve-permission'])
  }

  handleLeave() {
    this.route.navigate(['approve-leave'])
  }

}
