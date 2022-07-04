import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css'],
})
export class PipesExampleComponent implements OnInit {
  number: number = 0;
  text: string = 'hello world';
  date = new Date;
  pessoa = {
    nome: 'Neto',
    idade: 19
  }

  constructor() {}

  ngOnInit(): void {}
}
