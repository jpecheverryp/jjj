function evenOdd(number) {
  if (number === 0) {
    return 'zero'
  }
  if(number%2 === 0) {
    return number + ' is even'
  }
  return number + ' is odd'
}

console.log(evenOdd(9));
console.log(evenOdd(-4));
console.log(evenOdd(0));
console.log(evenOdd(33));
console.log(evenOdd(45));
console.log(evenOdd(256));