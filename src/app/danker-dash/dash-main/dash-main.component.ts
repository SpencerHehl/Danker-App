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
