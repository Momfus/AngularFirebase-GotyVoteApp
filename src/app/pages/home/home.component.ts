import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private db: AngularFirestore
  ) {}

  ngOnInit(): void {

    this.db.collection('goty').valueChanges()
      .pipe(
        map( (res: any[]) => {
          // res.map(({name, votes}) => ({name, value: votes})) // Same solution with destructartion
          return res.map( game => {
            return {
              name: game.name,
              value: game.votes
            }
          })
        })
      )
      .subscribe( res => {

        console.log(res);


      });

  }

}
