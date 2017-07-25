# CounterNx2

<p>Usage component:</p>

1. Simple: 
<pre><my-counter></<my-counter></pre>

2. With Outer change function
 <my-counter #counter1 [count]="counter_val" [min]=-5 [max]=5 (changeValue)="handlerChange($event)"></my-counter>

3. With use Store
<my-counter [store_name]="counter1" [store_action]="NEW_VALUE"  [min]=-5 [max]=5></my-counter>

Coz in your store need add varible name = "counter". For example below your store look like this:
export interface AppStore {
  counter1: number;
}

and add Reducer with type action = 'NEW_VALUE' like this:

export function counterReducer(state: any = [], action: Action) {
  switch (action.type) {
    case NEW_VALUE:
      return action.payload;

    default:
      return state;
  }
}


<p>Input params:</p>

* count - value of counter
* min - min value
* max - max value
* step - inc/dec value
* default - init/reset value
  
 Methods:
 * resetVal() - set 'count' to 'default' value
  

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

