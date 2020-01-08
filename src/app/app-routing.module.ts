import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { ImgGridComponent } from './img-grid/img-grid.component';

const routes: Routes = [
  { path: 'people', component: PeopleComponent },
  { path: '', component: HomeComponent },
  { path: 'search', component:  SearchComponent},
  { path: 'about', component: AboutComponent },
  { path: 'search/:query', component: ImgGridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
