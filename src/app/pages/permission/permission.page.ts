import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.page.html',
  styleUrls: ['./permission.page.scss'],
})
export class PermissionPage {

  constructor(private route: Router) { }

  handleApplyPermission() {
    this.route.navigate(['apply-permission'])
  }
  handlePermissionReport() {
    this.route.navigate(['permission-report'])
  }

}
