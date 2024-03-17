import { Injectable } from '@angular/core';

@Injectable({
  //it will create a single Instance of this service for every 
  //:any it will create a anew instance for ervenry injector

  providedIn: 'root',
})
export class AgeCalDemoService {
  constructor() {}

  calculateAge(birthdate: Date): { age: number; monthDiff: number } {
    //first take create a instance or object of Date for current date
    const today = new Date();

    //then create a instance or obejct  of Date based on birthdate
    const personbirthdate = new Date(birthdate);

    //calculate age

    let age = today.getFullYear() - personbirthdate.getFullYear();
    const monthDiff = today.getMonth() - personbirthdate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < personbirthdate.getDate())
    ) {
      age--;
    }
    //this return the calculate age
    return { age, monthDiff };
  }
}
