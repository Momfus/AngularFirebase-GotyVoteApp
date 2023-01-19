import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/enviroment';
import { Game } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    private http: HttpClient
  ) { }

  getNominated() {

    return this.http.get<Game[]>(`${ environment.url }/api/goty`);

  }
}
