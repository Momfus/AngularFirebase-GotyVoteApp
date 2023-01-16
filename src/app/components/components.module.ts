import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './navbar/navbar.component';
import { GraphbarHorizontalComponent } from './graphbar-horizontal/graphbar-horizontal.component';


@NgModule({
  declarations: [
    NavbarComponent,
    GraphbarHorizontalComponent
  ],
  exports: [
    NavbarComponent,
    GraphbarHorizontalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ]
})
export class ComponentsModule { }
