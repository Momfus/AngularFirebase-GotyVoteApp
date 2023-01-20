import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/enviroment';
import { Game } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private games: Game[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getNominated() {

    if( this.games.length > 0 ) {

      // Cache loaded
      return of(this.games)

    } else {

      return this.http.get<Game[]>(`${ environment.url }/api/goty`)
        .pipe(
          tap(
            games => this.games = games
          )
        );

    }


  }
}
