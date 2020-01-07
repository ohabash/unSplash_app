import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';
import { CatsComponent } from './cats/cats.component';
import { BirdsComponent } from './birds/birds.component';
import { PeopleComponent } from './people/people.component';
import { KillerwhalesComponent } from './killerwhales/killerwhales.component';
import { UnsplashService } from './unsplash.service';
import { ImgGridComponent } from './img-grid/img-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    CatsComponent,
    BirdsComponent,
    PeopleComponent,
    KillerwhalesComponent,
    ImgGridComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UnsplashService],
  bootstrap: [AppComponent]
})
export class AppModule { }
