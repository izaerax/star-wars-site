import { Component, OnInit} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { MenuItem, MenuService } from './menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuList: MenuItem[] = [];
  activeUrl: string = ''

  constructor(
    private menuService: MenuService,
    private router: Router
  ) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
          this.activeUrl = event.url;
          console.log(event);
      }
    });

  }

  ngOnInit(): void {
    this.menuList = this.menuService.getMenu()
  }

}
