import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';

const routes: Routes = [
  { path: 'about', component: AboutPageComponent },
  { path: 'sidemenu', component: SidemenuComponent },
  { path: 'navbar', component: NavbarMenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
