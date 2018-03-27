import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'; 
import { AngularFireModule } from 'angularfire2'; 
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { FirebaseService } from './services/firebase.service'; 
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './components/cars/cars.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarComponent } from './components/car/car.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { EditCarComponent } from './components/edit-car/edit-car.component';

const appRoutes: Routes = [ 
  {path: '', component:HomeComponent}, 
  {path: 'cars', component:CarsComponent},
  {path: 'add-car', component:AddCarComponent},
/*  {path: 'cars', component:CarsComponent},
  {path: 'cars', component:CarsComponent},
  {path: 'cars', component:CarsComponent},
  {path: 'cars', component:CarsComponent},
*/
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarsComponent,
    NavbarComponent,
    CarComponent,
    AddCarComponent,
    EditCarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    HttpModule
  ],
  providers: [FirebaseService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
