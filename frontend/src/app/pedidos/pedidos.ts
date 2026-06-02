import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- FALTAVA ESTE
import { FormsModule } from '@angular/forms';     // <-- FALTAVA ESTE PARA O ngModel
import { IPedido } from '../pedido.model';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule, FormsModule], // <-- ADICIONE OS DOIS AQUI
  templateUrl: './pedidos.html',
  styleUrls: ['./pedidos.css']
})
export class Pedidos {
  // Criando o objeto 'pedido' que o seu HTML tenta ler no ngModel
  pedido: IPedido = {
    produtoTipo: '1',
    blocos: [],
    idioma: 'br'
  };

  // Funções que o seu HTML chama via (click) ou (change):
  alterarIdioma(idioma: 'br' | 'es' | 'uk') {
    this.pedido.idioma = idioma;
    console.log('Idioma alterado para:', idioma);
  }

  ajustarQuantidadeDeBlocos() {
    console.log('Ajustando blocos para o tipo:', this.pedido.produtoTipo);
    // Aqui depois colocamos a lógica de gerar os blocos dinamicamente
  }

  avancarParaRevisao() {
    console.log('Avançando com o pedido:', this.pedido);
  }
}