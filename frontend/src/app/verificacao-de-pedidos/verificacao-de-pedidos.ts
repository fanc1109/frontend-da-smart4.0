import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- FALTAVA ESTE PARA O *ngFor
import { IPedido } from '../pedido.model';

@Component({
  selector: 'app-verificacao-de-pedidos',
  standalone: true,
  imports: [CommonModule], // <-- ADICIONE AQUI
  templateUrl: './verificacao-de-pedidos.html',
  styleUrls: ['./verificacao-de-pedidos.css']
})
export class VerificacaoDePedidos {
  // Caso seu HTML de verificação também use a lista de pedidos
  pedido!: IPedido; 

  // Funções que o seu HTML de verificação chama no (click):
  voltarAoEditor() {
    console.log('Voltando para a tela de edição...');
  }

  enviarParaNestJS() {
    console.log('Enviando dados estruturados para o back-end NestJS!');
  }
}