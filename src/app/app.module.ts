import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    SidemenuComponent,
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
