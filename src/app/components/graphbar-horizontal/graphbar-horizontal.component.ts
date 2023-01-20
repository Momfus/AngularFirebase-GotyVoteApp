import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-graphbar-horizontal',
  templateUrl: './graphbar-horizontal.component.html',
  styleUrls: ['./graphbar-horizontal.component.css']
})
export class GraphbarHorizontalComponent {

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


  constructor() {


  }


  onSelect(event: Event) {
    console.log(event);
  }

}
