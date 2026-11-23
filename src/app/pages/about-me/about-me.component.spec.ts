import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService, TranslatePipe } from '@ngx-translate/core';

import { AboutMeComponent } from './about-me.component';
import { CoverProfileComponent } from '../../shared/components/cover-profile/cover-profile.component';

describe('AboutMeComponent', () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TranslatePipe ],
      declarations: [ AboutMeComponent, CoverProfileComponent ],
      providers: [ provideTranslateService({ fallbackLang: 'en' }) ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
