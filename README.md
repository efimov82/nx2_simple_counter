# CounterNx2

Usage component:
<pre>
 <my-counter #counter1 [count]="counter1" [min]=-15 [max]=15 [step]=2></my-counter>
 <my-counter #counter2 [count]="counter2" [min]=0 [max]=100 [step]=5></my-counter>
</pre>
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

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


