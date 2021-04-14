import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthoritationComponent } from './authoritation/authoritation.component';
import { HomeComponent } from './home/home.component';
 
import { WelcomeComponent } from './welcome/welcome.component';
import { HotelComponent } from './hotel/hotel.component';
import { SingleHotelComponent } from './hotel/single-hotel/single-hotel.component';
import { CalendarComponent } from './calendar/calendar.component';

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
  {
    path: 'hotel',
    component: HotelComponent
  },
  {
    path: 'details/:id',
    component: SingleHotelComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  }

   
  
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
