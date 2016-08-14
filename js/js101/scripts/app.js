// set one
var foo = doSomething(2, 2);

// set two
var bar = doSomething(3, 2);

// function
function doSomething(paramOne, paramTwo)  {
    paramOne = paramOne + 3;
    paramOne = paramOne + 1;
    paramOne = paramOne * 8;

    return paramOne * paramTwo;
}

alert(foo);
alert(bar);