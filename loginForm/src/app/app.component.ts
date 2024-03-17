import { Component } from '@angular/core';
import { DemoService } from './services/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'loginForm';

  test: string[] = [];

  //first i need to inject that service
  constructor(private _demoServive: DemoService) {
    //call that obser
    // this._demoServive.myCustomeObs.subscribe({
    //   next: (val) => {
    //     console.log(val);
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    //   complete: () => {
    //     console.log('complete');
    //   },
    // });

    //user another way
    this._demoServive.myCustomeObs.subscribe((res: string) => {
      console.log(res);
      this.test.push(res);
    });
  }
}
