import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-graphbar-horizontal',
  templateUrl: './graphbar-horizontal.component.html',
  styleUrls: ['./graphbar-horizontal.component.css']
})
export class GraphbarHorizontalComponent {

  @Input() results: any[] = [];

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
