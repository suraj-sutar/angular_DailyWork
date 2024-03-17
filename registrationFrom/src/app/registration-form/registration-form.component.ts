import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  MaxLengthValidator,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  //first create a property of ractiveFrom
  myregisterFrom!: FormGroup;

  imageUrl: string = '/src/assets/img1.png';

  //city drop down
  cites: string[] = ['Pune', 'Mumbai', 'Kolkata', 'Delhi'];

  //genders drop down
  genders: string[] = ['Male', 'Female'];
  constructor(private fb: FormBuilder) {
    this.createRegistrationFrom();
  }

  createRegistrationFrom() {
    this.myregisterFrom = this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(25),
        ],
      ],
      lastName: ['', [Validators.required, Validators.maxLength(15)]],
      //validtion for age in between 17 to 20
      age: ['', [Validators.required, this.ageRangeValidator]],
      email: ['', [Validators.required, Validators.email]],
      //add only Number
      phone: ['', [Validators.required]],
      city: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confPassword: ['', [Validators.required]],
    });
  }

  // Custom Validator for Age Range
  ageRangeValidator(control: any) {
    if (control.value < 17 || control.value > 20) {
      return { ageOutOfRange: true };
    }
    return null;
  }

  //method for chech max length of phone number

  validatePhoneNumber(event: any) {
    //value of the input
    const input = event.target.value;

    const phoneNumberControl = this.myregisterFrom.get('phone');

    // validation logic here
    if (input.length > 10) {
      phoneNumberControl?.setErrors({ maxLengthExceeded: true });
    } else {
      if (
        phoneNumberControl?.errors &&
        phoneNumberControl.errors['maxLengthExceeded']
      ) {
        phoneNumberControl.setErrors(null);
      }
    }
  }

  onSubmit() {
    console.log(this.myregisterFrom);
  }

  ngOnInit(): void {}
}
