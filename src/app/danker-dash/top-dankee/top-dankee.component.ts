import { Component, OnInit } from '@angular/core';
import { DankLeaderStats } from '../dank.model';
import { DankerServiceService } from '../danker-service.service';

@Component({
  selector: 'app-top-dankee',
  templateUrl: './top-dankee.component.html',
  styleUrls: ['./top-dankee.component.sass']
})
export class TopDankeeComponent implements OnInit {
  dankLeaders: DankLeaderStats[];
  constructor(
    private dankService: DankerServiceService
  ) { }

  ngOnInit(): void {
    this.dankService.getDankeeLeaders()
      .subscribe((leaders: any) => {
        this.dankLeaders = leaders;
      },
      (err) => {
        console.error(err);
      });
  }

}
