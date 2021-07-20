function findMax(nums) {
  let max = nums[0]
  for (num of nums) {
    if(num > max) {
      max = num;
    }
  }
  return max
}

function findMin(nums) {
  let min = nums[0];
  for (num of nums) {
    if(num < min) {
      min = num;
    }
  }
  return min
}

const array = [77, -5, 2, 89, 44, 37, 67, 135]

console.log(findMax(array));
console.log(findMin(array));