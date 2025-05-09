import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverProfileComponent } from './components/cover-profile/cover-profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    CoverProfileComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [ CommonModule ],
  exports: [
    CoverProfileComponent,
    NavbarComponent,
    FooterComponent
  ],
  providers: [],
})
export class SharedModule {}
