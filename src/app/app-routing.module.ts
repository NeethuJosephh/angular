import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtformPageComponent } from './pages/artform-page/artform-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SinglePageComponent } from './pages/single-page/single-page.component';

const routes: Routes = [
  {
    path:'',component:HomePageComponent
  },
  {
    path:'contact',component:ContactPageComponent
  },
  {
    path:'signup',component:SignupPageComponent
  },
  {
    path:'signin',component:SigninPageComponent
  },
  {
    path:'artform',component:ArtformPageComponent
  },
  {
    path:'single',component:SinglePageComponent
  },
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
