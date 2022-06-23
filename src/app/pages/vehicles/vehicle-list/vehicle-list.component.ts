import { Component, HostListener, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle.model';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

  vehicleList: Vehicle[] = []
  isFetching: boolean = false
  totalCount: number = 0
  error: string = ''
  getScreenWidth: number = 0

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.fetchVehicles()
    this.getScreenWidth = window.innerWidth;
  }

  fetchVehicles(page=1) {
    this.isFetching = true;
    this.vehicleService.list(page).subscribe({
      next: (result: {vehicles: Vehicle[], totalCount: number}) => {
        this.vehicleList = result.vehicles
        this.totalCount = result.totalCount
        this.isFetching = false
      },
      error: (error: any) => {
        this.error = error.message
        this.isFetching = false
        console.error('fetchVehicles', error)
      }
    })
  }

  //https://www.positronx.io/angular-detect-width-and-height-of-screen-tutorial/
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }
}
