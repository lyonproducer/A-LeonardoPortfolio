import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { VerticalTimelineModule } from 'angular-vertical-timeline';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Route, RouterModule } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CoverProfileComponent } from './components/cover-profile/cover-profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HttpClientModule } from '@angular/common/http';


import { FormsModule } from '@angular/forms';

const routes: Route[] = [

  {path: '', redirectTo: '/about-me', pathMatch: 'full'},

  {path: 'about-me', component: AboutMeComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'experience', component: ExperienceComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutMeComponent,
    CoverProfileComponent,
    FooterComponent,
    SkillsComponent,
    ContactComponent,
    ExperienceComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MglTimelineModule,
    VerticalTimelineModule,
    HttpClientModule,
    MglTimelineModule, 
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
