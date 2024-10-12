import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importando Router para navegação

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule] // Importando CommonModule para funcionalidades do Angular
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { } // Injetando o Router

  ngOnInit(): void {
    this.addScrollListener();
  }

  addScrollListener(): void {
    let lastScrollTop = 0;
    const header = document.querySelector('.header-container');

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        header?.classList.add('hide'); // Esconde o header ao rolar para baixo
      } else {
        header?.classList.remove('hide'); // Mostra o header ao rolar para cima
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
  }

  // Método para navegação
  navigateToLanguage(lang: string) {
    this.router.navigate([`/${lang}`]); // Navega para a rota correspondente ao idioma
  }
}
