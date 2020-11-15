import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubmitDankComponent } from './submit-dank/submit-dank.component';


const routes: Routes = [
  { path: 'danks/submit', component: SubmitDankComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
