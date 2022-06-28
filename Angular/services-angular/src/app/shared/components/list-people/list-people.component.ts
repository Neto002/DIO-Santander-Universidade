import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css'],
})
export class ListPeopleComponent implements OnInit {
  pessoas = [
    {
      firstName: '',
      lastName: '',
      age: 0,
    },
  ];

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    console.log(this.pessoas);
    this.getPeople();
  }

  getPeople() {
    this.peopleService.getPeople().subscribe((data) => {
      this.pessoas = data;
    });
  }
}
