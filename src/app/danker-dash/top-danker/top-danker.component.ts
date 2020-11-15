import { Component, OnInit, Input } from '@angular/core';
import { DankLeaderStats } from '../dank.model';

@Component({
  selector: 'app-top-danker',
  templateUrl: './top-danker.component.html',
  styleUrls: ['./top-danker.component.sass']
})
export class TopDankerComponent implements OnInit {
  @Input() dankLeaders: DankLeaderStats[];
  constructor() { }

  ngOnInit(): void {
  }

}
