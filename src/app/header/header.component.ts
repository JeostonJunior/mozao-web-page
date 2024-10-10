import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    this.addScrollListener()
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
}
