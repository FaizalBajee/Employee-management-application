import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave-page',
  templateUrl: './leave-page.page.html',
  styleUrls: ['./leave-page.page.scss'],
})
export class LeavePagePage {

  constructor(private route: Router) { }

  handleApplyLeave() {
    this.route.navigate(['leave'])
  }
  handleLeaveReport() {
    this.route.navigate(['leave-report'])
  }

}
