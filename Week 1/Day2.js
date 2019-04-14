
var console;




var now = 2019;
var yearJohn = 1989;
var fullAge = 18;


var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);
var x, y;
x = (3 + 5) * 4 - 6;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

x = x * 2; // the same
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;  //  means x + 1
console.log(x);


var firstName = 'John';
var civilStatus = 'singlw';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


var isMarried = false;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


