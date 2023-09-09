import { Component, Input } from '@angular/core';
import { Game } from '../model/treading.type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input()
  game!: Game;

  isFree():boolean {
    return typeof this.game.value === 'number';
  }
}
