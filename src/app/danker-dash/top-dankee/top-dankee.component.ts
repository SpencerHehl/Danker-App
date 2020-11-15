import { Component, OnInit, Input } from '@angular/core';
import { DankLeaderStats } from '../dank.model';

@Component({
  selector: 'app-top-dankee',
  templateUrl: './top-dankee.component.html',
  styleUrls: ['./top-dankee.component.sass']
})
export class TopDankeeComponent implements OnInit {
  @Input() dankLeaders: DankLeaderStats[];
  constructor() { }

  ngOnInit(): void {
  }

}
