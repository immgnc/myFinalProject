import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AuthoritationComponent } from './authoritation/authoritation.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserNameDirective } from './Validators/user-name.directive';
import { WelcomeComponent } from './welcome/welcome.component';
import { HotelComponent } from './hotel/hotel.component';
import { SingleHotelComponent } from './hotel/single-hotel/single-hotel.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { CalendarComponent } from './calendar/calendar.component';
 
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    HomeComponent,
    AuthoritationComponent,
    UserNameDirective,
    WelcomeComponent,
    HotelComponent,
    SingleHotelComponent,
    CalendarComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


 