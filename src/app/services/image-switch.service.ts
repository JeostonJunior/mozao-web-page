import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageSwitcherService {
  private images: string[] = [
    '../../assets/eu_e_voce_bests.jpeg',
    '../../assets/eu_e_voce_maglore.jpg',
    '../../assets/eu_e_voce_cafe.jpeg',
    '../../assets/eu_e_voce_parque.jpg',
    '../../assets/eu_e_voce_mexicano.jpeg',
    '../../assets/eu_e_voce_olindina.jpeg',
    '../../assets/eu_e_voce_pizza.jpg',
    '../../assets/eu_e_voce_bar.jpg',
    '../../assets/eu_e_voce_SJ.jpeg',
    '../../assets/eu_e_voce_valentine.jpg',
    '../../assets/eu_e_voce_bar_resenha.jpg',
    '../../assets/eu_e_voce_dormindo.jpg',
    '../../assets/eu_e_voce_espelho_SJ.jpg',
    '../../assets/eu_e_voce_praia.jpg',
    '../../assets/eu_e_voce_shops.jpg',
    '../../assets/eu_e_voce_shops_2.jpeg',
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
