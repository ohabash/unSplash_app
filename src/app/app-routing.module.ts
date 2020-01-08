import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogsComponent } from './dogs/dogs.component';
import { CatsComponent } from './cats/cats.component';
import { BirdsComponent } from './birds/birds.component';
import { PeopleComponent } from './people/people.component';
import { KillerwhalesComponent } from './killerwhales/killerwhales.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { OstrichComponent } from './ostrich/ostrich.component';

=======
import { GiraffeComponent } from './giraffe/giraffe.component';
import { LionComponent } from './lion/lion.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { FishComponent } from './fish/fish.component';
import { OstrichComponent } from './ostrich/ostrich.component';
import { AboutComponent } from './about/about.component';
>>>>>>> 398ecad5fc6611cdd434f5d498251edaa33e4e1a

const routes: Routes = [
  { path: 'dogs', component: DogsComponent },
  { path: 'cats', component: CatsComponent },
  { path: 'birds', component: BirdsComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'killerwhales', component: KillerwhalesComponent },
<<<<<<< HEAD
  { path: '', component: HomeComponent },
  { path: 'ostrich', component: OstrichComponent },
=======
  { path: 'giraffe', component:  GiraffeComponent},
  { path: 'lion', component:  LionComponent},
  { path: 'search', component:  SearchComponent},
  { path: '', component: HomeComponent },
  { path: 'ostrich', component: OstrichComponent },
  { path: 'fish', component: FishComponent },
  { path: 'about', component: AboutComponent },
>>>>>>> 398ecad5fc6611cdd434f5d498251edaa33e4e1a
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
