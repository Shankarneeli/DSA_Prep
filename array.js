/* ARRAY METHODS

1. toString()
2. join()
3. pop()
4. push()
5. shift()
6. unshift()
7. delete
8. concat()
9. sort()
10. splice()
11. slice()
12. reverse()
13. isArray()
14. indexOf()
15. lastIndexOf()
16. find()
17. findIndex()
18. includes()
19. entries()
20. every()
21. some()
22. fill()
22. copyWithin()
23. valueOf()
24. forEach()
25. map()
26. filter()
27. reduce()
28. reduceRight()
29. from()

*/
// //1.toString() - Combines the Array into single String & returns the new String, seperated with comma & doesn't affect original Array.
let Bikes = ['Hero','Suzuki','Yamaha','KTM','Bajaj','Pulsar'];
// console.log(Bikes.toString());

// //2.join()- returns a new String by concatenating all elements & doesn't affect original Array.Both toString() & join()
//  converts the array into a single string but the key diff is,in join() we can specify our own seperator(can customize).
// console.log(Bikes.join());
// console.log(Bikes.join(""));
// console.log(Bikes.join(" & "));
// console.log(Bikes.join("-"));


// // 3.pop()- REMOVES the last element of an array & retuns only the removed element from the array.Changes the original Array.
// console.log(Bikes); //Printing the Original Array for Comparision.
// console.log(Bikes.pop()); //removes & prints only removed element from Array.
// console.log(Bikes); //can see pop() made changes in original Array.


// //4.push()- ADDS an element at the end of the array.Accepts parameters inside the method,what to add inside array.changes original array.
// console.log(Bikes); //Printing the Original Array for Comparision.
// console.log(Bikes.push("Royal Enfield","Jawa")); //if we console log,it prints the length of array after pushing new elements.
// // Bikes.push("Royal Enfield","Jawa")
// console.log(Bikes);


// //5.shift()- This is similar to pop().But,REMOVES the 1st element of an array & retuns only the removed element from the array.
// console.log(Bikes); //Printing the Original Array for Comparision.
// console.log(Bikes.shift()); //removes & prints only removed element from Array.
// console.log(Bikes); //can see pop() made changes in original Array.


// //6.unShift()- this method ADDS the elements at the begining of array & accepts parameters.
// console.log(Bikes); //Printing the Original Array for Comparision.
// // console.log(Bikes.unshift("Bmw","Ninja")); //if we console log,it prints the length of array after adding new elements.
// Bikes.unshift("Bmw","Ninja");
// console.log(Bikes);


// // 7.delete(Operator)- deletes array elements using index,but it leaves undefined holes in array.
// console.log(Bikes); //Printing the Original Array for Comparision.
// delete Bikes[1]; //deleting 1st index using delete Operator.
// console.log(Bikes); //[check the output].Changes original Array & leaves empty space in main Array.


// //8.concat()- this methods concatinates/joins 2 or more arrays & returns new array.No changes in main Array.
// let petrolScooties = ["Activa","wego","jupitor"];
// let  evScooties = ["Ola","Ather","TVS"];
// // let new_Bikes= Bikes.concat(petrolScooties,evScooties);
// // console.log(new_Bikes);
// console.log(Bikes.concat(petrolScooties,evScooties));
// console.log(Bikes); //Printing the Original Array for Comparision.


// //9. sort() - by default this method converts elements of array into strings & sorts lexicographically(like dictionary).but for 
// sorting numbers, we should take functions to compare. a & b. if a<b gives Descending. b<a gives Ascending order numbers.
let unSortedNumbers = [12,2,4,8,69,96];
let unSortedStrings = ["sai","Bhargav","Venkat"];
unSortedNumbers.sort((a,b)=>(a-b)); // for Ascending order
// unSortedNumbers.sort((a,b)=>(b-a)); // for Descending order
//Don't try running ascending & descending at a tym.
// console.log(unSortedNumbers);
unSortedStrings.sort(); //sorts alphabetically for strings.
// console.log(unSortedStrings);

let numbers = [1,2,3,4,5,6];
// //10.Splice()- ADDS or REMOVES element.syntax = array.splice(index,howManyElements,newElements);
// (1st parameter)from which index to start removing,(2nd parameter)how many elements to remove,(3rd param)new elements.
// numbers.splice(2,3,9,"hotDog"); //removes 3 elements from 2nd index & adds 9, hotDog inplace of them.
// console.log(numbers); //changes original Main Array.

// //11.slice()-accepts parameters,start & end indexes & returns the Removed elements. 
// let sliceResult = numbers.slice(1,3); //doesn't include 3rd index(n-1).
// console.log(sliceResult);//prints remaining elements.no changes main array,creates new Array.
// console.log(numbers); //Printing the Original Array for Comparision.


// //12.reverse()- REVERSEs the elements of array.
let letters = ["a","b","c","d","e"];
// console.log(numbers);
// console.log(letters);
// numbers.reverse();
// letters.reverse();
// console.log(numbers); //changes the main Array
// console.log(letters); //changes the main Array

// //13.isArray()- this returns True or False, if the object is array.
// let arr = "this is an Array";
// console.log(Array.isArray(letters));
// console.log(Array.isArray(arr));


// //14.indexOf()- This counts from LEFT to RIGHT.using this method,we can find the index of an element in an array,if not there returns -1.
// console.log(Bikes.indexOf("Bajaj"));
// console.log(Bikes.indexOf("sai"));


// //15.lastIndexOf() -This counts from RIGHT to LEFT.using this method,we can find the index of an element in an array,
// especially used in case of duplicates present in Arrays.if the element is not present then returns -1.
// let items = ["watch","mobile","waterBottle","Keys","mobile"];
// console.log(items.lastIndexOf("mobile"));


// //16.find()- takes a function & returns the first element that satisfies the condition.
// let number = [5, 12, 8, 130, 44];
// let found = number.find(element => element > 20);
// console.log(found); 


// //17.-findIndex()- this is like combination of find & indexOf methods.using this we can FIND the INDEX of specific element
// which satisfies the conditon,if the condition fails then returns -1.This Takes a function
// const unOrdredNumbers = [12,2,4,8,69,96];
// const indexFinding = (element)=>element>20;
// console.log(unOrdredNumbers.findIndex(indexFinding)); //Output - 4. index of 4 = 69,which is greaterThan 20.


// //18.includes()- used to find weather any element is present inside or not. returns True or False.
// console.log(Bikes.includes("KTM",1));
// console.log(Bikes.includes("BMW",1));


// //19.
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
