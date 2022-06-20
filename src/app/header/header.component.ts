import { Component} from '@angular/core';
import { MenuItem, MenuService } from './menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  menuList: MenuItem[];

  constructor(menuService: MenuService) {
    this.menuList = menuService.getMenu()
  }

}
