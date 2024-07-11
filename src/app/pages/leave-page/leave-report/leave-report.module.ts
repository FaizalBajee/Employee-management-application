import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaveReportPageRoutingModule } from './leave-report-routing.module';

import { LeaveReportPage } from './leave-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaveReportPageRoutingModule
  ],
  declarations: [LeaveReportPage]
})
export class LeaveReportPageModule {}
