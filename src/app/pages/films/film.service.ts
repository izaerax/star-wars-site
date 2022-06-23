import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Film } from './film.model';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(
    private apiService: ApiService
  ) { }

  list(page: number = 1) {
    return this.apiService.list('films', page)
      .pipe(
        map( (response: any) => {
          const films: Film[] = []
          for (const film of response.results) {
            // parse the id from the url
            const parser = film.url.split('/')

            films.push({
              id: parser[parser.length-2],
              title: film.title,
              opening_crawl: film.opening_crawl,
              director: film.director,
              producer: film.producer,
              release_date: film.release_date,
              url: film.url,
              characters: film.characters
            })
          }

          return { films: films, totalCount: response.count }
        }),
        catchError(error => {
          console.error(error)
          return throwError(() => error)
        })
      )
  }

  getById(filmId: string) {
    return this.apiService.get('films', filmId)
      .pipe(
        map((response: any) => {
            const film = {
              id: filmId,
              title: response.title,
              opening_crawl: response.opening_crawl,
              director: response.director,
              producer: response.producer,
              release_date: response.release_date,
              url: response.url,
              characters: response.characters
            }
            return film
        }),
        catchError(error => {
          console.error(error)
          return throwError(() => error)
        })
      )
  }

  getByUrl(url: string) {
    return this.apiService.getUrl(url)
      .pipe(
        map((response: any) => {
          const parser = response.url.split('/')
          return {
            id: parser[parser.length-2],
            title: response.title,
            opening_crawl: response.opening_crawl,
            director: response.director,
            producer: response.producer,
            release_date: response.release_date,
            url: response.url,
            characters: response.characters
          } as Film
        })
      )
  }

  listByUrls(urls: string[]) {
    const films: Film[] = []
    for(let characterUrl of urls) {
      this.getByUrl(characterUrl).pipe().subscribe(film => films.push(film as Film))
    }
    return films
  }
}
