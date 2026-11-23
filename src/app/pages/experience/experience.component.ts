import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class ExperienceComponent implements OnInit {

  alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = false;
  size: number = 40;
  expandEnabled: boolean = true;
  side = 'left';

  constructor() { }

  ngOnInit() {
  }

  onHeaderClick(event: any) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onDotClick(event: any) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onExpandEntry(expanded: any, index: number) {
  }

}
