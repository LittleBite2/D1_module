// const math=require('./math.js')
// console.log(math.add(4,3));
// console.log(math.subtract(4,3));

// console.log(math.default(4,3));


const {add, subtract, default:math}=require('./math.js')
console.log(add(4,3));
console.log(subtract(4,3));

console.log(math(4,3));
