import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  defauleCourse: string = 'Angular';
  courses: string[] = [
    'Angular',
    'JavaScript',
    'HTML',
    'CSS',
    'TypeScript',
    'Azure',
  ];

  defaultGender: string = 'Male';

  genders = [
    {
      id: 1,
      value: 'Male',
    },
    {
      id: 2,
      value: 'Female',
    },
  ];

  //create varibale or property for rectiveForm
  myReactiveFrom!: FormGroup;

  createReativeFrom() {
    //create a instace of that formgroup
    //then create a object inside that and create instance for formcontrol
    this.myReactiveFrom = new FormGroup({
      //here we can create a instsance of form control
      //to apply the validation to that control then you have to pass that inside the instace
      //first value for default value that will be empty
      //second value for validator or validator function or validator function of array
      //and third value for custom validator function
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(25),
      ]),
      password: new FormControl(),
      course: new FormControl('CSS'),
      gender: new FormControl(),
    });
  }

  onSubmit() {
    console.log(this.myReactiveFrom);
  }

  //
  constructor(private _demoService: DemoService) {
    //call that method inside the constructor
    this.createReativeFrom();
  }

  ngOnInit(): void {
    //you cannot get data data whenever you are subscribe the observable
    console.log(
      this._demoService.getTodos().subscribe((res) => {
        console.log(res);
      })
    );
  }
}
