import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  // api end ponit
  apiUrl: string = 'http://localhost:3000/todos';

  // inject the HttpClient
  constructor(private _httpClient: HttpClient) {}

  createTodo(data: any): Observable<any> {
    return this._httpClient.post(this.apiUrl, data);
  }

  getTodos(): Observable<any> {
    return this._httpClient.get(this.apiUrl);
  }

  updateTodo(id: any, data: any): Observable<any> {
    let API_URL = `${this.apiUrl}/${id}`;

    return this._httpClient.put(API_URL, data);
  }

  deleteTodo(id: any) {
    let API_URL = `${this.apiUrl}/${id}`;

    return this._httpClient.delete(API_URL);
  }
}
