import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list-component.html',
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular Forms',
        imageUrl: '',
        price: 99.99,
        code: '1254',
        duration: 120,
        rating: 4.5,
        releaseDate: 'December 2, 2019',
      },
      {
        id: 2,
        name: 'Angular HTTP',
        imageUrl: '',
        price: 99.99,
        code: '1255',
        duration: 80,
        rating: 5,
        releaseDate: 'December 4, 2022',
      },
    ];
  }
}
