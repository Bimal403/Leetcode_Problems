// The Two Sum problem requires finding index of two numbers in an array that sum up to a specific target value. 

function TwoSumProblem(array,target)
{
    let flag=0;
    for(let i=0;i<array.length;i++)
    {
             for(let j=0;j<array.length;j++)
             {
                if(array[i]+array[j]===target)
                {
                    flag=1;
                    console.log(`[${i},${j}]`);
                    break;
                }
                
             }
             if(flag===1)
                {
                    break;
                }
             
    }
}

TwoSumProblem([3,7,1,15,42],45);



//using hash map

function TwoSumProblem1(array,target){

    let hashedmap=new Map();
    for(let i=0;i<array.length;i++)
    {
        let complement=target-array[i];
        if(hashedmap.has(complement))
        {
            console.log([hashedmap.get(complement),i]);
            return;
        }
        hashedmap.set(array[i],i);
    }
    return  null;

}
TwoSumProblem1([1,2,2,3,4,5,6],4);