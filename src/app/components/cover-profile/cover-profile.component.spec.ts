import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverProfileComponent } from './cover-profile.component';

describe('CoverProfileComponent', () => {
  let component: CoverProfileComponent;
  let fixture: ComponentFixture<CoverProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
