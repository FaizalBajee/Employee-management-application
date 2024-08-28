import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeScreenPage } from './home-screen.page';
import { AuthGuard } from 'src/app/guards/AuthGuard';

const routes: Routes = [
  {
    path: '',
    component: HomeScreenPage,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeScreenPageRoutingModule { }
