import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from '../../shared/api.service';
import { PlanetService } from '../planets/planet.service';
import { Character } from './character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private apiService: ApiService
  ) {}

  getById(id: string) {
    return this.apiService.get('people', id).pipe(
      map((response: any) => {
        const parser = response.url.split('/')
        return  {
          id: parser[parent.length - 2],
          name: response.name,
          birth_year: response.birth_year,
          homeworld: response.homeworld,
          gender: response.gender,
          height: response.height,
          mass: response.mass,
          hair_color: response.hair_color,
          skin_color: response.skin_color,
          eye_color: response.eye_color,
          films_count: response.films.length,
          url: response.url
        } as Character
      }),
    )
  }

  getByUrl(url: string) {
    return this.apiService.getUrl(url).pipe(
      map((response: any) => {
        const parser = response.url.split('/')
        return {
          id: parser[parser.length - 2],
          name: response.name,
          birth_year: response.birth_year,
          homeworld: response.homeworld,
          gender: response.gender,
          height: response.height,
          mass: response.mass,
          hair_color: response.hair_color,
          skin_color: response.skin_color,
          eye_color: response.eye_color,
          films_count: response.films_count,
          url: response.url
        } as Character
      })
    )
  }

  listByUrls(urls: string[]) {
    const characters: Character[] = []
    for(let characterUrl of urls) {
      this.getByUrl(characterUrl).pipe()
        .subscribe(character => characters.push(character as Character))
    }
    return characters
  }
}
