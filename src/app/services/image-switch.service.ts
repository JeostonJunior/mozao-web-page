import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageSwitcherService {
  private images: string[] = [
    // '../../assets/EuEVoce.jpeg',
    // '../../assets/EuEVoceCafe.jpeg',
    // '../../assets/EuEVocePasseio.jpeg',
    // '../../assets/EuEVoceSaoJoao.jpeg'
    '../../assets/coelho.jpg',
    '../../assets/gato.webp'
  ];

  private currentImageIndex: number = 0;

  constructor() {
    this.changeImage();
  }

  // Função para obter a imagem atual
  getCurrentImage(): string {
    return this.images[this.currentImageIndex];
  }

  // Função para iniciar a troca de imagens a cada 10 segundos
  private changeImage() {
    setInterval(() => {
      this.currentImageIndex = Math.floor(Math.random() * this.images.length);
    }, 10000); // 10 segundos
  }
}
