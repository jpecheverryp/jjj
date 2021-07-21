function XO(str) {
  let xCounter = 0;
  let oCounter = 0;
  for (let i = 0; i < str.length; i++) {
    if(str[i].toLowerCase() === 'x') {
      xCounter++;
    }
    if(str[i].toLowerCase() === 'o') {
      oCounter++;
    }
  }
  return xCounter === oCounter;
}

console.log(XO('ooxx'));
console.log(XO('xooxx'));
console.log(XO('ooxXm'));
console.log(XO('zpzpzpp'));
console.log(XO('zzoo'));