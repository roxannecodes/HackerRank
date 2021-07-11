/* print the staircase given single int.(n) as a parameter
example: n=4
#
##
###
####
*/

// string.repeat() = <3!
function staircase (n) {
    let string="#";
    for (let i=0;i<n;i++){
     console.log (string.repeat(i+1))
    }
}
staircase(4);

//upside-down staircase (backward for-loop)
function staircase (n){
let string = "#"
for (let i=n-1;i>=0;i-- ){
    console.log (string.repeat(i+1))
}
}

staircase(6);