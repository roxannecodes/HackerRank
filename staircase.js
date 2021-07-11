/* print the staircase given single int.(n) as a parameter
example: n=4
#
##
###
####
*/

// short-answer
function staircase(n) {
    for(let i = 1; i <= n; i++) {
       console.log ( ' '.repeat(n - i) + '#'.repeat(i) );
    }
}
staircase(4);

//my solution
function stairCase(n){
    let arr = Array(n-1).fill(' ')
    
    for (let i = n-1; i >= 0; i--) {
        arr[i] = '#';
        console.log(arr.join(''));
    }
}

staircase(6);