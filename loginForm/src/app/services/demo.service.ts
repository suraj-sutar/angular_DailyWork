import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  //first we need to import the HttpClientModule into th imports array
  //then second inject the HttpClient into the constructor
  constructor(private _httpClient: HttpClient) {}

  //create custome observer using constructor
  //myCustomeObs is a Observable
  //and observer is a data
  //if we want to get the data from the MyCutomeObs you need to subscribe
  myCustomeObs = new Observable<string>((observer) => {
    console.log('Observable Start');

    observer.next('1');
    observer.next('2');
    observer.next('3');
    observer.next('4');
    observer.next('5');
  });
  reversString(input: string) {
    let reverse = '';
    for (let index = input.length - 1; index >= 0; index) {
      reverse += input[index];
    }
    return reverse;
  }

  //create a getTodos method to get the todos data using url(API Endpoint URL)
  //this get method return a observable-->
  //all httpClient method as a response we are getting in the form of 'Observable'.
  getTodos() {
    return this._httpClient.get('https://jsonplaceholder.typicode.com/todos');
  }
}
