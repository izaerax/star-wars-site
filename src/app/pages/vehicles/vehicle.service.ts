import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Vehicle } from './vehicle.model';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private apiService: ApiService) { }

  list(page = 1) {
    return this.apiService.list('vehicles', page)
      .pipe(
        map((response: any) => {
          const vehicles: Vehicle[] = []
          for (const vehicle of response.results) {
            let parser = vehicle.url.split('/')
            vehicles.push({
              id: parser[parser.length-2],
              name: vehicle.name,
              model: vehicle.model,
              manufacturer: vehicle.manufacturer,
              cost_in_credits: vehicle.cost_in_credits,
              length: vehicle.length,
              max_atmosphering_speed: vehicle.max_atmosphering_speed,
              class: vehicle.vehicle_class,
              cargo_capacity: vehicle.cargo_capacity,
              films: vehicle.films,
              url: vehicle.url,
            })
          }
          return {vehicles: vehicles, totalCount: response.count}
        }), catchError((error: any) => {
          console.error(error)
          return throwError(() => error)
        })
      )
  }

  getById(vehicleId: string) {
    return this.apiService.get('vehicles', vehicleId)
      .pipe(
        map((response: any) => {
            const vehicle = {
              id: vehicleId,
              name: response.name,
              model: response.model,
              manufacturer: response.manufacturer,
              cost_in_credits: response.cost_in_credits,
              length: response.length,
              max_atmosphering_speed: response.max_atmosphering_speed,
              class: response.vehicle_class,
              cargo_capacity: response.cargo_capacity,
              films: response.films,
              url: response.url,
            }
            return vehicle
        }),
        catchError(error => {
          console.error(error)
          return throwError(() => error)
        })
      )
  }
}
