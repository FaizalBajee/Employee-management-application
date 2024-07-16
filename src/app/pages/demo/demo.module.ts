import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DEMOPageRoutingModule } from './demo-routing.module';

import { DEMOPage } from './demo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DEMOPageRoutingModule
  ],
  declarations: [DEMOPage]
})
export class DEMOPageModule {}
