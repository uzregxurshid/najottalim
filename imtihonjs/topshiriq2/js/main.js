let numbersSum = function (numbers){
  let sum=0;
  for (let number of numbers){
    if (number>=0){
      sum+=number;
    }
  }
  return Number(sum);
}
var numbers = [1, -5, 16, 0, 2];
console.log(numbersSum(numbers));