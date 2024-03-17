import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login-reactive-from',
  templateUrl: './login-reactive-from.component.html',
  styleUrls: ['./login-reactive-from.component.css'],
})
export class LoginReactiveFromComponent implements OnInit {
  coursess: string[] = [
    'Angular',
    'JavaScript',
    'HTML',
    'CSS',
    'TypeScript',
    'Azure',
  ];

  genderss = [
    {
      id: 1,
      value: 'Male',
    },
    {
      id: 2,
      value: 'Female',
    },
  ];

  myLoginReactiveForm!: FormGroup;

  createReactiveForm() {
    this.myLoginReactiveForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      course: new FormControl(),
      gender: new FormControl(),
      country: new FormControl(),
      state: new FormControl(),
      city: new FormControl(),

      //first we have to create instance of that formArray
      //Initialize an empty FormArray for hobbies

      hobbies: this.fb.array([]),
    });
  }
  //seconde create a get method
  get hobbiesFormArray() {
    return this.myLoginReactiveForm.get('hobbies') as FormArray;
  }

  addHobby() {
    this.hobbiesFormArray.push(new FormControl(''));
  }

  removeHobby(index: number) {
    this.hobbiesFormArray.removeAt(index);
  }

  constructor(private fb: FormBuilder) {
    this.createReactiveForm();
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.myLoginReactiveForm);
  }
}
