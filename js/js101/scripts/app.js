var doSomething = function(paramOne, paramTwo, fn)  {
    paramOne = paramOne + 3;
    paramOne = paramOne + 1;
    paramOne = paramOne * 8;

    return fn(paramOne, paramTwo);
}

function sum (paramOne, paramTwo) {
    return paramOne + paramTwo;
}

// set one
var foo = doSomething(2, 2, sum);

// set two & use of anonymous function
var bar = doSomething(3, 2, function (paramOne, paramTwo) {
    return paramOne * paramTwo;
});

alert(foo);
alert(bar);