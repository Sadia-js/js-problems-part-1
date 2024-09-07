let a = 5;
let b = 7;
console.log(a, b);

// a = b
// b = a
const temp = a;
a = b;
b = temp;
console.log('Value of a is', a, 'and b is', b);


// ----------------------------
let x = '4';
let y = [1,2,7];

console.log(x, y);
[x, y] = [y, x];
console.log(x, y);

