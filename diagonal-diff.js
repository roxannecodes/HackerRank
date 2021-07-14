
/*
https://www.hackerrank.com/challenges/diagonal-difference/problem

Given a square matrix of integers (2d-array), return the 
** absolute value of the diagonal difference 
ex: 
1 2 3 
4 5 6 
9 8 9  
* return: |(1+5+9) - (3+5+9)| = 2
*/
// the above shows 2d array: arr [i][j] --> arr= [1,2,3],[4,5,6],[9,8,9] -- with n=3
//n represents the number of rows and columns (** hint: n=arr.length)



let diagonalDifference= (arr) => {
 let n=arr.length;
 let leftSum = 0;
 let rightSum=0;

 for (let i = 0; i<n; i++) {
    leftSum += arr[i][i]; // sum if (j=i)
    rightSum += arr[i][n-i-1];// sum if (j=n-1-i)
}  
return Math.abs(leftSum-rightSum);
}
console.log (diagonalDifference([[1,2,3],[4,5,6],[9,8,9]]));





// WRONG ANSWER :(

let diagonalDifference= (arr) => {
    let n=arr.length;
    let leftSum;
    let rightSum;
    
      for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            if (j===i) {
                leftSum+= arr[i][j];
            }
            else if (j===n-1-i) {
                    rightSum += arr[i][j];
            }
        }
       
    }
    return Math.abs(leftSum - rightSum);
}
console.log (diagonalDifference([[1,2,3],[4,5,6],[9,8,9]]));

