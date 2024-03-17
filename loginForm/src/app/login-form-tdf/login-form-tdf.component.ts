import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-login-form-tdf',
  templateUrl: './login-form-tdf.component.html',
  styleUrls: ['./login-form-tdf.component.css'],
})
export class LoginFormTDFComponent implements OnInit {
  //create a array for opetion values
  defaultCourse: string = 'Angular';
  courses: string[] = ['Angular', 'HTML', 'CSS', 'JavaScripy', 'TypeScript'];

  //create a array of object for gender radio button
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

  //for display the details on html page we need to create class instance
  employee = new Employee();
  isSubmitted: boolean = false;

  onLogin(myLoginForm: NgForm) {
    this.isSubmitted = true;
    console.log('Login Successful...', myLoginForm);
    this.employee.username = myLoginForm.value.username;
    this.employee.email = myLoginForm.value.email;
    this.employee.course = myLoginForm.value.course;
    this.employee.gender = myLoginForm.value.gender;
  }

  //reset button method
  onReset(myLoginForm: NgForm) {
    myLoginForm.reset();
    this.isSubmitted = false;
    //in my way but there is one bug
    // this.defaultCourse = 'Angular';
    // this.defaultGender = 'Male';
    //then try another way
    myLoginForm.controls['course'].setValue('Angular');
    myLoginForm.controls['gender'].setValue('Male');
  }
  constructor() {}

  ngOnInit(): void {}
}
