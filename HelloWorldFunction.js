// Write a function createHelloWorld. It should return a
//  new function that always returns "Hello World".

var createHelloWorld=function()

{
    return function()
    {
        console.log("Hello World!!");
    }
}

const output=createHelloWorld();
output();