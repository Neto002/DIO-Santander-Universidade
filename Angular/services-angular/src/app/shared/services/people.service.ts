import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor() {}

  getPeople(): Observable<any> {
    let peopleArray = [
      {
        firstName: 'Antonio',
        lastName: 'Neto',
        age: 19,
      },
      {
        firstName: 'Maria',
        lastName: 'X',
        age: 19,
      },
      {
        firstName: 'Joao',
        lastName: 'X',
        age: 19,
      },
    ];

    return of(peopleArray);
  }
}
