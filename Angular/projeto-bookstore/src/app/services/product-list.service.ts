import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../components/bookstore-app/product-list/model/book';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BookService {
  private apiURL = 'http://localhost:3000/products';

  httpOptions = {
    headers: {
      'content-type': 'application/json',
    },
  };

  constructor(private httpClient: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.apiURL, this.httpOptions);
  }
}
