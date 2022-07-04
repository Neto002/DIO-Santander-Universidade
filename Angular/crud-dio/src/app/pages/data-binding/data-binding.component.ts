import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  text = 'test';
  imgURL = 'https://picsum.photos/300/300';
  imgDesc = 'random image';
  textInput = '';

  constructor() {}

  ngOnInit(): void {}

  clicouFilho(text: string): void {
    console.log(text);
  }
}
