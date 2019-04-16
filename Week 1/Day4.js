//  Truthy & Falsey values
var console;



var height;
height = 0;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}




/// Equality operator
if (height == '23') {
    console.log('The operator == does type coercion');
} else if (height === '23') {
    console.log('The operator === does NOT do type coercion!!');
}





