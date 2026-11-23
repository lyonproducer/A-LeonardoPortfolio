import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService, TranslatePipe } from '@ngx-translate/core';

import { CoverProfileComponent } from './cover-profile.component';

describe('CoverProfileComponent', () => {
  let component: CoverProfileComponent;
  let fixture: ComponentFixture<CoverProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TranslatePipe ],
      declarations: [ CoverProfileComponent ],
      providers: [ provideTranslateService({ fallbackLang: 'en' }) ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
