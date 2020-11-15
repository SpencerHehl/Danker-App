import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Form } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/user.model';
import { Dank, DankLeaderStats } from '../dank.model';
import * as moment from 'moment';
import { DankerServiceService } from '../danker-service.service';

declare var $: any;

@Component({
  selector: 'app-dash-main',
  templateUrl: './dash-main.component.html',
  styleUrls: ['./dash-main.component.sass']
})
export class DashMainComponent implements OnInit {
  @ViewChild('giveDankForm', {static: false}) giveDankFormValues;
  recentDanks: Dank[];
  topDankers: DankLeaderStats[];
  topDankees: DankLeaderStats[];
  searchResults: User[];
  dankee: User;
  giveDankForm: FormGroup;

  constructor(
    private auth: AuthService,
    private dankerService: DankerServiceService
  ) { }

  ngOnInit(): void {
    this.giveDankForm = new FormGroup({
      dankText: new FormControl(),
    });
    this.recentDanks = [
      {
        danker: {
          email: 'simon.franks@maltego.com',
          displayName: 'Simon Franks',
          userId: 'simon.franks@maltego.com'
        },
        dankee: {
          email: 'elise.weber@maltego.com',
          displayName: 'Elise Weber',
          userId: 'elise.weber@maltego.com'
        },
        dankText: `
          Hey Elise, I really appreciated the effort you made to help me identify the problem I faced.
           I had been struggling to get to the bottom of it. Even though it wasn't something you needed to worry about, your insights saved me hours. Thanks!`,
        dateTime: '11/12/20'
      },
      {
        danker: {
          email: 'simon.franks@maltego.com',
          displayName: 'Simon Franks',
          userId: 'simon.franks@maltego.com'
        },
        dankee: {
          email: 'elise.weber@maltego.com',
          displayName: 'Elise Weber',
          userId: 'elise.weber@maltego.com'
        },
        dankText: `
          Hey Elise, I really appreciated the effort you made to help me identify the problem I faced.
           I had been struggling to get to the bottom of it. Even though it wasn't something you needed to worry about, your insights saved me hours. Thanks!`,
        dateTime: '11/12/20'
      },
      {
        danker: {
          email: 'simon.franks@maltego.com',
          displayName: 'Simon Franks',
          userId: 'simon.franks@maltego.com'
        },
        dankee: {
          email: 'elise.weber@maltego.com',
          displayName: 'Elise Weber',
          userId: 'elise.weber@maltego.com'
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

  displayResults(users) {
    this.searchResults = users;
    console.log(users);
    $('#searchResultsModal').modal('show');
  }

  displayDankForm(user) {
    this.dankee = user;
  }

  submitDank() {
    const formValue = this.giveDankForm.value;
    const newDank = new Dank();
    newDank.dankText = formValue.dankText;
    newDank.dankee = this.dankee;
    newDank.danker = this.auth.user;
    newDank.dateTime = moment.utc().format();
    this.dankerService.submitDank(newDank);
  }
}
