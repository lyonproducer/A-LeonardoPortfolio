import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selected: boolean = false;
  alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = false;
  size: number = 40;
  expandEnabled: boolean = true;
  side = 'left';

  entries = [
    {
      header: 'header',
      content: 'content'
    }
  ]

  addEntry() {
    this.entries.push({
      header: 'header',
      content: 'content'
    })
  }

  removeEntry() {
    this.entries.pop();
  }

  onHeaderClick(event) {
    /*
    if (!this.expandEnabled) {
      event.stopPropagation();
      
    }
    */
  }

  onDotClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onExpandEntry(expanded) {
    console.log(`Expand status of entry changed to  is selected ${this.selected}`)
    this.selected=!this.selected;
  }

  toggleSide() {
    this.side = this.side === 'left' ? 'right' : 'left';
  }

}
