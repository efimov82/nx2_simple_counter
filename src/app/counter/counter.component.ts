import { Store } from '@ngrx/store';
import { AppStore } from './../store/app.store';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

// import { COUNTER1_NEW_VALUE, COUNTER2_NEW_VALUE } from './../store/counters.reducer';

@Component({
  selector: 'my-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  @Input() store_name: string = '';
  @Input() store_action: string = '';
  @Input() count: number = 0;
  @Input() default: number = 0;
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() step: number = 1;

  @Output()
  changeValue: EventEmitter<number> = new EventEmitter<number>();


  constructor(private store: Store<AppStore>) { }

  ngOnInit() {
    this.count = Number(this.count);

    if (this.count <= this.min) {
      this.count = Number(this.min);
    }

    if (this.count >= this.max) {
      this.count = Number(this.max);
    }

    if (this.store_name && this.store_action) {
      this.store.select<number>(this.store_name)
        .subscribe(val => {
          this.count = val;
        });
    }

    this.emit(this.count);
  }


  increment() {
    if (Number(this.count) + Number(this.step) <= Number(this.max)) {
      this.count = Number(this.count) + Number(this.step);
      this.emit(this.count);
    }
  }

  decrement() {
    if (Number(this.count) - Number(this.step) >= Number(this.min)) {
      this.count = Number(this.count) - Number(this.step);
      this.emit(this.count);
    }
  }

  resetVal() {
    this.count = Number(this.default);
    this.emit(this.count);
  }

  protected emit(value: number) {
    this.changeValue.emit(this.count);

    if (this.store_name && this.store_action) {
      this.store.dispatch({ type: this.store_action, payload: value });
    }
  }
}
