import { CounterComponent } from './counter/counter.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';

import { AppComponent } from './app.component';
// store
import { StoreModule } from '@ngrx/store';
import { counter1Reducer, counter2Reducer } from './store/counters.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore(
      {
        counter1: counter1Reducer,
        counter2: counter2Reducer

      }),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
