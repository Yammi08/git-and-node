const math = require('./math');
const color = require('colors');
a = 1;
b = 5;
t = 2;
console.log('operators!! c:\n'.rainbow);
console.log('sawtooth'.green);
console.log(color.bold(color.gray(math.sawtooth(2.5))));
console.log('clamp'.green);
console.log(color.bold(color.gray(math.clamp(t,a,b))));
console.log('lerp'.green);
console.log(color.bold(color.gray(math.lerp(a,b,t))));
console.log('pow'.green);
console.log(color.bold(color.gray(math.pow(b,b))));
console.log('smootherstep'.green);
console.log(color.bold(color.gray(math.smootherstep(a,b,2))));
console.log('smoothstep'.green);
console.log(color.bold(color.gray(math.smoothstep(a,b,2))));
console.log('sqrt'.green);
console.log(color.bold(color.gray(math.sqrt(b))));
