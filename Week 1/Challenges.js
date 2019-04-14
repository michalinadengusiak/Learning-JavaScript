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


