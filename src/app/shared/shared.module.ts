import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { CoverProfileComponent } from './components/cover-profile/cover-profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CoverProfileComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [ CommonModule, RouterModule, TranslatePipe ],
  exports: [
    CoverProfileComponent,
    NavbarComponent,
    FooterComponent,
    TranslatePipe
  ],
  providers: [],
})
export class SharedModule {}
