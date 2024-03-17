import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-drop-down-logic',
  templateUrl: './drop-down-logic.component.html',
  styleUrls: ['./drop-down-logic.component.css'],
})
export class DropDownLogicComponent implements OnInit {
  myReactiveForm: FormGroup;

  //is an array of country
  countries: string[] = ['India', 'Italy', 'Brazil'];

  //this is nested object that contain countrys with their states and corresponding cities
  states: Record<string, Record<string, string[]>> = {
    //in this first record store the country with string data type
    //and second record strore the states in the form of object
    //here key is state name and value is array of city
    India: {
      Maharashtra: ['Pune', 'Nagpur', '	Solapur'],
      Dehli: ['Ghaziabad', 'Faridabad', 'Noida'],
      // ... other states for Country1
    },
    Italy: {
      Lazio: ['Rome', 'Milan', 'Naples'],
      Lombardy: ['Turin', '	Palermo', '	Genoa'],
    },
    Brazil: {
      SãoPaulo: ['Guarulhos', 'Campinas', 'Joinville'],
      RiodeJaneiro: ['Londrina', 'Contagem', 'Serra'],
    },
  };

  //this is empty array to store filterd states and cities
  filteredStates: string[] = [];
  filteredCities: string[] = [];

  clickCountry: boolean = false;
  clickState: boolean = false;

  constructor() {
    this.myReactiveForm = new FormGroup({
      country: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
    });
  }

  onCountryChange() {
    //this find out which county user selected from country dropdown

    const selectedCountry = this.myReactiveForm.get('country')?.value;

    //here Obejct.keys is used to get the key of that obejct means State Name
    //if there is no states, then we set filteredStates empty

    this.filteredStates = Object.keys(this.states[selectedCountry] || {});

    //we clear the filteredCities array beacuse we want to start fresh when the user changes the country
    this.filteredCities = [];
    this.clickCountry = true;
  }

  onStateChange() {
    //we find out the selecte country and state from the country and state dropdowns.
    const selectedCountry = this.myReactiveForm.get('country')?.value;
    const selectedState = this.myReactiveForm.get('state')?.value;

    this.filteredCities = this.states[selectedCountry][selectedState] || [];
    this.clickState = true;
  }

  onSubmit() {
    if (this.myReactiveForm.valid) {
      console.log('Form submitted successfully!');
    }
  }

  ngOnInit(): void {}
}
