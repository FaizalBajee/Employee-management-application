import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApproveLeavePageRoutingModule } from './approve-leave-routing.module';

import { ApproveLeavePage } from './approve-leave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApproveLeavePageRoutingModule
  ],
  declarations: [ApproveLeavePage]
})
export class ApproveLeavePageModule {}
