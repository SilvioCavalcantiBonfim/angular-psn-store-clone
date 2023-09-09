import { Component, Input } from '@angular/core';
import { Game } from '../model/treading.type';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html'
})
export class MiniCardComponent {
  @Input()
  game!: Game;
  isFree():boolean {
    return typeof this.game.value === 'number';
  }
}
