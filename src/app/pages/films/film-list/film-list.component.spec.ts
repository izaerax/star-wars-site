import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginatorComponent } from 'src/app/shared/paginator/paginator.component';
import { FilmService } from '../film.service';
import { FilmListComponent } from './film-list.component';

describe('FilmListComponent', () => {
  let component: FilmListComponent;
  let fixture: ComponentFixture<FilmListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmListComponent, PaginatorComponent ],
      providers: [FilmService, HttpClient, HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('desktop: table visible, cards invisible', () => {
    component.getScreenWidth = 481
    let compiled = fixture.debugElement.nativeElement
    fixture.detectChanges();
    expect(compiled.querySelector('table') !== null).toBeTruthy()
    expect(compiled.querySelector('div.list-card') === null).toBeTruthy()
  })

  it('desktop: all films fetched are visible', () => {
    let compiled = fixture.debugElement.nativeElement
    component.ngOnInit()
    expect(component.filmList.length === compiled.querySelectorAll('td').length).toBeTruthy()
  })

  it('mobile: table invisible, cards visible', () => {
    component.getScreenWidth = 479
    let compiled = fixture.debugElement.nativeElement
    fixture.detectChanges();
    expect(compiled.querySelector('table') === null).toBeTruthy()
    expect(compiled.querySelector('div.list-card') !== null).toBeTruthy()
  })

  it('mobile: all films fetched are visible', () => {
    component.getScreenWidth = 479
    let compiled = fixture.debugElement.nativeElement
    // component.ngOnInit()
    expect(component.filmList.length === compiled.querySelectorAll('li > div').length).toBeTruthy()
  })

  it('in case of error an alert message is shown', () => {
    component.error = 'test'
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('.alert') !== null &&
      compiled.querySelector('.alert').innerText === component.error).toBeTruthy()
  });

});
