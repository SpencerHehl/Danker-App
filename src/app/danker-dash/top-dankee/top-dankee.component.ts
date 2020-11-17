import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { User } from 'src/app/user.model';
import { DankLeaderStats } from '../dank.model';
import { DankerServiceService } from '../danker-service.service';

@Component({
  selector: 'app-top-dankee',
  templateUrl: './top-dankee.component.html',
  styleUrls: ['./top-dankee.component.sass']
})
export class TopDankeeComponent implements OnInit {
  @Input() refreshEvent: EventEmitter<any>;
  dankLeaders: DankLeaderStats[];
  topDankee;
  constructor(
    private dankService: DankerServiceService
  ) { }

  ngOnInit(): void {
    this.getDankeeLeaders();
    this.refreshEvent.subscribe((data) => {
      this.getDankeeLeaders();
    });
  }

  getDankeeLeaders() {
    this.dankService.getDankeeLeaders()
    .subscribe((leaders: any) => {
      this.dankLeaders = leaders;
      const topDankee = leaders[0];
      this.topDankee = {
        displayName: topDankee.leaderInfo.displayName,
        photo: `assets/images/${topDankee.leaderInfo.userId}.jpg`
      };
    },
    (err) => {
      console.error(err);
    });
  }

}
