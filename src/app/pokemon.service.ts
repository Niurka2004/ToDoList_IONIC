import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrL ="https://pokeapi.co/api/v2"

  constructor(
    private http: HttpClient
  ) { }



  getpokemonlist(): Observable<any> {
      return this.http.get<any>(this.apiUrL + 'pokemon ');

  }
}
