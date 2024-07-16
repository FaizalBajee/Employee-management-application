import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApprovePermissionPageRoutingModule } from './approve-permission-routing.module';

import { ApprovePermissionPage } from './approve-permission.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApprovePermissionPageRoutingModule
  ],
  declarations: [ApprovePermissionPage]
})
export class ApprovePermissionPageModule {}
