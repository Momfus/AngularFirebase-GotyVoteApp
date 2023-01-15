import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
    RouterModule
  ]
})
export class ComponentsModule { }
