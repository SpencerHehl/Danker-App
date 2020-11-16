import { Component, OnInit, Input } from '@angular/core';
import { Dank } from '../dank.model';
import { DankerServiceService } from '../danker-service.service';

@Component({
  selector: 'app-danker-recents',
  templateUrl: './danker-recents.component.html',
  styleUrls: ['./danker-recents.component.sass']
})
export class DankerRecentsComponent implements OnInit {
  danks: Dank[];
  constructor(
    private dankService: DankerServiceService
  ) { }

  ngOnInit(): void {
    this.dankService.getRecentDanks()
      .subscribe((danks: any) => {
        this.danks = danks;
      },
      (err) => {
        console.error(err);
      });
  }

}
