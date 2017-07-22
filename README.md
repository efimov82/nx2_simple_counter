# nx2_simple_counter
Nx2. Simple counter

Params:
count - value of counter
min - min value
max - max value
step - inc/dec value
default - init/reset value

Methods:
reset() - set 'count' to 'default' value

Usage:
<my-counter #counter1 [count]="counter1" [min]=-15 [max]=15 [step]=2></my-counter>
<my-counter #counter2 [count]="counter2" [min]=0 [max]=100 [step]=5></my-counter>

