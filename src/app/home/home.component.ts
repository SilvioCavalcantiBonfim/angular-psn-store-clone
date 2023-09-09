import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ReplaySubject, interval } from 'rxjs';
import { GameProviderService } from '../services/game-provider.service';
import { Game } from '../model/treading.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [
    trigger('myInsertRemoveTrigger', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('1000ms', style({ opacity: 1 })),
    ]),
    transition(':leave', [
      animate('1000ms', style({ opacity: 0 }))
    ])
  ]),]
})
export class HomeComponent {

  caroucel$: ReplaySubject<number> = new ReplaySubject<number>();

  constructor(private gameProviderService: GameProviderService){
    interval(5000).subscribe(this.caroucel$);
  }
  gameList(): Game[] {
    return this.gameProviderService.Games;
  }
  TrendingList(): Game[] {
    return this.gameProviderService.Trending;
  }
}
