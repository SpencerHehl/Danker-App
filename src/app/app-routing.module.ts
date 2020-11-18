import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DankerDashModule } from './danker-dash/danker-dash.module';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full', loadChildren: () => DankerDashModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
