import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        SharedModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        provideTranslateService({ fallbackLang: 'en' })
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'A-LeonardoPortfolio'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('A-LeonardoPortfolio');
  });

  it('should render the name', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Leonardo Hernández');
  });
});
