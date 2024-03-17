import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RapidapiService {
  apiUrl = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete';
  //inject the httpClient to make http request
  constructor(private _httpClient: HttpClient) {}

  getYahooFinance(): Observable<any> {
    // create new HttpParams object.
    let params = new HttpParams();
    // Append parameters
    params = params.append('q', 'tesla');
    params = params.append('region', 'US');

    // creating HttpHeaders

    let headers = new HttpHeaders({
      'X-RapidAPI-Key': '727bdc0d74msh34eade289d62312p1dcf14jsn1be1d7dfc57f',
      'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      'Content-Type': 'application/json',
    });

    // adding HttpParams and HttpHeaders to options
    const options = {
      headers: headers,
      params: params,
    };
    return this._httpClient.get(this.apiUrl, options);
  }
}
