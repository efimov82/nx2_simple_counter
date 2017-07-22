
import { Component, Directive, OnInit } from '@angular/core';
import { CounterComponent } from './counter/counter.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  

})
export class AppComponent implements OnInit  { // implements OnInit
  count: number = 7;
  counter1_val: number = 2;
  counter2_val: number = 6;
  cnt1: CounterComponent;

  ngOnInit() {
    this.cnt1 = new CounterComponent();
    this.cnt1.count = 15;
  }

  resetAll(counter1: CounterComponent, counter2: CounterComponent) {
    counter1.resetVal();
    counter2.resetVal();
    
    console.log('reset()');
  }
}
