// Array & its Methods.

//toString() - returns a new String seperated with comma & doesn't affect original Array.
let Bikes = ['Hero','Suzuki','Yamaha','KTM','Bajaj','Pulsar'];
// console.log(Bikes.toString());

// join()- returns a new String by concatenating all elements with comma & doesn't affect original Array.
console.log(Bikes.join());
console.log(Bikes.join(""));
console.log(Bikes.join("-"));



let numbers = [1,2,3,4,5,6];

// slice()
let sliceResult = numbers.slice(1,3);
// console.log(sliceResult);

//Splice()
numbers.splice(3,2,"splicedArray");
//Splice deosn't return a new varaible.
// console.log(numbers);

// sort()
let unSorted = [12,2,4,8,69,96];
// unSorted.sort((a,b)=>(a-b)); // for Ascending order
unSorted.sort((a,b)=>(b-a)); // for Descending order
// console.log(unSorted);

// question - Find the 2nd largest number from Arr =[10,2,36,15,26,36,35]; 

function secondLargeArray(arr){
    // const uniqueArray = new Set(arr);
    const uniqueArray = Array.from(new Set(arr)); //set returns only Unique elements & "Array.from" converts any objects into Arrays
    uniqueArray.sort((a,b)=>{
        return b - a ;
    })
    if(uniqueArray.length >=2){
        return `The Second Largest element from the Array [${uniqueArray}] is: ${uniqueArray[1]}`;
    }
    else{
        return -1;
    } 
}
//solved using Brute Force Approach/Analysis.
// console.log(secondLargeArray([10,2,36,15,26,36,35]));
// console.log(secondLargeArray([10,5,10]));


//Optimised way of solving the Above question with Time Complexity\

function secondLargaestOptimised(arr){
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>largest){
            secondLargest = largest;
            largest = arr[i];
        }
        else if(arr[i]!=largest && arr[i]> secondLargest){
            secondLargest = arr[i];
        }
    }
    // return largest; 
    //there canot be 2 returns in a function,if there compiler stops at 1st return statement does not reach to the 2nd statement.
    return secondLargest;
}
// console.log(secondLargaestOptimised([10,2,36,15,26,36,35]));
// console.log(secondLargaestOptimised([10,5,10]));
