function longestWord(word) {
  // stripping away punctuation
  // e.g. "hello$% ##all" becomes [hello, all]
  var arr = word.match(/[a-z0-9]+/gi);

  // the array sort function takes a function as a parameter
  // which is used to compare each element in the array to the
  // next element in the array
  var sorted = arr.sort(function(a, b) {
    return b.length - a.length;
  });

  // this array now contains all the words in the original
  // string but in order from longest to shortest length
  // so we simply return the first element
  return sorted[0];

}

console.log(longestWord("Looking&* to learn some .?web development skills on your own?"));
/*
SORT() AND COMPARE function(a, b) { a - b }EXPLAINED
function(a, b){return a-b}

When the sort() function compares two values,
it sends the values to the compare function,
and sorts the values according to the returned (negative, zero, positive) value.

When comparing 3 and 7, the sort() method calls the compare function(40,100).

The function calculates 3-7, and returns -4 (a negative value).

The sort function sort() will sort 3 as a value lower than 7.
*/

// sort() needs compare function as sort() method will produce incorrect result when sorting numbers.

var numbers = [4, 2, 5, 120, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// sort numbers in array in ascending order
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});
// sort numbers in array in descending order
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b-a});
//sort alphabetically
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
// reverse the roder
fruits.reverse();
