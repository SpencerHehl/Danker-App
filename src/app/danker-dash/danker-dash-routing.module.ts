import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashMainComponent } from './dash-main/dash-main.component';

const routes: Routes = [
    { path: 'dashboard', component: DashMainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DankerDashRoutingModule { }
