import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-details-form',
  templateUrl: './user-details-form.component.html',
  styleUrls: ['./user-details-form.component.css'],
})
export class UserDetailsFormComponent implements OnInit {
  myUserForm!: FormGroup;

  //gender drop down
  genders: string[] = ['Male', 'Female', 'Other'];

  //countries dropdown
  countries: string[] = ['India', 'Italy', 'Brazil'];

  constructor(private fb: FormBuilder) {
    this.createUserDetailsForm();
  }
  createUserDetailsForm() {
    this.myUserForm = this.fb.group({
      userDetails: this.fb.group({
        fullName: new FormControl('', [Validators.required]),
        birthdate: ['', Validators.required],
        gender: ['', Validators.required],
        country: ['', Validators.required],
        phone: ['', Validators.required],
        bio: ['', [Validators.required, Validators.maxLength(256)]],
      }),
      accountDetails: this.fb.group({
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(25),
            Validators.pattern(/^[a-zA-Z0-9]+$/),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.pattern(/^[a-zA-Z0-9]+$/),
          ],
        ],
        //add Custom Validation
        confPassword: ['', [Validators.required]],
        conditionCheck: ['', Validators.required],
      }),
    });
  }
  onSubmit() {
    console.log(this.myUserForm);
  }

  ngOnInit(): void {}
}
