import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutPunchPageRoutingModule } from './out-punch-routing.module';

import { OutPunchPage } from './out-punch.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutPunchPageRoutingModule,
  
  ], schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [OutPunchPage]
})
export class OutPunchPageModule {}
