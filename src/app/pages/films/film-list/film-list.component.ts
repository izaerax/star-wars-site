import { Component, HostListener, OnInit } from '@angular/core';
import { Film } from '../film.model'
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {

  filmList: Film[] = []
  isFetching: boolean = false
  totalCount: number = 0
  error: string = ''
  getScreenWidth!: number

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.fetchFilms()
  }

  fetchFilms(page=1): void {
    this.isFetching = true;
    this.filmService.list(page).subscribe({
      next: (result: {films: Film[], totalCount: number}) => {
        this.filmList = result.films
        this.totalCount = result.totalCount
        this.isFetching = false
      },
      error: (error) => {
        this.error = error.message
        this.isFetching = false
        console.log(error)
      }
    })
  }

  //https://www.positronx.io/angular-detect-width-and-height-of-screen-tutorial/
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }
}
