import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FilmListComponent } from './pages/films/film-list/film-list.component';
import { FilmDetailComponent } from './pages/films/film-detail/film-detail.component';
import { CharacterDetailComponent } from './pages/characters/character-detail/character-detail.component';
import { PaginatorComponent } from './shared/paginator/paginator.component';
import { VehicleListComponent } from './pages/vehicles/vehicle-list/vehicle-list.component';
import { VehicleDetailComponent } from './pages/vehicles/vehicle-detail/vehicle-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmListComponent,
    FilmDetailComponent,
    CharacterDetailComponent,
    PaginatorComponent,
    VehicleListComponent,
    VehicleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
