import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Planet } from '../../planets/planet.model';
import { PlanetService } from '../../planets/planet.service';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  character!: Character;
  isFetching: boolean = false;

  constructor(
    private characterService: CharacterService,
    private planetService: PlanetService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isFetching = true
    const characterId = this.route.snapshot.paramMap.get('id');
    if (!characterId) this.router.navigate([''])
    else this.characterService.getById(characterId)
      .subscribe((character: Character) => {
        this.planetService.getByUrl(character.homeworld)
          .subscribe((planet: Planet) => {
            character.homeworld = planet.name
            this.character = character
            this.isFetching = false
        })
      })
  }

}
