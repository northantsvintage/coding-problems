function firstFactorial(num) {
  var fact = 1;
  for (var i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;

}

// keep this function call here
var result = firstFactorial(5);
console.log(result);
