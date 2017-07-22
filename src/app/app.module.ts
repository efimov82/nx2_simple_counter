import { CounterComponent } from './counter/counter.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
