import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  pages: number[] = []

  @Input() totalCount: number = 0;
  @Input() pageIndex: number = 1;
  @Input() pageSize: number = 10;

  @Output() page: EventEmitter<number> = new EventEmitter<number>();

  constructor( ) {}

  ngOnInit(): void { }

  navigateTo(index: number) {

    if (index <= this.lastPage && index > 0 && index !== this.pageIndex) {
      this.pageIndex = index
      this.page.emit(this.pageIndex)
    }
  }

  get lastPage(): number {
    return Math.ceil(this.totalCount / this.pageSize)
  }

  get pagination(): number[] {
    const arr = []
    for (let i = 1; i <= this.lastPage; i++)
      arr.push(i)
    return arr
  }

}
