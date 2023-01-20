import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  games: any[] = [];

  constructor(
    private db: AngularFirestore
  ) {}

  ngOnInit(): void {

    this.db.collection('goty').valueChanges()
      .pipe(
        map( (res: any[]) => { // TODO: Check why if I set the type Game[] it doesnt works
          // res.map(({name, votes}) => ({name, value: votes})) // Same solution with destructartion
          return res.map( game => {
            return {
              name: game.name,
              value: game.votes
            }
          })
        })
      )
      .subscribe( res => this.games = res );

  }

}
