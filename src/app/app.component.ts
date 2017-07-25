import { Component, OnInit, OnDestroy } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { COUNTER1_NEW_VALUE, COUNTER2_NEW_VALUE } from './store/counters.reducer';
import { AppStore } from './store/app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


})
export class AppComponent implements OnInit, OnDestroy {
  counter1_val: number = 2;
  counter2_val: number = 6;

  sub1: Observable<number>;
  sub2: Observable<number>;

  constructor(
    private store: Store<AppStore>,
  ) {
    store.dispatch({ type: COUNTER1_NEW_VALUE, payload: this.counter1_val });
    store.dispatch({ type: COUNTER2_NEW_VALUE, payload: this.counter2_val });
  }

  ngOnInit() {

    this.store.select<number>('counter1')
      .subscribe(val => {
        this.counter1_val = val;
      });

    this.store.select<number>('counter2')
      .subscribe(val => {
        this.counter2_val = val;
      });
  }

  /**
   * Direct handler
   * 
   * @param event - new counter value
   */
  handlerChange1(event) {
    this.counter1_val = event;
  }


  resetAll(counter1: CounterComponent, counter2: CounterComponent) {
    counter1.resetVal();
    counter2.resetVal();

    console.log('reset all');
  }

  resetAllInStore(counter1_name: string, counter2_name: string) {
    this.store.dispatch({ type: counter1_name, payload: 25 });
    this.store.dispatch({ type: counter2_name, payload: 26 });

    console.log('resetin store: '+counter2_name);
  }

  ngOnDestroy() {

  }
}
