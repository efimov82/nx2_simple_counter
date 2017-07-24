
import { Component, OnInit } from '@angular/core';
import { CounterComponent } from './counter/counter.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


})
export class AppComponent implements OnInit {
  counter1_val: number = 2;
  counter2_val: number = 6;

  ngOnInit() {
  }

  resetAll(counter1: CounterComponent, counter2: CounterComponent) {
    counter1.resetVal();
    counter2.resetVal();

    console.log('reset all');
  }
}
