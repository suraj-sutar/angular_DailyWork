import { Component, OnInit } from '@angular/core';
import { RapidapiService } from '../services/rapidapi.service';

@Component({
  selector: 'app-rapidapi',
  templateUrl: './rapidapi.component.html',
  styleUrls: ['./rapidapi.component.css'],
})
export class RapidapiComponent implements OnInit {
  datas: any;
  // inject the RapidapiService
  constructor(private _rapidApiService: RapidapiService) {}

  ngOnInit(): void {
    this._rapidApiService.getYahooFinance().subscribe((res) => {
      console.log('rapid get called', res);
      this.datas = res;
    });
  }

  isIterable(obj: any): boolean {
    return obj && typeof obj !== 'string' && obj[Symbol.iterator];
  }
}
