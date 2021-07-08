import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  book_url = 'http://127.0.0.1:8000/api/buku-get';
  post_book_url = 'http://127.0.0.1:8000/api/buku-post';
  cats_url = 'http://127.0.0.1:8000/api/kategori-get';
  delete_url = 'http://127.0.0.1:8000/api/buku-delete/';
  put_book_url = 'http://127.0.0.1:8000/api/buku-put';

  constructor(private http: HttpClient) { }
  getBooks() {
    return this.http.get(`${this.book_url}`);
  }

  getCategories() {
    return this.http.get(`${this.cats_url}`);
  }

  postBook(data) {
    return this.http.post(`${this.post_book_url}`, data);
  }
  delBook(id) {
    return this.http.get(`${this.delete_url}${id}`);
  }
  putBooks(data) {
    return this.http.put(`${this.put_book_url}`, data);
  }
}
