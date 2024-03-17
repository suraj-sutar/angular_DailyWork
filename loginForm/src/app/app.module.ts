import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormTDFComponent } from './login-form-tdf/login-form-tdf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { LoginReactiveFromComponent } from './login-reactive-from/login-reactive-from.component';
import { DropDownLogicComponent } from './drop-down-logic/drop-down-logic.component';
import { HobbiesFormArrayComponent } from './hobbies-form-array/hobbies-form-array.component';
import { AgeCalculatorComponent } from './age-calculator/age-calculator.component';
import { HttpClientModule } from '@angular/common/http';
import { TodosComponent } from './todos/todos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RapidapiComponent } from './rapidapi/rapidapi.component';
import { RapidAPIAssiComponent } from './rapid-apiassi/rapid-apiassi.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginFormTDFComponent,
    ReactiveFormComponent,
    LoginReactiveFromComponent,
    DropDownLogicComponent,
    HobbiesFormArrayComponent,
    AgeCalculatorComponent,
    TodosComponent,
    RapidapiComponent,
    RapidAPIAssiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
