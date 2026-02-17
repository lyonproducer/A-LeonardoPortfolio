import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'a-lyon-portfolio';

  constructor(private translate: TranslateService) {
    // Establecer idiomas disponibles
    translate.addLangs(['es', 'en']);

    // Establecer idioma por defecto
    translate.setDefaultLang('es');

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
