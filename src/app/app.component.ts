import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'A-LeonardoPortfolio';

  constructor(private translate: TranslateService) {
    // Establecer idiomas disponibles
    translate.addLangs(['es', 'en']);

    // Recuperar idioma guardado o usar el idioma del navegador
    const savedLang = localStorage.getItem('selectedLanguage');
    const browserLang = translate.getBrowserLang();

    if (savedLang) {
      translate.use(savedLang);
    } else if (browserLang && browserLang.match(/es|en/)) {
      translate.use(browserLang);
    } else {
      translate.use('es');
    }
  }
}
