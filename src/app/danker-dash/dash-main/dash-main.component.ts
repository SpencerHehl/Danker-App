import { Component, OnInit } from '@angular/core';
import { Dank, DankLeaderStats } from '../dank.model';

@Component({
  selector: 'app-dash-main',
  templateUrl: './dash-main.component.html',
  styleUrls: ['./dash-main.component.sass']
})
export class DashMainComponent implements OnInit {
  recentDanks: Dank[];
  topDankers: DankLeaderStats[];
  topDankees: DankLeaderStats[];

  constructor() { }

  ngOnInit(): void {
    this.recentDanks = [
      {
        danker: {
          dankerEmail: 'simon.franks@maltego.com',
          dankerName: 'Simon Franks',
          dankerId: 'simon.franks@maltego.com'
        },
        dankee: {
          dankeeEmail: 'elise.weber@maltego.com',
          dankeeName: 'Elise Weber',
          dankeeId: 'elise.weber@maltego.com'
        },
        dankText: `
          Hey Elise, I really appreciated the effort you made to help me identify the problem I faced.
           I had been struggling to get to the bottom of it. Even though it wasn't something you needed to worry about, your insights saved me hours. Thanks!`,
        dateTime: '11/12/20'
      },
      {
        danker: {
          dankerEmail: 'simon.franks@maltego.com',
          dankerName: 'Simon Franks',
          dankerId: 'simon.franks@maltego.com'
        },
        dankee: {
          dankeeEmail: 'elise.weber@maltego.com',
          dankeeName: 'Elise Weber',
          dankeeId: 'elise.weber@maltego.com'
        },
        dankText: `
          Hey Elise, I really appreciated the effort you made to help me identify the problem I faced.
           I had been struggling to get to the bottom of it. Even though it wasn't something you needed to worry about, your insights saved me hours. Thanks!`,
        dateTime: '11/12/20'
      },
      {
        danker: {
          dankerEmail: 'simon.franks@maltego.com',
          dankerName: 'Simon Franks',
          dankerId: 'simon.franks@maltego.com'
        },
        dankee: {
          dankeeEmail: 'elise.weber@maltego.com',
          dankeeName: 'Elise Weber',
          dankeeId: 'elise.weber@maltego.com'
        },
        dankText: `
          Hey Elise, I really appreciated the effort you made to help me identify the problem I faced.
           I had been struggling to get to the bottom of it. Even though it wasn't something you needed to worry about, your insights saved me hours. Thanks!`,
        dateTime: '11/12/20'
      }
    ];
    this.topDankees = [
      {
        leaderName: 'Simon Franks',
        leaderStatValue: 27
      },
      {
        leaderName: 'Elise Weber',
        leaderStatValue: 19,
      },
      {
        leaderName: 'Donna McHenry',
        leaderStatValue: 10,
      },
      {
        leaderName: 'Don Pearlman',
        leaderStatValue: 4
      }
    ];
    this.topDankers = [
      {
        leaderName: 'Donna McHenry',
        leaderStatValue: 35
      },
      {
        leaderName: 'Elise Weber',
        leaderStatValue: 28,
      },
      {
        leaderName: 'Simon Franks',
        leaderStatValue: 13,
      },
      {
        leaderName: 'Don Pearlman',
        leaderStatValue: 10
      }
    ];
  }

}
