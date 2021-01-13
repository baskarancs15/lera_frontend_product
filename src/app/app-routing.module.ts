import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { FeaturePageComponent } from './feature-page/feature-page.component';
import { DocumentComponent } from './document/document.component';

const routes: Routes = [
  { path: 'about', component: AboutPageComponent },
  { path: 'sidemenu', component: SidemenuComponent },
  { path: 'feature', component: FeaturePageComponent },
  { path: 'document', component: DocumentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
