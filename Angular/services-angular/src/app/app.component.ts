import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  count = 0;
  nome = "Antonio Neto";
  text = '';

  pessoas = [
    {
      nome: "Antonio",
      sobrenome: "Neto"
    },
    {
      nome: "Maria",
      sobrenome: "X"
    },
    {
      nome: "Joao",
      sobrenome: "X"
    }
  ]

  constructor() {}
  
  ngOnInit(): void {
    console.log(this.pessoas);
    
    let interval = setInterval(() => {
      this.count++;
      if (this.count === 10) {
        clearInterval(interval);
      }
    }, 1000);
  }

  clicou(): void {
    console.log("Click");
  }
}
