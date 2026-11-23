import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideTranslateService, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { firstValueFrom } from 'rxjs';

import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { CoverProfileComponent } from './shared/components/cover-profile/cover-profile.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SharedModule } from './shared/shared.module';

async function render<T>(type: new (...args: any[]) => T, imports: any[] = []): Promise<ComponentFixture<T>> {
  TestBed.resetTestingModule();
  await TestBed.configureTestingModule({
    imports: [ TranslatePipe, ...imports ],
    declarations: [ type ],
    providers: [
      provideNoopAnimations(),
      provideHttpClient(),
      provideTranslateService({
        fallbackLang: 'en',
        loader: provideTranslateHttpLoader({ prefix: 'assets/i18n/', suffix: '.json' })
      })
    ]
  }).compileComponents();

  await firstValueFrom(TestBed.inject(TranslateService).use('en'));

  const fixture = TestBed.createComponent(type);
  fixture.detectChanges();
  return fixture;
}

function text(fixture: ComponentFixture<unknown>): string {
  return (fixture.nativeElement as HTMLElement).textContent || '';
}

describe('CV content', () => {
  it('shows the CV cover information and links the bundled CV', async () => {
    const fixture = await render(CoverProfileComponent);
    const content = text(fixture);
    const html = (fixture.nativeElement as HTMLElement).innerHTML;

    expect(content).toContain('Location');
    expect(content).toContain('Venezuela');
    expect(content).toContain('August 1997');
    expect(content).toContain('Spanish, English');
    expect(html).toContain('assets/cv/Leonardo-Hernandez-CV-EN-premium.pdf');
  });

  it('shows the CV profile and the Fyr Lois certification', async () => {
    const content = text(await render(AboutMeComponent, [ SharedModule ]));

    expect(content).toContain('over 8 years of international experience');
    expect(content).toContain('Fyr Lois');
    expect(content).toContain('A1, A2, B1, B1+, B2, C1');
    expect(content).toContain('2021 - 2023');
    expect(content).toContain('Bachelor in Software Engineering');
  });

  it('shows the current 789.mx role before the older roles', async () => {
    const content = text(await render(ExperienceComponent, [ MglTimelineModule ]));
    const roles = [
      'Mobile Engineer - 789.mx',
      'Full-Stack Engineer (focus on AI App Development) - GREYDATA CONSULTING',
      'Frontend Engineer - Helgen Technologies',
      'Full-Stack Web3 Engineer - Blockchain Foundry',
      'Mobile Engineer - 789.mx (2020 - 2022)'
    ];

    const positions = roles.map(role => content.indexOf(role));
    positions.forEach(position => expect(position).toBeGreaterThanOrEqual(0));
    expect(positions).toEqual([...positions].sort((a, b) => a - b));
    expect(content).toContain('Apr 2025 - Present');
    expect(content).toContain('Datar, Fixingo');
  });

  it('shows the CV skill categories and newest stack entries', async () => {
    const content = text(await render(SkillsComponent));

    expect(content).toContain('AI Agents');
    expect(content).toContain('DevOps');
    expect(content).toContain('CURSOR');
    expect(content).toContain('CLAUDE CODE');
    expect(content).toContain('CLOUDFLARE WORKERS');
  });

  it('shows the CV email and GitHub link', async () => {
    const fixture = await render(FooterComponent);
    const html = (fixture.nativeElement as HTMLElement).innerHTML;

    expect(text(fixture)).toContain('hernandezleonardo085@gmail.com');
    expect(html).toContain('https://github.com/lyonproducer');
  });
});
