import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass-generator',
  templateUrl: './pass-generator.component.html',
  styleUrls: ['./pass-generator.component.css'],
})
export class PassGeneratorComponent implements OnInit {
  generatedPassword: string = '';
  passwordLength!: number;
  includeUppercase: boolean = false;
  includeLowercase: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  generateRandomPassword() {
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '^&*-_!@#$%=+';

    let allCharacters = '';

    if (this.includeLowercase) {
      allCharacters += lowercaseLetters;
    }

    if (this.includeUppercase) {
      allCharacters += uppercaseLetters;
    }

    if (this.includeNumbers) {
      allCharacters += numbers;
    }

    if (this.includeSymbols) {
      allCharacters += symbols;
    }

    let password = '';

    for (let i = 0; i < this.passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters.charAt(randomIndex);
    }

    this.generatedPassword = password;
  }

  constructor() {}

  ngOnInit(): void {}
}
