import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: false
})
export class NavbarComponent implements OnInit {

  navbarOpen = false;
  currentLang = 'es';

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    // Sincronizar el idioma actual con el servicio
    this.currentLang = this.translate.currentLang || this.translate.getDefaultLang() || 'es';
    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
    });
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('selectedLanguage', lang);
  }

  toggleLanguage() {
    const newLang = this.currentLang === 'es' ? 'en' : 'es';
    this.changeLanguage(newLang);
  }
}
