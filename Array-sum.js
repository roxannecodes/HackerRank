/*
 * Complete the 'simpleArraySum' function below.
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */
// https://www.hackerrank.com/challenges/simple-array-sum/problem

function simpleArraySum(ar) {
     let sum=0;
      for (let i=0; i<ar.length; i++){
      sum += ar[i];
      }
 return sum
}

console.log (simpleArraySum([1,2,3]));

let simpleArraySum= (ar) => {
 return ar.reduce((a,b)=>a+b);
}
console.log (simpleArraySum([1,2,3]));