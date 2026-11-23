import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
