import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayMusicService {
  private audio = new Audio();

  constructor() { 
    this.playMusic()
  }

  playMusic() {
    this.audio.src = '../../assets/vampire.mp3';
    this.audio.load();
    this.audio.play().catch(error => {
      console.log('Erro ao tentar reproduzir a música:', error);
    });
  }

  pauseMusic() {
    this.audio.pause();
  }
}
