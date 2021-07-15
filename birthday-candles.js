/*
https://www.hackerrank.com/challenges/birthday-cake-candles/problem

You are in charge of the cake for a child's birthday. You have decided the cake will have one 
candle for each year of their total age. They will only be able to blow out the tallest of the candles. 
Count how many candles are tallest. 

Ex: [4,4,1,3] ==> return 2 
*/


let birthdayCakeCandles = (arr) => {
    let numMax = Math.max (...arr); //gets max val of array <3!!
   // console.log (numMax); //4
    let num=0;
    for (let i=0;i<arr.length;i++) {
        if (arr [i]===numMax) {
            num +=1;
        }
    }
   return num;
}

console.log (birthdayCakeCandles([4,4,1,3])); //2

// Shorter method 

function birthdayCakeCandles(arr) {
    let numMax = Math.max(...arr);
    return arr.filter((v) => v === max).length; //modifies original array to only contain filtered max items
  }
  console.log (birthdayCakeCandles([4,4,1,3])); //2