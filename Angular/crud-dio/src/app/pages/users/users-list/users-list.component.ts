import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UserListComponent implements OnInit, OnChanges {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.getUsers();
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe({
      next: (data) => (this.users = data),
      error: (error) => console.log(error),
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe({
      next: (data) => {
        console.log(`Usuário ${data.nome} ${data.sobrenome} excluído com sucesso!`);
        this.getUsers();
      },
      error: (error) => console.log(error),
    });
  }
}
