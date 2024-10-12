import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayMusicService } from '../services/play-music.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule]
})
export class HeaderComponent implements OnInit {
  currentLang: string = 'pt'; // Armazena o idioma atual

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private playMusicService: PlayMusicService
  ) { }

  ngOnInit(): void {
    this.addScrollListener();

    this.route.url.subscribe(urlSegments => {
      const currentPath = urlSegments[0]?.path || 'pt';
      this.currentLang = currentPath;

      // Define a música com base na rota
      if (this.currentLang === 'en') {
        this.toggleMusicForLanguage('en');
      } else if (this.currentLang === 'pt') {
        this.toggleMusicForLanguage('pt');
      }
    });

    console.log(this.currentLang);
  }

  addScrollListener(): void {
    let lastScrollTop = 0;
    const header = document.querySelector('.header-container');

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        header?.classList.add('hide');
      } else {
        header?.classList.remove('hide');
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
  }

  toggleMusicForLanguage(lang: string): void {
    const musicSrc = lang === 'en' ? '../../assets/vampire.mp3' : '../../assets/traitor.mp3';
    this.playMusicService.toggleMusic(musicSrc);
  }

  navigateToLanguage(lang: string): void {
    this.router.navigate([`/${lang}`]);
  }
}
