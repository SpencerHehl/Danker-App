import { Component, EventEmitter, Input, OnInit } from '@angular/core';
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
      console.log(leaders);
      this.dankLeaders = leaders;
    },
    (err) => {
      console.error(err);
    });
  }

}
