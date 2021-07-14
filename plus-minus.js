
// https://www.hackerrank.com/challenges/plus-minus/problem

//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
//Print (on to the console) the decimal value of each fraction on a new line with 6 places after the decimal.

function plusMinus(arr) {
 let n=arr.length;
 let neg=0;
 let pos=0;
 let zero=0;

  for (let i=0; i<n; i++) {
      if (arr[i]>0) {
          pos +=1;
      } else if (arr[i]<0) {
          neg +=1;
      } else  {
          zero +=1
      }
  }

      console.log ((pos/n).toFixed(6));
      console.log ((neg/n).toFixed(6));
      console.log ((zero/n).toFixed(6));
 }

plusMinus([1,1,0,-1,1]);
// 0.60000
//0.200000
//0.200000

