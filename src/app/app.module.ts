import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Route, RouterModule } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CoverProfileComponent } from './components/cover-profile/cover-profile.component';


const routes: Route[] = [

  {path: '', redirectTo: '/index', pathMatch: 'full'},

  {path: 'index', component: AboutMeComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutMeComponent,
    CoverProfileComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
