import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AgeCalDemoService } from '../services/age-cal-demo.service';

@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.css'],
})
export class AgeCalculatorComponent implements OnInit {
  myAgeForm!: FormGroup;
  ageAndMonthDiff!: { age: number; monthDiff: number };

  constructor(
    private fb: FormBuilder,
    private ageCalculatorService: AgeCalDemoService
  ) {
    this.myAgeForm = this.fb.group({
      birthdate: ['', Validators.required],
    });
  }

  clickCalculate() {
    const birthdate = this.myAgeForm.get('birthdate')?.value;
    this.ageAndMonthDiff = this.ageCalculatorService.calculateAge(birthdate);
  }
  ngOnInit(): void {}
}
