import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthoritationComponent } from './authoritation/authoritation.component';
import { HomeComponent } from './home/home.component';
 
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "welcome",
    pathMatch : 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'authoritation',
    component: AuthoritationComponent
  },
   
  
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
