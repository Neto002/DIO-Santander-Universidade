import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL = 'http://localhost:3000/usuarios'
  constructor(private httpClient: HttpClient) { }

  // Retorna lista de usuários
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiURL)
  }

  postUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiURL, user)
  }
}
