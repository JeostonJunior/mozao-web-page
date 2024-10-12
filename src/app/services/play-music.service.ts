import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayMusicService {
  private audio = new Audio();
  private isPlaying = false; 
  private currentTrack = '';

  constructor() { }

  playMusic(src: string) {
    if (!this.isPlaying || this.currentTrack !== src) {
      this.audio.src = src;
      this.audio.load();
      this.audio.play().then(() => {
        this.isPlaying = true;
        this.currentTrack = src;
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

  toggleMusic(src: string) {
    if (this.isPlaying && this.currentTrack === src) {
      this.pauseMusic();
    } else {
      this.playMusic(src);
    }
  }
}
