import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogsComponent } from './dogs/dogs.component';
import { CatsComponent } from './cats/cats.component';
import { BirdsComponent } from './birds/birds.component';
import { PeopleComponent } from './people/people.component';
import { KillerwhalesComponent } from './killerwhales/killerwhales.component';


const routes: Routes = [
  { path: 'dogs', component: DogsComponent },
  { path: 'cats', component: CatsComponent },
  { path: 'birds', component: BirdsComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'killerwhales', component: KillerwhalesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
