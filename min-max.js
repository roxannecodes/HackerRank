/*
 * Complete the 'miniMaxSum' function below.
 * The function accepts INTEGER_ARRAY arr as parameter.
 * returns min and max sum (2 space separated integers)
 */

//*** first solution  *** 

function miniMaxSum(arr) {
    //first replicate array before using sort()
    let arrCopy=arr.slice(); 
    //sort array in ascending order -- Default-- (a,b) => a-b;
    let arrayMax = arr.sort();
    //splice out first int (by storing in a holder array.)
    let arrayMajor=arrayMax.splice(0,1);
    //get sum of arrays with min-value removed 
    let sum1=0;
     for (let i=0; i<arrayMax.length; i++) {
          sum1 += arrayMax[i];
         }
    //sort array in descending order 
    //splice out first int.
    let arrayMin=arrCopy.sort((a,b)=>b-a);
    let arrayMinor=arrayMin.splice(0,1);
    //get sum of arrays with min-value removed (4 left)
    let sum2=0;
     for (let i=0; i<arrayMin.length; i++) {
         sum2 += arrayMin[i];
        }
    console.log(sum2 + " " + sum1);
}
//self-test
//console.log (miniMaxSum([1,2,3,5,4]));

// *** second solution ***
 function miniMaxSum(arr) {
    //first replicate array (use for min)
     let arrCopy=arr.slice();
    //sort array in descending order 
     let arrMax = arr.sort((a,b)=>b-a);
    //pop off last value and store in holder array
     let arrMajor=arrMax.pop();
    // get sum of remaining 4 elements
      let sum1= arrMax.reduce((a,b)=>a+b);

 // ** repeat process for arrayMin (lowest 4 elements in ascending)**
      let arrMin=arrCopy.sort ((a,b)=>a-b);
      let arrMinor=arrMin.pop();
      let sum2=arrMin.reduce ((a, b) => a + b);

      console.log (sum2 + " " + sum1);
 }

//console.log (miniMaxSum([1,2,3,5,4]));

// *** Better solution ***
function miniMaxSum(arr) {
    let sum = arr.reduce((a, b) => a + b);
    let maxVal = Math.max(...arr);
    let minVal = Math.min(...arr);
    console.log((sum - maxVal) + " " + (sum - minVal));
}

//console.log (miniMaxSum([1,2,3,5,4]));
