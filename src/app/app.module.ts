import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {IvyCarouselModule} from 'angular-responsive-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { FeaturePageComponent } from './feature-page/feature-page.component';
import { DocumentComponent } from './document/document.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutPageComponent,
    SidemenuComponent,
    FeaturePageComponent,
    DocumentComponent,
    NavbarMenuComponent,
    ViewDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    IvyCarouselModule
    
  ],
  exports: [
    SidemenuComponent,
    NavbarMenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
