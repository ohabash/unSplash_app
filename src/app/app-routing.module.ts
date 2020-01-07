import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogsComponent } from './dogs/dogs.component';
import { CatsComponent } from './cats/cats.component';
import { BirdsComponent } from './birds/birds.component';
import { PeopleComponent } from './people/people.component';
import { KillerwhalesComponent } from './killerwhales/killerwhales.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';

=======
import { OstrichComponent } from './ostrich/ostrich.component';
>>>>>>> 5e96ebbfd8cc5fd6ead2349dbcf75f569acaaf5d


const routes: Routes = [
  { path: 'dogs', component: DogsComponent },
  { path: 'cats', component: CatsComponent },
  { path: 'birds', component: BirdsComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'killerwhales', component: KillerwhalesComponent },
<<<<<<< HEAD
  { path: '', component: HomeComponent },
=======
  { path: 'ostrich', component: OstrichComponent },
>>>>>>> 5e96ebbfd8cc5fd6ead2349dbcf75f569acaaf5d
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
