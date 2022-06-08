import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() // Transforma o componente em um atributo de tags html
  rating: number = 0;

  starWidth: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = this.rating * 74 / 5;
  }
}
