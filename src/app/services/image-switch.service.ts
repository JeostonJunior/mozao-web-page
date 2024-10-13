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
    if (this.images.length === 0) {
      console.error('Erro: Não há imagens disponíveis.');
      return ''; // Retorna uma string vazia ou uma imagem padrão
    }
    return this.images[this.currentImageIndex];
  }

  // Função para iniciar a troca de imagens a cada 10 segundos
  private changeImage() {
    if (this.images.length === 0) {
      console.error('Erro: Não é possível trocar imagens porque não há imagens disponíveis.');
      return; // Sai da função se não houver imagens
    }

    setInterval(() => {
      this.currentImageIndex = Math.floor(Math.random() * this.images.length);
      // Adicionando uma verificação de erro para garantir que o índice esteja dentro dos limites
      if (this.currentImageIndex < 0 || this.currentImageIndex >= this.images.length) {
        console.error('Erro: Índice de imagem inválido. Redefinindo para 0.');
        this.currentImageIndex = 0; // Reseta para o primeiro índice
      }
    }, 10000); // 10 segundos
  }
}
