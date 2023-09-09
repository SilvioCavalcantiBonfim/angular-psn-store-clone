import { Injectable } from '@angular/core';
import { Game } from '../model/treading.type';

@Injectable({
  providedIn: 'root'
})
export class GameProviderService {
  private game: Game[] = [{
    title: "Fall Guys: Ultimate Knockout", 
    value: "Free", 
    plataform: ["PS4", "PS5"], 
    src: "/assets/mini/mini-1.png"
  },
  {
    title: "Demon's Souls", 
    value: 69.90, 
    plataform: ["PS5", "EDIÇÃO PADRÃO"], 
    src: "/assets/mini/mini-2.jpeg"
  },
  {
    title: "Call of Duty®: Black Ops Cold War", 
    value: 59.90, 
    plataform: ["PS4", "PS5", "PACOTE MULTI-GERAÇÃO"], 
    src: "/assets/mini/mini-3.webp"
  },
  {
    title: "Resident Evil 2", 
    value: 49.90, 
    plataform: ["PS4", "PS5", "EDIÇÃO PADRÃO"], 
    src: "/assets/mini/mini-4.png"
  },
  {
    title: "Red Dead Redemption", 
    value: 49.90, 
    plataform: ["PS4", "EDIÇÃO PADRÃO"], 
    src: "/assets/mini/mini-5.webp"
  },
  {
    title: "Madden NFL 24", 
    value: 49.90, 
    plataform: ["PS4", "PS5", "EDIÇÃO PADRÃO"], 
    src: "/assets/mini/mini-6.webp"
  },
  {
    title: "Edição Black Mamba do NBA 2K24", 
    value: 49.90, 
    plataform: ["PS4", "PS5", "Edição Black Mamba"], 
    src: "/assets/mini/mini-7.jpg"
  },
  {
    title: "Kittengumi: The Sakabato's Thief", 
    value: 49.90, 
    plataform: ["PS5"], 
    src: "/assets/mini/mini-8.webp"
  },
  {
    title: "Fortnite", 
    value: "Free", 
    plataform: ["PS5"], 
    src: "/assets/mini/mini-9.webp"
  },
  {
    title: "STAR WARS Jedi: Survivor™", 
    value: 49.90, 
    plataform: ["PS5", "EDIÇÃO PADRÃO"], 
    src: "/assets/mini/mini-10.webp"
  },
  {
    title: "Marvel's Spider-Man: Miles Morales", 
    value: 49.90, 
    plataform: ["PS4", "PS5", "EDIÇÃO PADRÃO"], 
    src: "/assets/mini/mini-11.jpeg"
  }];

  private trending: Game[] = [];

  constructor() {
    this.trending = this.game.map(x => x);
    while (this.trending.length > 4) {
      let index = Math.floor(Math.random()*this.trending.length);
      this.trending.splice(index,1);
    }
  }

  get Games() : Game[] {
    return this.game;
  }

  get Trending(): Game[] {
    return this.trending;
  }
  
}
