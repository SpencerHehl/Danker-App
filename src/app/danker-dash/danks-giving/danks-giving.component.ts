import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Form } from '@angular/forms';
import { MicrosoftGraphService } from '../microsoft-graph.service';
import {Providers, MsalProvider} from '@microsoft/mgt';
import { AuthService } from '../../auth.service';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-danks-giving',
  templateUrl: './danks-giving.component.html',
  styleUrls: ['./danks-giving.component.sass']
})
export class DanksGivingComponent implements OnInit {
  @ViewChild('searchUserForm', {static: false}) searchUserFormValues;
  @Output() searched = new EventEmitter<User[]>();
  searchUserForm: FormGroup;
  searchResults: User[];

  constructor(
    private graphService: MicrosoftGraphService,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    Providers.globalProvider = new MsalProvider({
      clientId: 'b28f8cf4-1ad5-4103-a374-9dd4326ac459'
    });
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
        this.searched.emit(users);
      });
  }

  onSearchInputChanges(): void {
    this.searchUserForm.get('userInput').valueChanges.subscribe(val => {
      this.graphService.searchCoworkers(val)
      .then((users) => {
        this.searchResults = users;
      });
    });
  }
}
