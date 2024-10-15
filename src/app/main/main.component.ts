import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { TimeTrackingService } from '../services/time-tracking.service';
import { ImageSwitcherService } from '../services/image-switch.service';
import { CommonModule } from '@angular/common'; 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  language: string = 'pt'; // Idioma padrão

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public timeTrackingService: TimeTrackingService, 
    public imageSwitcherService: ImageSwitcherService, 
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: params => {
        const lang = params.get('lang');
        this.language = this.validateLanguage(lang); // Validando o idioma
      },
      error: err => {
        console.error('Erro ao acessar a rota:', err);
        this.router.navigate(['/pt']); // Redireciona para o idioma padrão
      }
    });
  }

  // Método para validar o idioma
  private validateLanguage(lang: string | null): string {
    const supportedLanguages = ['pt', 'en']; // Idiomas suportados
    if (lang && supportedLanguages.includes(lang)) {
      return lang;
    } else {
      console.warn(`Idioma inválido fornecido: ${lang}. Retornando ao idioma padrão: pt.`);
      return 'pt'; 
    }
  }
}
