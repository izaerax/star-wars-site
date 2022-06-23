import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './pages/characters/character-detail/character-detail.component';
import { FilmDetailComponent } from './pages/films/film-detail/film-detail.component';
import { FilmListComponent } from './pages/films/film-list/film-list.component';
import { VehicleDetailComponent } from './pages/vehicles/vehicle-detail/vehicle-detail.component';
import { VehicleListComponent } from './pages/vehicles/vehicle-list/vehicle-list.component';

const routes: Routes = [
  { path: 'films', component: FilmListComponent },
  { path: 'films/:id', component: FilmDetailComponent },
  { path: 'characters/:id', component: CharacterDetailComponent },
  { path: 'vehicles', component: VehicleListComponent},
  { path: 'vehicles/:id', component: VehicleDetailComponent},
  { path: '',   redirectTo: '/films', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
