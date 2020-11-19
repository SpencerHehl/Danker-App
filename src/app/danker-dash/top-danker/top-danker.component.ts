import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { DankLeaderStats } from '../dank.model';
import { DankerServiceService } from '../danker-service.service';

@Component({
  selector: 'app-top-danker',
  templateUrl: './top-danker.component.html',
  styleUrls: ['./top-danker.component.sass']
})
export class TopDankerComponent implements OnInit {
  @Input() refreshEvent: EventEmitter<any>;
  dankLeaders: DankLeaderStats[];
  topDanker;
  leaderboardFilter = 'month';
  constructor(
    private dankService: DankerServiceService
  ) { }

  ngOnInit(): void {
    this.getDankerLeaders();
    this.refreshEvent.subscribe((data) => {
      this.leaderboardFilter = data;
      console.log(this.leaderboardFilter);
      this.getDankerLeaders();
    });
  }

  getDankerLeaders() {
    this.dankService.getDankerLeaders(this.leaderboardFilter)
      .subscribe((leaders: any) => {
        this.dankLeaders = leaders;
        const topDanker = leaders[0];
        this.topDanker = {
          displayName: topDanker.leaderInfo.displayName,
          photo: `assets/images/${topDanker.leaderInfo.userId}.jpg`
        };
      },
      (err) => {
        console.error(err);
      });
  }

}
