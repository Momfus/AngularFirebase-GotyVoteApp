import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  games: Game[] = [];

  constructor(
    private gamerService: GameService
  ){}

  ngOnInit(): void {


    this.gamerService.getNominated()
      .subscribe( gotyGames => {

        console.log(gotyGames);
        this.games = gotyGames;

      });

  }

  voteGame( game: Game) {

    this.gamerService.voteGame( game.id ).subscribe( (res: any) => {

      if( res.ok ) {
        Swal.fire('Vote Done!', res.msg, 'success');
      } else {
        Swal.fire('Oops!', res.msg, 'error')
      }


    });

  }
}
