import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-graphbar-horizontal',
  templateUrl: './graphbar-horizontal.component.html',
  styleUrls: ['./graphbar-horizontal.component.css']
})
export class GraphbarHorizontalComponent implements OnDestroy{

  results: any[] = [
    {
      "name": "Game 1",
      "value": 20
    },
    {
      "name": "Game 2",
      "value": 15
    },
    {
      "name": "Game 3",
      "value": 12
    },
    {
      "name": "Game 4",
      "value": 22
    }
  ];


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Games';
  showYAxisLabel = true;
  yAxisLabel = 'Votes';
  colorScheme = 'nightLights';

  interval? :  NodeJS.Timer;

  constructor() {

    this.interval = setInterval( () => {

      console.log('tick');

      const newResults = [...this.results];


      for( let i in newResults ) {
        newResults[i].value = Math.round( Math.random() * 500);
      }

      this.results = [...newResults];

    }, 1500);

  }

  ngOnDestroy(): void {

    clearInterval(this.interval);

  }

  onSelect(event: Event) {
    console.log(event);
  }

}
