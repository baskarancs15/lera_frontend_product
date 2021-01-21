import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { FeaturePageComponent } from './feature-page/feature-page.component';
import { DocumentComponent } from './document/document.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'sidemenu', component: SidemenuComponent },
  { path: 'features', component: FeaturePageComponent },
  { path: 'documentation', component: DocumentComponent },
  { path: 'navbar', component: NavbarMenuComponent },
  { path: 'technology', component: FeaturePageComponent },
  { path: 'tools', component: FeaturePageComponent },
  { path: 'viewDetail', component: ViewDetailComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
