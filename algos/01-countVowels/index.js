function getCount(str) {
  let vowelsCount = 0;
  str.toLowerCase().split('').forEach(letter => {
    if ('aeiou'.includes(letter)) {
      vowelsCount++;
    }

  });
  return vowelsCount;
}

console.log(getCount('ogaleicrum'));