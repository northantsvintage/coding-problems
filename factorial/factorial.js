function firstFactorial(num) {
  var fact = 1;
  for (var i = 1; i <= num; i++) {
    fact = num * i;
  }
  return fact;

}

// keep this function call here
var result = firstFactorial(32);
console.log(result);
