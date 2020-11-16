import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { runInThisContext } from 'vm';
import { Dank } from '../dank.model';
import { DankerServiceService } from '../danker-service.service';

@Component({
  selector: 'app-danker-recents',
  templateUrl: './danker-recents.component.html',
  styleUrls: ['./danker-recents.component.sass']
})
export class DankerRecentsComponent implements OnInit {
  @Input() refreshEvent: EventEmitter<any>;
  danks: Dank[];
  constructor(
    private dankService: DankerServiceService,
  ) { }

  ngOnInit(): void {
    this.getRecentDanks();
    this.refreshEvent.subscribe((data) => {
      this.getRecentDanks();
    });
  }

  getRecentDanks() {
    this.dankService.getRecentDanks()
    .subscribe((danks: any) => {
      console.log(danks);
      this.danks = danks;
    },
    (err) => {
      console.error(err);
    });
  }

}
