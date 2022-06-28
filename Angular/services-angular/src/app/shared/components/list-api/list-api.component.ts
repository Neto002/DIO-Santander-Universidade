import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css'],
})
export class ListApiComponent implements OnInit {
  personagens: Array<any> = [];

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.listService.getCharacters().subscribe((result) => {
      this.personagens = result.results;
      console.log(this.personagens);
      
    });
  }
}
