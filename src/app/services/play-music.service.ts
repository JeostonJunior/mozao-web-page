import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayMusicService {
  private audio = new Audio();
  private isPlaying = false; 

  constructor() { 
    this.audio.src = '../../assets/vampire.mp3';
    this.audio.load();
  }

  playMusic() {
    if (!this.isPlaying) {
      this.audio.play().then(() => {
        this.isPlaying = true;
      }).catch(error => {
        console.log('Erro ao tentar reproduzir a música:', error);
      });
    }
  }

  pauseMusic() {
    if (this.isPlaying) {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  toggleMusic() {
    if (this.isPlaying) {
      this.pauseMusic();
    } else {
      this.playMusic();
    }
  }
}
