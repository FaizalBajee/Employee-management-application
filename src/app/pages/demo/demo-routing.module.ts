import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DEMOPage } from './demo.page';

const routes: Routes = [
  {
    path: '',
    component: DEMOPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DEMOPageRoutingModule {}
