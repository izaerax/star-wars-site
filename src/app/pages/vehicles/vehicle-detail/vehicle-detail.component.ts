import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../../films/film.model';
import { FilmService } from '../../films/film.service';
import { Vehicle } from '../vehicle.model';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent implements OnInit {

  vehicle!: Vehicle;
  films: Film[] = []
  error: string = ''

  constructor(
    private vehicleService: VehicleService,
    private filmService: FilmService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const filmId = this.route.snapshot.paramMap.get('id') as string;
    this.vehicleService.getById(filmId).subscribe({
      next: (vehicle: any) => {
        this.vehicle = vehicle
        this.films = this.filmService.listByUrls(vehicle.films)
      },
      error: (error) => {
        this.error = error.message
        console.log(error)
      }
    })
  }

}
