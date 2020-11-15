import { Component, OnInit, Input } from '@angular/core';
import { Dank } from '../dank.model';

@Component({
  selector: 'app-danker-recents',
  templateUrl: './danker-recents.component.html',
  styleUrls: ['./danker-recents.component.sass']
})
export class DankerRecentsComponent implements OnInit {
  @Input() dank: Dank;
  constructor() { }

  ngOnInit(): void {
  }

}
