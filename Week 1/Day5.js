// Functions

var console;


function calculateAge(birthYear) {
    return 2019 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);


function yearUntilRetirement(year, firstName) {
    var age, retirement;
    age = calculateAge(year);
    retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' has already retired');
    }
}
yearUntilRetirement(1990, 'John');
yearUntilRetirement(1948, 'Mike');
yearUntilRetirement(1969, 'Jane');

// Function Expressions

var whatDoYouDo = function (job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
            
        case 'driver':
            return firstName + ' drives a cab in Lisbon.'
            
        case 'designer': 
            return firstName + ' designs beautiful websites.'
            
        default:
            return firstName + ' does not work!';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('lazy', 'Mike'));