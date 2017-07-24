# CounterNx2

Usage component:
<code>
 <my-counter #counter1 [count]="counter1" [min]=-15 [max]=15 [step]=2></my-counter>
 
 <my-counter #counter2 [count]="counter2" [min]=0 [max]=100 [step]=5></my-counter>
</code>
Params:

* count - value of counter
* min - min value
* max - max value
* step - inc/dec value
* default - init/reset value
  
 Methods:
 * reset() - set 'count' to 'default' value
  

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

