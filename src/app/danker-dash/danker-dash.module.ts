import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashMainComponent } from './dash-main/dash-main.component';
import { DankerRecentsComponent } from './danker-recents/danker-recents.component';
import { TopDankerComponent } from './top-danker/top-danker.component';
import { TopDankeeComponent } from './top-dankee/top-dankee.component';
import { DankerDashRoutingModule } from './danker-dash-routing.module';



@NgModule({
  declarations: [DashMainComponent, DankerRecentsComponent, TopDankerComponent, TopDankeeComponent],
  imports: [
    CommonModule,
    DankerDashRoutingModule,
  ]
})
export class DankerDashModule { }
