import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cover-profile',
  templateUrl: './cover-profile.component.html',
  styleUrls: ['./cover-profile.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class CoverProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
