import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplyPermissionPageRoutingModule } from './apply-permission-routing.module';

import { ApplyPermissionPage } from './apply-permission.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplyPermissionPageRoutingModule
  ],
  declarations: [ApplyPermissionPage]
})
export class ApplyPermissionPageModule {}
