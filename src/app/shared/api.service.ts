import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//https://angular.io/guide/http

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://swapi.dev/api'

  constructor(private http: HttpClient) { }

  /**
   *
   * @param model name of the model to be loaded (es: 'films')
   * @param page the page to be loaded
   * @returns the response as is
   */
  list(model: string, page: number) {
    return this.http.get(`${this.baseUrl}/${model}`, {
      responseType: 'json',
      params: {
        page: page
      }
    })
  }

  /**
   *
   * @param model name of the model to be loaded (es: 'films')
   * @param id id of the record
   * @returns the response as is
   */
  get(model: string, id: string) {
    return this.http.get(`${this.baseUrl}/${model}/${id}`, {
      responseType: 'json',
    })
  }

  /**
   * @param url
   * @returns the response of the given url
   */
  getUrl(url: string) {
    return this.http.get(url, {responseType: 'json'})
  }

}
