var console;



var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}


// The Ternary Operator 
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
    
    
//Switch Statement
    var job = 'teacher';
    switch (job) {
        case 'teacher':
            console.log(firstName + ' teaches kids how to code.');
            
        case 'driver':
            console.log(firstName + 'drives an uber in Lisbon.');
            
        case designer:
            console.log(firstName + ' designs beautiful websites.');
            
            break;
            
        default:
            console.log(firstName + 'does not work.');
    }