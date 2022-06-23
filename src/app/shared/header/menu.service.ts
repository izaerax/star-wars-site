import { Injectable } from '@angular/core';

export interface MenuItem {
  title: string,
  path: string
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menu: MenuItem[] = [
    {
      title: 'Films',
      path: '/films'
    },
    // {
    //   title: 'Characters',
    //   path: '/characters'
    // },
    // {
    //   title: 'Species',
    //   path: '/species'
    // },
    // {
    //   title: 'Planets',
    //   path: '/planets'
    // },
    // {
    //   title: 'Starships',
    //   path: '/starships'
    // },
    {
      title: 'Vehicles',
      path: '/vehicles'
    },
  ]

  /**
   * @returns the menu items
   */
  getMenu(): MenuItem[] {
    return this.menu
  }
}
