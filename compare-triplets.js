
/* 
Input 2 triplet arrays for alice and bobs points, respectively.
Output: array with each's total score 
ex: a= [1,2,3] b= [3,2,1] --> [1,1]
*/

let compareTriplets = (a,b) => {
let scoreA=0;
let scoreB=0;
for (let i=0; i<a.length; i++) {
     if ( a[i] > b[i] ) {
         scoreA+= 1;
     } else if ( a[i]<b[i] ) {
         scoreB+=1;
     }
    }
   return [scoreA, scoreB];
}

console.log ( compareTriplets([1,2,3], [3,2,1]));