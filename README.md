# CounterNx2

<p>Usage component:</p>

1. Simple: 
```
<my-counter></<my-counter>
```

2. With Output change function
```
 <my-counter #counter1 [count]="counter_val" [min]=-5 [max]=5 (changeValue)="handlerChange($event)"></my-counter>
```

3. With Store
```
<my-counter [store_name]="counter1" [store_action]="NEW_VALUE"  [min]=-5 [max]=5></my-counter>
```

In your store need add varible name = [store_name]. For example your store look like this:
```
export interface AppStore {
  counter1: number;
}
```

and add Reducer with type action = 'NEW_VALUE' like this:
```
export function counterReducer(state: any = [], action: Action) {
  switch (action.type) {
    case NEW_VALUE:
      return action.payload;

    default:
      return state;
  }
}
```

<p>Input params:</p>

* count - value of counter
* min - min value
* max - max value
* step - inc/dec value
* default - init/reset value
  
 Methods:
 * resetVal() - set 'count' to 'default' value
 * changeValue - handler for change value of counter

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

