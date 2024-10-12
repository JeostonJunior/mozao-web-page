import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; // Importando ActivatedRoute
import { PlayMusicService } from '../services/play-music.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule]
})
export class HeaderComponent implements OnInit {
  currentLang: string = 'pt'; // Variável para armazenar o idioma atual

  constructor(
    private router: Router, 
    private route: ActivatedRoute, // Injetando ActivatedRoute
    private playMusicService: PlayMusicService
  ) {}

  ngOnInit(): void {
    this.addScrollListener();

    // Verifica a rota ativa e define o idioma atual
    this.route.url.subscribe(urlSegments => {
      const currentPath = urlSegments[0]?.path || 'pt'; // Se a rota for vazia, define 'pt' como padrão
      this.currentLang = currentPath;
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

  toggleMusic(): void {
    this.playMusicService.toggleMusic();
  }

  navigateToLanguage(lang: string): void {
    this.router.navigate([`/${lang}`]);
  }
}
