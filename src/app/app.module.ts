import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';
import { CatsComponent } from './cats/cats.component';
import { BirdsComponent } from './birds/birds.component';
import { PeopleComponent } from './people/people.component';
import { KillerwhalesComponent } from './killerwhales/killerwhales.component';
import { UnsplashService } from './unsplash.service';
import { ImgGridComponent } from './img-grid/img-grid.component';
import { GiraffeComponent } from './giraffe/giraffe.component';
import { LionComponent } from './lion/lion.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { OstrichComponent } from './ostrich/ostrich.component';
import { FishComponent } from './fish/fish.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    CatsComponent,
    BirdsComponent,
    PeopleComponent,
    KillerwhalesComponent,
    ImgGridComponent,
    GiraffeComponent,
    LionComponent,
    SearchComponent,
    HomeComponent,
    OstrichComponent,
    FishComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UnsplashService],
  bootstrap: [AppComponent]
})
export class AppModule { }
