import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiURL = 'http://localhost:3000/usuarios';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Token: '',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  // Retorna lista de usuários
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiURL);
  }

  // Retorna usuário por ID
  getUserById(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.apiURL}/${id}`);
  }
  // Cria usuário no banco
  postUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiURL, user, this.httpOptions);
  }

  // Deleta usuário do banco
  deleteUser(id: number): Observable<User> {
    return this.httpClient.delete<User>(`${this.apiURL}/${id}`);
  }

  // Atualiza usuário do banco
  putUser(id: string, user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.apiURL}/${id}`, user);
  }
}
