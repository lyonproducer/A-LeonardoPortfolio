import { Component, OnInit } from '@angular/core';
// import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  standalone: false
})
export class ExperienceComponent implements OnInit {

  selected0: boolean = false;
  alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = false;
  size: number = 40;
  expandEnabled: boolean = true;
  side = 'left';

  constructor(
    // public worksService : ExperienceService
  ) { }

  ngOnInit() {
  }


  // selected0: boolean = false;
  // alternate: boolean = true;
  // toggle: boolean = true;
  // color: boolean = false;
  // size: number = 40;
  // expandEnabled: boolean = true;
  // side = 'left';

  // entries = [
  //   {
  //     header: 'header',
  //     content: 'content'
  //   }
  // ]

  // addEntry() {
  //   this.entries.push({
  //     header: 'header',
  //     content: 'content'
  //   })
  // }

  // removeEntry() {
  //   this.entries.pop();
  // }

  onHeaderClick(event: any) {
    console.log('hola');
    this.selected0 = !this.selected0;
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
    console.log(`Expand status of entry changed to ${expanded}, index: ${index}`);
  }

  toggleSide() {
    this.side = this.side === 'left' ? 'right' : 'left';
  }

}
