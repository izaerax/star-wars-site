import { Injectable } from '@angular/core';

export interface MenuItem {
  title: string,
  path: string,
  weight: boolean
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menu = [
    {
      title: 'Films',
      path: '/films',
      weight: true
    },
    {
      title: 'Characters',
      path: '/characters',
      weight: false
    },
    {
      title: 'Species',
      path: '/species',
      weight: false
    },
    {
      title: 'Planets',
      path: '/planets',
      weight: false
    },
    {
      title: 'Starships',
      path: '/starships',
      weight: false
    },
    {
      title: 'Vehicles',
      path: '/vehicles',
      weight: false
    },
  ]

  /**
   * @returns the menu items
   */
  getMenu(): MenuItem[] {
    return this.menu
  }
}
