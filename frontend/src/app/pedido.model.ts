// src/app/pedido.model.ts

export interface ILamina {
  cor: string;
  padrao: string;
  texto?: string;
}

export interface IBloco {
  id: number;
  corBloco: string;
  esquerda: ILamina;
  frontal: ILamina;
  direita: ILamina;
}

export interface IPedido {
  produtoTipo: '1' | '2' | '3';
  blocos: IBloco[];
  idioma: 'br' | 'es' | 'uk';
}
