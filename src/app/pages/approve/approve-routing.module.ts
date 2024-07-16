import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApprovePage } from './approve.page';

const routes: Routes = [
  {
    path: '',
    component: ApprovePage
  },
  // {
  //   path: 'approve-permission',
  //   loadChildren: () => import('./approve-permission/approve-permission.module').then( m => m.ApprovePermissionPageModule)
  // },
  // {
  //   path: 'approve-leave',
  //   loadChildren: () => import('./approve-leave/approve-leave.module').then( m => m.ApproveLeavePageModule)
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApprovePageRoutingModule {}
