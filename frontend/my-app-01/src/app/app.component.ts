import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Título do projeto 001 - Angular';
  title2 = 'Outro título!';
  valor = 0;

  a = 10;
  b = 20;

  printTitle(): string {
    return this.title;
  }

  // filter e map no angular

  c = this.a + this.b;

  printValor(valor: number): void {
    this.valor = valor;
  }
}
