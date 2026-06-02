import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pedidos } from './pedidos/pedidos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Pedidos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
