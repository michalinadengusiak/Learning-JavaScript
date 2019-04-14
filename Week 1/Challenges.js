var console;
var prompt;

var massJohn = prompt('Please give a value for Johns mass(kg):  ');
var heightJohn = 1.71;

var heightMark = 1.64;
var massMark = prompt('Please insert Marks mass(kg):  ')

var BIMJohn = massJohn / (heightJohn * heightJohn);
var BIMMark = massMark / (heightMark * heightMark);
var checkBIM = BIMMark > BIMJohn;
console.log('This is Johns BIM = ' + BIMJohn);
console.log('Yet this is Marks BIM = ' + BIMMark);
console.log('Is Marks BIM greater than Johns? ' + checkBIM);