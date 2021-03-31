import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthoritationComponent } from './authoritation/authoritation.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'authoritation',
    component: AuthoritationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
