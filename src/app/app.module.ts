import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Route, RouterModule } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CoverProfileComponent } from './components/cover-profile/cover-profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Route[] = [

  {path: '', redirectTo: '/about-me', pathMatch: 'full'},

  {path: 'about-me', component: AboutMeComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'contact', component: ContactComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutMeComponent,
    CoverProfileComponent,
    FooterComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
