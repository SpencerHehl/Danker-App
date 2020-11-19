import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { User } from 'src/app/user.model';
import { runInThisContext } from 'vm';
import { Dank } from '../dank.model';
import { DankerServiceService } from '../danker-service.service';
import { MicrosoftGraphService } from '../microsoft-graph.service';

@Component({
  selector: 'app-danker-recents',
  templateUrl: './danker-recents.component.html',
  styleUrls: ['./danker-recents.component.sass']
})
export class DankerRecentsComponent implements OnInit {
  @Input() refreshEvent: EventEmitter<any>;
  danks: Dank[] = [];
  constructor(
    private dankService: DankerServiceService,
    private graphService: MicrosoftGraphService
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
      this.danks = [];
      danks.forEach((dank) => {
        dank.dankee.photo = `assets/images/${dank.dankee.userId}.jpg`;
        this.danks.push(dank);
      });
    },
    (err) => {
      console.error(err);
    });
  }

  private async getProfilePhoto(dank): Promise<Dank> {
    const newDankee: User = dank.dankee;
    const imageData = await this.graphService.getProfilePhoto(newDankee.userId);
    newDankee.photo = `data:image/png;base64, ${btoa(unescape(encodeURIComponent(imageData)))}`;
    console.log(newDankee);
    dank.dankee = newDankee;
    return dank;
  }

}
