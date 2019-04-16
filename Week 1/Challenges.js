/*
var console;
var prompt;

var massJohn = prompt('Please give a value for John\'s mass(kg):  ');
var heightJohn = 1.71;

var heightMark = 1.64;
var massMark = prompt('Please insert Mark\'s mass(kg):  ')

var BIMJohn = massJohn / (heightJohn * heightJohn);
var BIMMark = massMark / (heightMark * heightMark);
var checkBIM = BIMMark > BIMJohn;
console.log('This is John\'s BIM = ' + BIMJohn);
console.log('Yet this is Mark\'s BIM = ' + BIMMark);
console.log('Is Mark\'s BMI greater than John\'s? ' + checkBIM);
*/




// Challenge 2

var console;

var JohnAverage = (89 + 120 + 103) / 3;
console.log('Johns average is ' + JohnAverage);

var MikeAverage = (89 + 120 + 103) / 3;
console.log('Mikes average is ' + MikeAverage);

//var MaryAverage = (97 + 134 + 105) / 3;
//console.log('Mikes average is ' + MikeAverage);

var TheResult = MikeAverage > JohnAverage;
console.log('Is Mikes average bigger than Johns? ' + TheResult);

if (TheResult === true) {
    console.log('Mike is BETTER at basketball than John!!!');
} else if (JohnAverage === MikeAverage) {
    console.log('Yikes!!! The score struck a juce!!!');
} else {
    console.log('John is BETTER at basketball than Mike!!!!');
}



































