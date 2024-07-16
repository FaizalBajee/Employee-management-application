import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApproveLeavePage } from './approve-leave.page';

const routes: Routes = [
  {
    path: '',
    component: ApproveLeavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApproveLeavePageRoutingModule {}
