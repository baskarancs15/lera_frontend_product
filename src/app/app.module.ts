import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { FeaturePageComponent } from './feature-page/feature-page.component';
import { DocumentComponent } from './document/document.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    SidemenuComponent,
    FeaturePageComponent,
    DocumentComponent,
    NavbarMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    SidemenuComponent,
    NavbarMenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
