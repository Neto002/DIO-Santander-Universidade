import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  count = 0;
  nome = 'Antonio Neto';
  text = '';

  

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.count++;
      if (this.count === 10) {
        clearInterval(interval);
      }
    }, 1000);
  }

  clicou(): void {
    console.log('Clicou');
  }
}
