import { Component, OnInit } from '@angular/core';
import { DankLeaderStats } from '../dank.model';
import { DankerServiceService } from '../danker-service.service';

@Component({
  selector: 'app-top-danker',
  templateUrl: './top-danker.component.html',
  styleUrls: ['./top-danker.component.sass']
})
export class TopDankerComponent implements OnInit {
  dankLeaders: DankLeaderStats[];
  constructor(
    private dankService: DankerServiceService
  ) { }

  ngOnInit(): void {
    this.dankService.getDankerLeaders()
      .subscribe((leaders: any) => {
        this.dankLeaders = leaders;
      },
      (err) => {
        console.error(err);
      });
  }

}
