import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../characters/character.model';
import { CharacterService } from '../../characters/character.service';
import { Film } from '../film.model';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {

  film!: Film
  characters: Character[] = []
  error: string = ''

  constructor(
    private filmService: FilmService,
    private characterService: CharacterService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const filmId = this.route.snapshot.paramMap.get('id') as string;
    this.filmService.getById(filmId).subscribe({
      next: (film:any) => {
        this.film = film
        this.characters = this.characterService.listByUrls(film.characters)
      },
      error: (error) => {
        this.error = error.message
        console.log(error)
      }
    })
  }

}
