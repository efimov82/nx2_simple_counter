import { Component, Input, Output, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'my-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent { //  implements OnInit
  @Input() count: number = 0;
  @Input() default: number = 0;
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() step: number = 1;

  ngOnInit () {
    this.count = Number(this.count);

    if (this.count <= this.min) {
      this.count = Number(this.min);
    }

    if (this.count >= this.max) {
      this.count = Number(this.max);
    }
  }


  increment() {
    if (Number(this.count) + Number(this.step) <= Number(this.max)) {
      this.count = Number(this.count) + Number(this.step);
    }
  }

  decrement() {
    if (Number(this.count) - Number(this.step) >= Number(this.min)) {
      this.count = Number(this.count) - Number(this.step);
    }
  }

  resetVal() {
    this.count = Number(this.default);
  }
}
