import { Component, Input, OnInit, Output } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() books: Book[] = [];
  @Input() book: Book = {
    id: '0',
    name: '',
    category: '',
    img: '',
    price: 0,
    quantity: 0
  };

  constructor() {}

  ngOnInit(): void {}
}
