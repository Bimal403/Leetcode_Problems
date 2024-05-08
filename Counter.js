// Given an integer n, return a counter function. This counter function initially
// returns n and then returns 1 more than the previous value every subsequent time
//  it is called (n, n + 1, n + 2, etc)

var CreateCounter = function (n) {
  return function () {
    console.log(n++);
  };
};

const counter = CreateCounter(5);
counter();
counter();
counter();
