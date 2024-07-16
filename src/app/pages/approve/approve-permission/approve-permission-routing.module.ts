import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApprovePermissionPage } from './approve-permission.page';

const routes: Routes = [
  {
    path: '',
    component: ApprovePermissionPage
  },
  {
    path: 'approve-permission',
    loadChildren: () => import('./approve-permission.module').then(m => m.ApprovePermissionPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApprovePermissionPageRoutingModule { }
