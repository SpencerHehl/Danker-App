import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Form } from '@angular/forms';
import { MicrosoftGraphService } from '../microsoft-graph.service';

@Component({
  selector: 'app-danks-giving',
  templateUrl: './danks-giving.component.html',
  styleUrls: ['./danks-giving.component.sass']
})
export class DanksGivingComponent implements OnInit {
  @ViewChild('searchUserForm', {static: false}) searchUserFormValues;
  searchUserForm: FormGroup;

  constructor(
    private graphService: MicrosoftGraphService,
  ) { }

  ngOnInit(): void {
    this.searchUserForm = new FormGroup({
      userInput: new FormControl(),
    });
    this.onSearchInputChanges();
  }

  searchUser() {
    const formValue = this.searchUserForm.value;
    const searchInput = formValue.userInput;
    this.graphService.searchCoworkers(searchInput)
      .then((users) => {
        console.log(users);
      });
  }

  onSearchInputChanges(): void {
    this.searchUserForm.get('userInput').valueChanges.subscribe(val => {
      this.graphService.searchCoworkers(val)
      .then((users) => {
        console.log(users);
      });
    });
  }
}
