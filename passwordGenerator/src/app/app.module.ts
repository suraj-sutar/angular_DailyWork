import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassGeneratorComponent } from './pass-generator/pass-generator.component';
import { FormsModule } from '@angular/forms';
import { LetterPasswordComponent } from './letter-password/letter-password.component';

@NgModule({
  declarations: [AppComponent, PassGeneratorComponent, LetterPasswordComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
