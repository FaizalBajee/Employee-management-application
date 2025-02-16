import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-screen',
    pathMatch: 'full'
  },
  {
    path: 'login-screen',
    loadChildren: () => import('./pages/login-screen/login-screen.module').then(m => m.LoginScreenPageModule)
  },
  {
    path: 'home-screen',
    loadChildren: () => import('./pages/home-screen/home-screen.module').then(m => m.HomeScreenPageModule)
  },
  {
    path: 'attendance',
    loadChildren: () => import('./pages/attendance/attendance.module').then(m => m.AttendancePageModule)
  },
  {
    path: 'attendance-log',
    loadChildren: () => import('./pages/attendance-log/attendance-log.module').then(m => m.AttendanceLogPageModule)
  },
  {
    path: 'permission',
    loadChildren: () => import('./pages/permission/permission.module').then(m => m.PermissionPageModule)
  },
  {
    path: 'apply-permission',
    loadChildren: () => import('./pages/permission/apply-permission/apply-permission.module').then(m => m.ApplyPermissionPageModule)
  },
  {
    path: 'permission-report',
    loadChildren: () => import('./pages/permission/permission-report/permission-report.module').then(m => m.PermissionReportPageModule)
  },
  {
    path: 'leave',
    loadChildren: () => import('./pages/leave-page/leave/leave.module').then(m => m.LeavePageModule)
  },
  {
    path: 'otp-screen',
    loadChildren: () => import('./pages/otp-screen/otp-screen.module').then(m => m.OtpScreenPageModule)
  },
  {
    path: 'leave-page',
    loadChildren: () => import('./pages/leave-page/leave-page.module').then(m => m.LeavePagePageModule)
  },
  {
    path: 'leave-report',
    loadChildren: () => import('./pages/leave-page/leave-report/leave-report.module').then(m => m.LeaveReportPageModule)
  },
  {
    path: 'out-punch',
    loadChildren: () => import('./pages/out-punch/out-punch.module').then(m => m.OutPunchPageModule)
  },
  {
    path: 'approve',
    loadChildren: () => import('./pages/approve/approve.module').then(m => m.ApprovePageModule)
  },
  {
    path: 'approve-permission',
    loadChildren: () => import('./pages/approve/approve-permission/approve-permission.module').then(m => m.ApprovePermissionPageModule)
  },
  {
    path: 'approve-leave',
    loadChildren: () => import('./pages/approve/approve-leave/approve-leave.module').then( m => m.ApproveLeavePageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
