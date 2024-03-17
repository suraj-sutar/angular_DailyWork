import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  //first create api URL endpoint
  apiUrl = 'http://localhost:3000/todos';

  //inject httpCleint to make httpClient request and httpclient response
  constructor(private _httpClient: HttpClient) {}

  //create one entity into the server using HttpClent verbs
  //when createing a entity there is a need to passw some data

  //in the post method first we need to pass where the data post and which data post
  //or first pass API Endpoint URL and data
  //using this we will create a new entity into the local server
  createTodos(data: any): Observable<any> {
    return this._httpClient.post(this.apiUrl, data);
  }

  //get the data from the local server
  getTodos(): Observable<any> {
    return this._httpClient.get(this.apiUrl);
  }

  //edit created todos
  //for that we need to create new API endpoint URL with id
  //because edit the the entity based on id

  updateTodos(id: any, data: any): Observable<any> {
    let updateApiUrl = `${this.apiUrl}/${id}`;

    return this._httpClient.put(updateApiUrl, data);
  }

  //delete created todos
  //for that we need to crate new  API endpoint URL with id
  //because delete the the entity based on id

  deleteTodos(id: any): Observable<any> {
    let delApiUrl = `${this.apiUrl}/${id}`;
    return this._httpClient.delete(delApiUrl);
  }
}
