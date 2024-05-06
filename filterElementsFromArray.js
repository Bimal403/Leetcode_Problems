// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
// The fn function takes one or two arguments:
// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the 
// expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where
//  Boolean(value) returns true.
// Please solve it without the built-in Array.filter method.

let myArray=[1,2,3,3,4];

function fn(value,index)

{        
       if(value>2)
       {
              return true;
       }
       else
       return false;
}
function myFunc(myArray,fn)
{
    let filteredArr=[];
    for (let i = 0; i < myArray.length; i++) {
       if (fn(myArray[i], i)) {
           filteredArr.push(myArray[i]);
       }
   }
   return filteredArr;
}
  

const answer=myFunc(myArray,fn);
console.log(answer);