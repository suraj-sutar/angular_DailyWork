import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letter-password',
  templateUrl: './letter-password.component.html',
  styleUrls: ['./letter-password.component.css'],
})
export class LetterPasswordComponent implements OnInit {
  generatedPassword: string = '';
  passwordLength: number = 8;
  generatePassword(length: number) {
    const numOfChar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let Password = '';

    for (let index = 0; index < length; index++) {
      //then generate random index for genearting a password
      const randomIndex = Math.floor(Math.random() * numOfChar.length);
      Password += numOfChar.charAt(randomIndex);
    }

    this.generatedPassword = Password;
  }

  constructor() {}

  ngOnInit(): void {}
}
