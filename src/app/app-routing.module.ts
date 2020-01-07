import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogsComponent } from './dogs/dogs.component';
import { CatsComponent } from './cats/cats.component';
import { BirdsComponent } from './birds/birds.component';
import { PeopleComponent } from './people/people.component';
import { KillerwhalesComponent } from './killerwhales/killerwhales.component';
import { GiraffeComponent } from './giraffe/giraffe.component';
import { LionComponent } from './lion/lion.component';
import { SearchComponent } from './search/search.component';



const routes: Routes = [
  { path: 'dogs', component: DogsComponent },
  { path: 'cats', component: CatsComponent },
  { path: 'birds', component: BirdsComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'killerwhales', component: KillerwhalesComponent },
  { path: 'giraffe', component:  GiraffeComponent},
  { path: 'lion', component:  LionComponent},
  { path: 'search', component:  SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
