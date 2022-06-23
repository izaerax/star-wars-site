import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from 'src/app/shared/api.service';
import { Planet } from './planet.model';

//https://angular.io/guide/http

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private apiService: ApiService) { }

  getByUrl(url: string) {
    return this.apiService.getUrl(url)
      .pipe(
        map((response: any) => {
          const parser = response.url.split('/')
          return {
            id: parser[parser.length-2],
            name: response.name,
            rotation_period: response.rotation_period,
            orbital_period: response.orbital_period,
            diameter: response.diameter,
            climate: response.climate,
            gravity: response.gravity,
            population: response.population,
            terrain: response.terrain,
            url: response.url,
          } as Planet
        })
      )
  }
}
