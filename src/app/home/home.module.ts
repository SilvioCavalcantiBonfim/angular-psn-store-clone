import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardComponent } from '../card/card.component';
import { MiniCardComponent } from '../mini-card/mini-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    MiniCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
