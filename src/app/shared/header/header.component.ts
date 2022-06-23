import { Component, OnInit} from '@angular/core';
import { MenuItem, MenuService } from './menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuList: MenuItem[] = [];

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.menuList = this.menuService.getMenu()
  }

}
