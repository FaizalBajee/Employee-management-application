import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PermissionPage } from './permission.page';

const routes: Routes = [
  {
    path: '',
    component: PermissionPage
  },  {
    path: 'apply-permission',
    loadChildren: () => import('./apply-permission/apply-permission.module').then( m => m.ApplyPermissionPageModule)
  },
  {
    path: 'permission-report',
    loadChildren: () => import('./permission-report/permission-report.module').then( m => m.PermissionReportPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermissionPageRoutingModule {}
